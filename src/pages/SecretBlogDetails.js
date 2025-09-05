import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SecretBlogsData } from '../data/SecretBlogsData';

function SecretBlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setLoading(true);
    const foundBlog = SecretBlogsData.find((b) => b.id === parseInt(id));
    setBlog(foundBlog);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="p-4 sm:p-8 bg-gray-50 shadow-sm rounded-lg flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="p-4 sm:p-8 bg-gray-50 shadow-sm rounded-lg text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Blog post not found</h1>
        <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link
          to="/blogs"
          className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to all posts
        </Link>
      </div>
    );
  }

  const ShareButton = ({ platform, icon, link }) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
      title={`Share on ${platform}`}
    >
      {icon}
    </a>
  );

  return (
    <>
      <Helmet>
        <title>{blog?.title} | Amit</title>
        <meta name="description" content={blog?.description.slice(0,30)} />
        <meta property="og:title" content={blog?.title} />
        <meta property="og:description" content={blog?.description.slice(0,30)} />
      </Helmet>

      <div className="p-4 sm:p-8 bg-gray-50 shadow-sm rounded-lg">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <nav className="flex items-center justify-between mb-8">
            <Link
              to="/secret-blogs"
              className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to all posts
            </Link>
            
            {/* Share buttons */}
            <div className="flex gap-2">
              <ShareButton
                platform="Twitter"
                icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>}
                link={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog?.title)}&url=${encodeURIComponent(window.location.href)}`}
              />
              {/* Add more share buttons as needed */}
            </div>
          </nav>

          <article className="prose prose-blue max-w-none">
            {/* Article header */}
            <header className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">
                {blog?.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {blog?.readTime}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {blog?.date}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {blog?.author}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {blog?.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Article content */}
            <div className="mt-8 text-gray-700 leading-relaxed">
              {blog?.content}
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default SecretBlogDetails;
