import type { Context, Config } from "@netlify/functions";
import { getStore } from "@netlify/blobs";

interface VisitorData {
  ip: string;
  country: string;
  city: string;
  userAgent: string;
  referrer: string;
  page: string;
  timestamp: string;
}

interface AnalyticsData {
  totalVisits: number;
  uniqueVisitors: string[];
  visits: VisitorData[];
  countryCounts: Record<string, number>;
  pageViews: Record<string, number>;
}

export default async (req: Request, context: Context) => {
  // Only accept POST requests
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const { page, referrer } = body;

    // Get visitor information from the context
    const ip = context.ip || "unknown";
    const geo = context.geo || {};
    const country = geo.country?.name || geo.country?.code || "Unknown";
    const city = geo.city || "Unknown";
    const userAgent = req.headers.get("user-agent") || "Unknown";

    const visitorData: VisitorData = {
      ip: ip,
      country: country,
      city: city,
      userAgent: userAgent,
      referrer: referrer || "Direct",
      page: page || "/",
      timestamp: new Date().toISOString(),
    };

    // Get the analytics store
    const store = getStore("analytics");

    // Get existing analytics data or create new
    let analytics: AnalyticsData = await store.get("visitor-data", { type: "json" });

    if (!analytics) {
      analytics = {
        totalVisits: 0,
        uniqueVisitors: [],
        visits: [],
        countryCounts: {},
        pageViews: {},
      };
    }

    // Update analytics
    analytics.totalVisits += 1;

    // Track unique visitors by IP
    if (!analytics.uniqueVisitors.includes(ip)) {
      analytics.uniqueVisitors.push(ip);
    }

    // Keep only last 1000 visits to avoid storage bloat
    if (analytics.visits.length >= 1000) {
      analytics.visits = analytics.visits.slice(-999);
    }
    analytics.visits.push(visitorData);

    // Update country counts
    analytics.countryCounts[country] = (analytics.countryCounts[country] || 0) + 1;

    // Update page views
    analytics.pageViews[page || "/"] = (analytics.pageViews[page || "/"] || 0) + 1;

    // Save updated analytics
    await store.setJSON("visitor-data", analytics);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error tracking visit:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const config: Config = {
  path: "/api/track-visit",
};
