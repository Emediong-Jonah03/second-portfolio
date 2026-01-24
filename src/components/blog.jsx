import { FaArrowRight } from "react-icons/fa";
import { useState } from "react"
const Blog = () => {
   const posts = [
    {
      title: "Building REST APIs with Python Flask and MongoDB",
      excerpt: "Complete guide to creating scalable REST APIs with Python Flask and MongoDB database",
      readTime: "8 min read",
      category: "Backend Development"
    },
    {
      title: "React with Python Backend: Full-Stack Setup",
      excerpt: "How to connect React frontend with Python backend API",
      readTime: "6 min read",
      category: "Full-Stack"
    },
    {
      title: "WordPress as Headless CMS with React Frontend",
      excerpt: "Using WordPress REST API with modern React applications",
      readTime: "10 min read",
      category: "WordPress"
    }
  ];

 const [blog, setBlog] = useState(false)
  
  function changeHeight() {
    setBlog(prevHeightv => !prevHeightv)
  }

  const blogPost1 = posts.map((post, index) => (
    <article
          key={index}
          className="rounded-lg p-6 pb-7 relative bg-gradient-to-b from-gray-800 to-gray-500"
        >
          
          <div className="flex justify-between items-start mb-3">
            <span className="text-gray-400 text-sm">{post.date}</span>
            <span className="text-yellow-400 text-sm">{post.readTime}</span>
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-3">
            {post.title}
          </h3>
          <p className="text-gray-200 font-semibold mb-4 pb-3">{post.excerpt}</p>

          <div className="flex items-center text-gray-900 font-bold  hover:text-black absolute bottom-4 right-4 cursor-pointer hover:transform hover:scale-105 transition-all">
            <span onClick={changeHeight}>Read more</span>
            <FaArrowRight className="w-4 h-4 ml-2" />
          </div>
        </article>
      ))

     const blogPost2 = posts.map((post, index) => (
        <article
          key={index}
          className="rounded-lg p-6 pb-7 h-65 overflow-hidden relative bg-gradient-to-b from-gray-800 to-gray-300"
        >
          
          <div className="flex justify-between items-start mb-3">
            <span className="text-gray-400 text-sm">{post.date}</span>
            <span className="text-yellow-400 text-sm">{post.readTime}</span>
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-3">
            {post.title}
          </h3>
          <p className="text-gray-200 font-semibold mb-4 pb-3">{post.excerpt}</p>

          <div className="flex items-center text-gray-900 font-bold  hover:text-black absolute bottom-4 right-4 cursor-pointer hover:transform hover:scale-105 transition-all">
            <span onClick={changeHeight}>Read more</span>
            <FaArrowRight className="w-4 h-4 ml-2" />
          </div>
        </article>
      ))

  return (
    <section
      id="blog"
      className="py-20 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Blog & Insights
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blog ? blogPost1 : blogPost2}
         
          
        </div>
      </div>
    </section>
  );
};
export default Blog;