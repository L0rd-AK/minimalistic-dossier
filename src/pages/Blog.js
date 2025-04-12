import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Why Has Reading Become a Struggle?",
      date: "March 15, 2024",
      description: "Exploring the challenges of reading in the digital age and how technology impacts literacy.",
      readTime: "15 min read",
      tags: ["reading", "Education", "Literacy", "Technology"],
    },
    // {
    //   id: 2,
    //   title: "Understanding Data Structures in JavaScript",
    //   date: "March 10, 2024",
    //   description: "Deep dive into common data structures and their implementations in JavaScript.",
    //   readTime: "8 min read",
    //   tags: ["JavaScript", "Data Structures", "Programming"],
    //   link: "https://dev.to/your-blog-2"
    // },
    // {
    //   id: 3,
    //   title: "Mastering CSS Grid Layout",
    //   date: "March 5, 2024",
    //   description: "Learn how to create complex layouts easily using CSS Grid.",
    //   readTime: "6 min read",
    //   tags: ["CSS", "Web Design", "Frontend"],
    //   link: "https://dev.to/your-blog-3"
    // }
  ];

  return (
    <>
      <Helmet>
        <title>Amit - Blog</title>
        <meta
          name="description"
          content="Read Amit Kumar Ghosh's blog posts about web development, programming, and technology."
        />
        <meta
          property="og:title"
          content="Amit Kumar Ghosh | Blog"
        />
        <meta
          property="og:description"
          content="Read Amit Kumar Ghosh's blog posts about web development, programming, and technology."
        />
        <link rel="canonical" href="https://amitkumarghosh.vercel.app/blogs" />
      </Helmet>
      <div className="p-4 sm:p-8 bg-gray-50 shadow-sm rounded-lg">
        <h1 className="text-xl sm:text-2xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2">
          Blog Posts
        </h1>
        <div className="grid grid-cols-1 gap-6">
          {blogs.map((blog) => (
            <article 
              key={blog.id} 
              className="p-4 hover:bg-blue-50 rounded-lg transition-colors border border-gray-200 flex flex-col"
            >
              <Link 
                to={`/blogs/${blog.id}`}
                className="flex flex-col h-full"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                  <h2 className="text-base sm:text-lg font-bold text-blue-600 hover:text-blue-800">
                    {blog.title}
                  </h2>
                  <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                    {blog.readTime}
                  </span>
                </div>
                <p className="text-gray-600 mb-3 text-sm sm:text-base flex-grow">
                  {blog.description}
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-purple-600 italic whitespace-nowrap">
                    {blog.date}
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
