import { FaArrowRight } from "react-icons/fa";
const Blog = ({ darkMode }) => {
  const posts = [
    {
      title: "What I Learned Building My First React Project",
      date: "10, August 2025",
      excerpt:
        "From confusion to clarity: my journey into component-based architecture and state management. I always felt stock when a new concept in react was brought up like useState, useEffect hooks I new about tenary operators but when I started using it in react I felt confused again but i did not stop trying to learn I showed up till I understood",
      readTime: "2 min read",
    },
    {
      title: "Why Tailwind Makes Me Faster as a Developer",
      date: "Sep 18, 2025",
      excerpt:
        "How utility-first CSS transformed my workflow and made styling enjoyable again. It mades CSS smooth for me",
      readTime: "30 secs read",
    },
    {
      title: "The Power of Git: Version Control for Beginners",
      date: "Sep 18, 2025",
      excerpt:
        "Essential Git commands and workflows that every developer should know.",
      readTime: "6 min read",
    },
  ];

  return (
    <section
      id="blog"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-black"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Blog & Insights
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-gray-400 text-sm">{post.date}</span>
                <span className="text-yellow-400 text-sm">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {post.title}
              </h3>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-yellow-400 hover:text-yellow-300">
                <span>Read more</span>
                <FaArrowRight className="w-4 h-4 ml-2" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Blog;