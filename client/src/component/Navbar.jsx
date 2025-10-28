import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { FiCircle } from "react-icons/fi";
import doc from "../assets/googledoc.png";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* Overlay + Sidebar */}
      {isOpen && (
        <>
          {/* Background overlay */}
          <div
            className="fixed inset-0"
            onClick={handleSidebarToggle} // click outside to close
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full z-50 transition-transform duration-300 transform translate-x-0">
            <Sidebar onClose={handleSidebarToggle} />
          </div>
        </>
      )}
      <nav className="flex h-16 items-center justify-between px-4 py-2 shadow-md">
        {/* Left: Menu + Logo */}

        <div className="flex items-center gap-2">
          <button onClick={handleSidebarToggle}>
            <IoReorderThreeOutline className="text-3xl cursor-pointer" />
          </button>
          <img src={doc} alt="googledoc" />
          <span className="hidden sm:inline text-2xl">Docs</span>
        </div>
        {/* Center: Search */}
        <div className="flex items-center bg-[#f0f4f9] rounded-full px-3 py-2 w-32 sm:w-64 md:w-3xl gap-2">
          <IoMdSearch className="text-2xl text-gray-900" />
          <input
            type="text"
            placeholder="Search"
            className="hidden text-shadow-transparent text-md  sm:block bg-transparent outline-none px-2 w-full"
          />
        </div>
        {/* Right: Apps + Profile */}
        <div className="flex items-center gap-3">
          <img
            src="https://ssl.gstatic.com/gb/images/bar/al-icon.png"
            className=" h-10 cursor-pointer hover:bg-gray-200 rounded-full p-2"
          />
          <FiCircle className="text-4xl cursor-pointer hover:bg-gray-200 rounded-full p-2" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
