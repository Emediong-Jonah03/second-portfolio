import { useState, useEffect } from "react";
import { FiUsers, FiGlobe, FiEye, FiClock, FiArrowLeft, FiRefreshCw } from "react-icons/fi";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";

const Dashboard = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return true;
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const fetchAnalytics = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/analytics");
      if (!response.ok) throw new Error("Failed to fetch analytics");
      const data = await response.json();
      setAnalytics(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getTopCountries = () => {
    if (!analytics?.countryCounts) return [];
    return Object.entries(analytics.countryCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10);
  };

  const getTopPages = () => {
    if (!analytics?.pageViews) return [];
    return Object.entries(analytics.pageViews)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);
  };

  const getChartData = () => {
    if (!analytics?.visitsByDay) return [];
    return Object.entries(analytics.visitsByDay).map(([date, count]) => ({
      date: new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      count,
    }));
  };

  const maxVisits = analytics?.visitsByDay
    ? Math.max(...Object.values(analytics.visitsByDay), 1)
    : 1;

  return (
    <div className="min-h-screen bg-[#D6E4FF] dark:bg-[#000E24] transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full z-50 backdrop-blur-sm border-b border-[#003D99]/10 top-0 bg-[#E5F0FF]/80 dark:bg-[#000E24]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <a
                href="/"
                className="flex items-center space-x-2 text-[#003D99] dark:text-[#E5F0FF] hover:text-[#001433] dark:hover:text-[#CCE0FF] transition-colors"
              >
                <FiArrowLeft size={20} />
                <span className="font-semibold">Back to Site</span>
              </a>
              <span className="text-2xl font-bold text-[#003D99] dark:text-[#E5F0FF]">
                Analytics Dashboard
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={fetchAnalytics}
                className="p-2 rounded-full bg-[#CCE0FF] dark:bg-[#001433] text-[#003D99] dark:text-[#E5F0FF] hover:scale-105 transition-transform"
                aria-label="Refresh data"
              >
                <FiRefreshCw size={20} className={loading ? "animate-spin" : ""} />
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-[#CCE0FF] dark:bg-[#001433] text-[#003D99] dark:text-[#E5F0FF]"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <GoSun size={20} /> : <FaMoon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {loading && !analytics && (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#003D99] border-t-transparent"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg mb-6">
            Error: {error}
          </div>
        )}

        {analytics && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                icon={<FiEye size={24} />}
                title="Total Page Views"
                value={analytics.totalVisits}
                color="bg-blue-500"
              />
              <StatCard
                icon={<FiUsers size={24} />}
                title="Unique Visitors"
                value={analytics.uniqueVisitors}
                color="bg-green-500"
              />
              <StatCard
                icon={<FiGlobe size={24} />}
                title="Countries"
                value={Object.keys(analytics.countryCounts || {}).length}
                color="bg-purple-500"
              />
              <StatCard
                icon={<FiClock size={24} />}
                title="Recent Visitors"
                value={analytics.recentVisitors?.length || 0}
                color="bg-orange-500"
              />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Visits Over Time Chart */}
              <div className="bg-white dark:bg-[#001433] rounded-xl p-6 shadow-lg border border-[#003D99]/10">
                <h3 className="text-lg font-semibold text-[#003D99] dark:text-[#E5F0FF] mb-4">
                  Visits Over Last 30 Days
                </h3>
                <div className="h-64 flex items-end space-x-1">
                  {getChartData().map((item, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center justify-end"
                    >
                      <div
                        className="w-full bg-[#003D99] dark:bg-[#0052CC] rounded-t transition-all duration-300 hover:bg-[#0052CC] dark:hover:bg-[#3385FF]"
                        style={{
                          height: `${(item.count / maxVisits) * 100}%`,
                          minHeight: item.count > 0 ? "4px" : "2px",
                        }}
                        title={`${item.date}: ${item.count} visits`}
                      ></div>
                      {index % 5 === 0 && (
                        <span className="text-xs text-[#003D99]/60 dark:text-[#E5F0FF]/60 mt-1 transform -rotate-45 origin-left">
                          {item.date}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Countries */}
              <div className="bg-white dark:bg-[#001433] rounded-xl p-6 shadow-lg border border-[#003D99]/10">
                <h3 className="text-lg font-semibold text-[#003D99] dark:text-[#E5F0FF] mb-4">
                  Top Countries
                </h3>
                <div className="space-y-3">
                  {getTopCountries().length === 0 ? (
                    <p className="text-[#003D99]/60 dark:text-[#E5F0FF]/60">No data yet</p>
                  ) : (
                    getTopCountries().map(([country, count], index) => (
                      <div key={country} className="flex items-center space-x-3">
                        <span className="w-6 text-[#003D99]/60 dark:text-[#E5F0FF]/60 text-sm">
                          #{index + 1}
                        </span>
                        <div className="flex-1">
                          <div className="flex justify-between mb-1">
                            <span className="text-[#003D99] dark:text-[#E5F0FF]">{country}</span>
                            <span className="text-[#003D99]/60 dark:text-[#E5F0FF]/60">{count}</span>
                          </div>
                          <div className="h-2 bg-[#CCE0FF] dark:bg-[#002255] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#003D99] dark:bg-[#0052CC] rounded-full transition-all duration-300"
                              style={{
                                width: `${(count / (getTopCountries()[0]?.[1] || 1)) * 100}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Top Pages */}
            <div className="bg-white dark:bg-[#001433] rounded-xl p-6 shadow-lg border border-[#003D99]/10 mb-8">
              <h3 className="text-lg font-semibold text-[#003D99] dark:text-[#E5F0FF] mb-4">
                Top Pages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {getTopPages().length === 0 ? (
                  <p className="text-[#003D99]/60 dark:text-[#E5F0FF]/60">No data yet</p>
                ) : (
                  getTopPages().map(([page, count]) => (
                    <div
                      key={page}
                      className="bg-[#CCE0FF] dark:bg-[#002255] rounded-lg p-4 text-center"
                    >
                      <p className="text-[#003D99] dark:text-[#E5F0FF] font-medium truncate">
                        {page}
                      </p>
                      <p className="text-2xl font-bold text-[#003D99] dark:text-[#0052CC] mt-1">
                        {count}
                      </p>
                      <p className="text-xs text-[#003D99]/60 dark:text-[#E5F0FF]/60">views</p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Recent Visitors Table */}
            <div className="bg-white dark:bg-[#001433] rounded-xl p-6 shadow-lg border border-[#003D99]/10">
              <h3 className="text-lg font-semibold text-[#003D99] dark:text-[#E5F0FF] mb-4">
                Recent Visitors
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#003D99]/10">
                      <th className="text-left py-3 px-4 text-[#003D99]/60 dark:text-[#E5F0FF]/60 font-medium">
                        IP Address
                      </th>
                      <th className="text-left py-3 px-4 text-[#003D99]/60 dark:text-[#E5F0FF]/60 font-medium">
                        Country
                      </th>
                      <th className="text-left py-3 px-4 text-[#003D99]/60 dark:text-[#E5F0FF]/60 font-medium">
                        City
                      </th>
                      <th className="text-left py-3 px-4 text-[#003D99]/60 dark:text-[#E5F0FF]/60 font-medium">
                        Page
                      </th>
                      <th className="text-left py-3 px-4 text-[#003D99]/60 dark:text-[#E5F0FF]/60 font-medium">
                        Browser
                      </th>
                      <th className="text-left py-3 px-4 text-[#003D99]/60 dark:text-[#E5F0FF]/60 font-medium">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {analytics.recentVisitors?.length === 0 ? (
                      <tr>
                        <td
                          colSpan={6}
                          className="py-8 text-center text-[#003D99]/60 dark:text-[#E5F0FF]/60"
                        >
                          No visitors recorded yet
                        </td>
                      </tr>
                    ) : (
                      analytics.recentVisitors?.map((visitor, index) => (
                        <tr
                          key={index}
                          className="border-b border-[#003D99]/5 hover:bg-[#CCE0FF]/30 dark:hover:bg-[#002255]/30 transition-colors"
                        >
                          <td className="py-3 px-4 text-[#003D99] dark:text-[#E5F0FF] font-mono text-sm">
                            {visitor.ip}
                          </td>
                          <td className="py-3 px-4 text-[#003D99] dark:text-[#E5F0FF]">
                            {visitor.country}
                          </td>
                          <td className="py-3 px-4 text-[#003D99] dark:text-[#E5F0FF]">
                            {visitor.city}
                          </td>
                          <td className="py-3 px-4 text-[#003D99] dark:text-[#E5F0FF]">
                            {visitor.page}
                          </td>
                          <td className="py-3 px-4 text-[#003D99] dark:text-[#E5F0FF]">
                            {visitor.browser}
                          </td>
                          <td className="py-3 px-4 text-[#003D99]/60 dark:text-[#E5F0FF]/60 text-sm">
                            {formatDate(visitor.timestamp)}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

const StatCard = ({ icon, title, value, color }) => (
  <div className="bg-white dark:bg-[#001433] rounded-xl p-6 shadow-lg border border-[#003D99]/10">
    <div className="flex items-center space-x-4">
      <div className={`${color} p-3 rounded-lg text-white`}>{icon}</div>
      <div>
        <p className="text-[#003D99]/60 dark:text-[#E5F0FF]/60 text-sm">{title}</p>
        <p className="text-3xl font-bold text-[#003D99] dark:text-[#E5F0FF]">{value}</p>
      </div>
    </div>
  </div>
);

export default Dashboard;
