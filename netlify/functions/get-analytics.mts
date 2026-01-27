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
  // Only accept GET requests
  if (req.method !== "GET") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
    
  }

  try {
    // Get the analytics store
    const store = getStore("analytics");

    // Get existing analytics data
    const analytics: AnalyticsData | null = await store.get("visitor-data", { type: "json" });

    if (!analytics) {
      return new Response(
        JSON.stringify({
          totalVisits: 0,
          uniqueVisitors: 0,
          visits: [],
          countryCounts: {},
          pageViews: {},
          recentVisitors: [],
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Prepare response data
    // Mask IP addresses for privacy (show only partial)
    const recentVisitors = analytics.visits.slice(-50).reverse().map((visit) => ({
      ip: maskIP(visit.ip),
      country: visit.country,
      city: visit.city,
      page: visit.page,
      referrer: visit.referrer,
      timestamp: visit.timestamp,
      browser: parseBrowser(visit.userAgent),
    }));

    // Calculate visitor counts by day for chart
    const visitsByDay = calculateVisitsByDay(analytics.visits);

    return new Response(
      JSON.stringify({
        totalVisits: analytics.totalVisits,
        uniqueVisitors: analytics.uniqueVisitors.length,
        countryCounts: analytics.countryCounts,
        pageViews: analytics.pageViews,
        recentVisitors: recentVisitors,
        visitsByDay: visitsByDay,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

// Helper function to mask IP addresses for privacy
function maskIP(ip: string): string {
  if (ip === "unknown") return ip;
  const parts = ip.split(".");
  if (parts.length === 4) {
    return `${parts[0]}.${parts[1]}.***.***`;
  }
  // IPv6 or other format
  return ip.substring(0, ip.length / 2) + "***";
}

// Helper function to parse browser from user agent
function parseBrowser(userAgent: string): string {
  if (userAgent.includes("Firefox")) return "Firefox";
  if (userAgent.includes("Edg")) return "Edge";
  if (userAgent.includes("Chrome")) return "Chrome";
  if (userAgent.includes("Safari")) return "Safari";
  if (userAgent.includes("Opera") || userAgent.includes("OPR")) return "Opera";
  if (userAgent.includes("Brave")) return "Brave";
  return "Other";
}

// Helper function to calculate visits by day
function calculateVisitsByDay(visits: VisitorData[]): Record<string, number> {
  const visitsByDay: Record<string, number> = {};

  visits.forEach((visit) => {
    const date = visit.timestamp.split("T")[0];
    visitsByDay[date] = (visitsByDay[date] || 0) + 1;
  });

  // Get last 30 days
  const result: Record<string, number> = {};
  const today = new Date();

  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split("T")[0];
    result[dateStr] = visitsByDay[dateStr] || 0;
  }

  return result;
}

export const config: Config = {
  path: "/api/analytics",
};
