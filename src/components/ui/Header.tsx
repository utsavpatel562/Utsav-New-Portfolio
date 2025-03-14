import { Code, CodeXml, UserRound } from "lucide-react";
import React from "react";

function Header() {
  return (
    <>
      <div className="flex items-center gap-2 bg-gray-900 p-4 justify-center">
        <button className="cursor-pointer bg-gray-800 relative inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-700 text-gray-300 hover:text-cyan-400 h-9 rounded-sm px-3">
          <UserRound className="w-5 h-5 text-cyan-500" />
          About
        </button>
        <button className="cursor-pointer bg-gray-800 relative inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-700 text-gray-300 hover:text-purple-400 h-9 rounded-sm px-3">
          <CodeXml className="w-5 h-5 text-purple-500" />
          Tech Stack
        </button>
        <button className="cursor-pointer bg-gray-800 relative inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-700 text-gray-300 hover:text-blue-400 h-9 rounded-sm px-3">
          <Code className="w-5 h-5 text-blue-400" />
          Projects
        </button>

        <button className="cursor-pointer bg-gray-800 relative inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-700 text-gray-300 hover:text-yellow-400 h-9 rounded-sm px-3">
          <svg
            className="lucide lucide-sticky-note text-yellow-500"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            height="22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"></path>
            <path d="M15 3v6h6"></path>
          </svg>
          Services
        </button>

        <button className="cursor-pointer bg-gray-800 relative inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-700 text-gray-300 hover:text-orange-400 h-9 rounded-sm px-3">
          <svg
            className="lucide lucide-star text-orange-500"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 24 24"
            height="22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          Contact
        </button>
      </div>
    </>
  );
}

export default Header;
