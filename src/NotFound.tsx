// NotFound.tsx
import React from "react";
import { Link } from "@tanstack/react-router";
const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 px-6">
      {/* Big 404 */}
      <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400 drop-shadow-lg">
        404
      </h1>

      {/* Subtitle */}
      <p className="text-2xl md:text-3xl font-semibold mt-4 text-gray-300">
        We’re working on it 🚧
      </p>

      {/* Description */}
      <p className="text-lg text-gray-400 mt-2 mb-8 text-center max-w-md">
        The page you’re looking for doesn’t exist or is currently under
        construction. Please check back soon!
      </p>

      {/* Button */}
      <Link
        to="/"
        className="px-6 py-3 rounded-2xl bg-emerald-400 transition-all shadow-lg text-black font-medium"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
