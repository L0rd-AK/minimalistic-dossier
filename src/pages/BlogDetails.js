import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

function BlogDetails() {
  const { id } = useParams();
  
  const blogs = [
    {
      id: 1,
      title: "Getting Started with React Development",
      date: "March 15, 2024",
      description: "A comprehensive guide for beginners starting their journey in React development.",
      readTime: "5 min read",
      tags: ["React", "Web Development", "JavaScript"],
      content: `
        <h2 className='font-bold'>Introduction to React</h2>
        <p>React is a powerful JavaScript library for building user interfaces. This guide will walk you through the basics of React development and help you get started with your first React application.</p>
        
        <h2>Prerequisites</h2>
        <ul>
          <li>Basic understanding of HTML, CSS, and JavaScript</li>
          <li>Node.js installed on your computer</li>
          <li>A code editor (VS Code recommended)</li>
        </ul>

        <h2>Setting Up Your Development Environment</h2>
        <p>First, let's create a new React project using Create React App...</p>
      `
    },
    // ...Add other blog posts with full content
  ];

  const blog = blogs.find(b => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="p-4 sm:p-8 bg-gray-50 shadow-sm rounded-lg">
        <h1 className="text-xl font-bold text-red-600">Blog post not found</h1>
        <Link to="/blog" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
          ← Back to all posts
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${blog.title} - Amit's Blog`}</title>
        <meta name="description" content={blog.description} />
        <meta property="og:title" content={`${blog.title} - Amit's Blog`} />
        <meta property="og:description" content={blog.description} />
        <link rel="canonical" href={`https://amitkumarghosh.vercel.app/blog/${id}`} />
      </Helmet>

      <div className="p-4 sm:p-8 bg-gray-50 shadow-sm rounded-lg">
        <Link to="/blog" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to all posts
        </Link>
        
        <article className="prose prose-blue max-w-none">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
            {blog.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">{blog.readTime}</span>
              <span className="text-sm text-purple-600 italic">{blog.date}</span>
            </div>
          </div>

          <div 
            className="mt-8 text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>
      </div>
    </>
  );
}

export default BlogDetails;
