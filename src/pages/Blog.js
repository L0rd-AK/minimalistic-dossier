import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { blogsData } from '../data/blogData';

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Simulate API fetch with setTimeout
      setTimeout(() => {
        setBlogPosts(blogsData);
        setLoading(false);
      }, 500);
    } catch (err) {
      setError("Failed to load blog posts");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="p-4 sm:p-8 bg-gray-50 shadow-sm rounded-lg flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 sm:p-8 bg-gray-50 shadow-sm rounded-lg text-center">
        <h2 className="text-red-600 text-lg font-bold mb-2">Error</h2>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2 flex justify-between items-center">
            Blog Posts
            <span className="text-sm text-gray-600">
              ({blogPosts?.length} posts)
            </span>
          </h1>

          {blogPosts?.length === 0 ? (
            <p className="text-center text-gray-600 py-8">No blog posts found.</p>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {blogPosts?.map((blog) => (
                <article 
                  key={blog?.id} 
                  className="group p-4 rounded-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:shadow-md"
                >
                  <Link 
                    to={`/blogs/${blog?.id}`}
                    className="flex flex-col h-full"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                      <h2 className="text-base sm:text-lg font-bold text-blue-600 group-hover:text-blue-800 transition-colors">
                        {blog?.title}
                      </h2>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                        <span className="inline-flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {blog?.readTime}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-3 text-sm sm:text-base flex-grow">
                      {blog?.description}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <div className="flex flex-wrap gap-2">
                        {blog?.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs group-hover:bg-blue-200 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm text-purple-600 italic">
                          {blog?.date}
                        </span>
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='flex justify-center items-center mt-8'>
      <a href="https://clustrmaps.com/site/1c5mk" title="Visit tracker for Amitkumarghosh.vercel.app"><img alt="clustermaps plugin" src="//www.clustrmaps.com/map_v2.png?d=0LVDVCa48UMbcFc5A7j7x6SXo1CjooXrZrvX6ar6lyQ" /></a>
      </div>
    </>
  );
}

export default Blog;
