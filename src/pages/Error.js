import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center">
      <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6 px-4 md:px-0">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded shadow hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default Error;
