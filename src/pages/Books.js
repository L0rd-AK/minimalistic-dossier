import React from 'react';

function Books() {
  const booksList = [
      { title: "1984", status: "Completed", isReading: false },
      { title: "The Courage to Be Disliked", status: "Completed", isReading: false },
      { title: "Three Days of Happiness", status: "Completed", isReading: false },
      { title: "Norwegian Wood", status: "Completed", isReading: false },
      { title: "Crime and Punishment", status: "125 pages", isReading: true },
      { title: "The Subtle Art of Not Giving a F*ck", status: "Completed", isReading: false },
      { title: "As a Man Thinketh", status: "Completed", isReading: false },
      { title: "Dopamine Detox", status: "Completed", isReading: false },
    { title: "Art of Living", status: "Completed", isReading: false },
    { title: "Brave New World", status: "Completed", isReading: false },
    { title: "Ikigai", status: "Completed", isReading: false },
    { title: "How to Win Friends and Influence People", status: "Completed", isReading: false },
    { title: "Man's Search for Meaning", status: "Completed", isReading: false },
    { title: "Deep Work", status: "Completed", isReading: false },
  ];

  return (
    <div className="p-4 sm:p-8 max-w-4xl mx-auto bg-gray-50 shadow-sm rounded-lg">
      <h2 className="text-xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2">Books I Have Read 
        <span className="text-sm text-gray-600">(<span className="text-red-600 font-medium">{booksList.length}</span>)</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3">
        {booksList.map((book, index) => (
          <div key={index} className="p-2 hover:bg-blue-50 rounded-md transition-colors flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="font-medium text-blue-600">{book.title}</span>
            </div>
            <p className="text-black ml-5 md:ml-2 text-sm mt-1 md:mt-0">
              [<span className={`${book.isReading ? 'text-red-600' : 'text-purple-600'} font-medium`}>{book.status}</span>]
              {book.isReading && <span className="ml-1">[<span className="text-red-600 font-medium">Reading</span>]</span>}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;