import React from "react";
import { Helmet } from "react-helmet-async";
import { booksData } from "../data/booksData";

function Books() {
  const booksList = booksData;

  return (
    <>
      <Helmet>
        <title>Amit - Books</title>
        <meta
          name="description"
          content="This page highlights Amit Kumar Ghosh's Books. It actively showcases his reading habits, including the books he has read and the books he is currently reading. The page is designed with a responsive layout, ensuring a clean and interactive user experience."
        />
        <meta
          property="og:title"
          content="Amit Kumar Ghosh | Books"
        />
        <meta
          property="og:description"
          content="This page highlights Amit Kumar Ghosh's Books. It actively showcases his reading habits, including the books he has read and the books he is currently reading. The page is designed with a responsive layout, ensuring a clean and interactive user experience."
        />
        <link rel="canonical" href="https://amitkumarghosh.vercel.app/books" />
      </Helmet>
      <div className="p-4 sm:p-8   bg-gray-50 shadow-sm rounded-lg">
        <h1 className="text-xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2">
          Books I Have Read
          <span className="text-sm text-gray-600">
            (
            <span className="text-red-600 font-medium">{booksList.length}</span>
            )
          </span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3">
          {booksList.map((book, index) => (
            <div
              key={index}
              className="p-2 hover:bg-blue-50 rounded-md transition-colors flex flex-col md:flex-row md:justify-between md:items-center"
            >
              <div className="flex flex-col">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="font-medium text-blue-600">
                    {book.title}
                  </span>
                </div>
                <span className="text-gray-600 text-sm">by {book.author}</span>
                <p className="text-gray-500 text-xs mt-1">{book.description}</p>
              </div>
              <p className="text-black text-sm mt-1 md:mt-0">
                [
                <span
                  className={`${
                    book.isReading ? "text-red-600" : "text-purple-600"
                  } font-medium`}
                >
                  {book.status}
                </span>
                ]
                {book.isReading && (
                  <span className="ml-1">
                    [<span className="text-red-600 font-medium">Reading</span>]
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Books;
