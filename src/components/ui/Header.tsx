import React from "react";
import { FaLaptopCode, FaUserTie } from "react-icons/fa";
import { MdContacts, MdRocketLaunch } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";

function Header() {
  return (
    <>
      <div className="flex items-center gap-2 bg-gray-900 p-4 justify-center">
        <button className="cursor-pointer bg-gray-800 relative inline-flex items-center justify-center gap-2 text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-700 text-gray-300 hover:text-cyan-400 h-9 rounded-sm px-6">
          <FaUserTie className="w-5 h-5 text-cyan-500" />
          About
        </button>
        <button className="cursor-pointer bg-gray-800 relative inline-flex items-center justify-center gap-2 text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-700 text-gray-300 hover:text-purple-400 h-9 rounded-sm px-6">
          <VscVscode className="w-5 h-5 text-purple-500" />
          Tech Stack
        </button>
        <button className="cursor-pointer bg-gray-800 relative inline-flex items-center justify-center gap-2 text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-700 text-gray-300 hover:text-blue-400 h-9 rounded-sm px-6">
          <FaLaptopCode className="w-5 h-5 text-blue-400" />
          Projects
        </button>

        <button className="cursor-pointer bg-gray-800 relative inline-flex items-center justify-center gap-2 text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-700 text-gray-300 hover:text-yellow-400 h-9 rounded-sm px-6">
          <MdRocketLaunch className="w-5 h-5 text-yellow-400" />
          Services
        </button>

        <button className="cursor-pointer bg-gray-800 relative inline-flex items-center justify-center gap-2 text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-700 text-gray-300 hover:text-orange-400 h-9 rounded-sm px-6">
          <MdContacts className="w-5 h-5 text-orange-400" />
          Contact
        </button>
      </div>
    </>
  );
}

export default Header;
