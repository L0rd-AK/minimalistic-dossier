import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Error() {
  const [clickCount, setClickCount] = useState(0);
  const [showSecret, setShowSecret] = useState(false);
  const [errorMessages, setErrorMessages] = useState(['Page Not Found']);

  const funnyErrorMessages = React.useMemo(() => [
    "Page Not Found... but my sense of humor is still here! 😄",
    "404: This page went to get coffee and never came back ☕",
    "Error: Page is practicing social distancing 🦠",
    "This page has been abducted by aliens 👽",
    "Page.exe has stopped working 💻",
    "404: Page is in another castle 🏰",
    "This page is on vacation in the Bahamas 🏖️",
    "Error 404: Life not found, please try again later 🤖"
  ], []);

  const handleErrorClick = () => {
    setClickCount(prev => prev + 1);
    
    if (clickCount + 1 === 3) {
      setShowSecret(true);
      const event = new CustomEvent('easterEggFound', {
        detail: { type: 'error_page_clicks', count: 3 }
      });
      document.dispatchEvent(event);
    }
    
    // Change error message
    const randomMessage = funnyErrorMessages[Math.floor(Math.random() * funnyErrorMessages.length)];
    setErrorMessages([randomMessage]);
  };

  useEffect(() => {
    if (showSecret) {
      const interval = setInterval(() => {
        const randomMessage = funnyErrorMessages[Math.floor(Math.random() * funnyErrorMessages.length)];
        setErrorMessages([randomMessage]);
      }, 2000);
      
      return () => clearInterval(interval);
    }
  }, [showSecret, funnyErrorMessages]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center">
      <div 
        className={`text-6xl font-extrabold text-red-600 mb-4 cursor-pointer transition-transform hover:scale-110 ${showSecret ? 'animate-bounce' : ''}`}
        onClick={handleErrorClick}
        title={`Click count: ${clickCount}/3`}
      >
        {showSecret ? '🤔' : '404'}
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        {errorMessages[0]}
      </h2>
      <p className="text-gray-600 mb-6 px-4 md:px-0">
        {showSecret ? 
          "Congratulations! You found the secret error page easter egg! 🎉" :
          "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
        }
      </p>
      
      {showSecret && (
        <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 rounded-lg">
          <p className="text-yellow-800">
            <strong>🥚 Easter Egg Found!</strong><br/>
            You've discovered the secret error page! Keep exploring for more hidden surprises.
          </p>
        </div>
      )}
      
      <div className="space-y-4">
        <Link
          to="/"
          className="block px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded shadow hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
        
        {showSecret && (
          <Link
            to="/secret"
            className="block px-6 py-3 bg-yellow-600 text-white text-lg font-medium rounded shadow hover:bg-yellow-700 transition"
          >
            🥚 Visit Secret Page
          </Link>
        )}
      </div>
    </div>
  );
}

export default Error;
