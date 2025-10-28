import React from "react";
import { IoHelpCircleOutline } from "react-icons/io5";
import google from "../assets/google.png";
import googledoc from "../assets/googledoc.png";
import sheet from "../assets/sheet.png";
import slide from "../assets/slide.png";
import vids from "../assets/vids.png";
import form from "../assets/form.png";
import drive from "../assets/drive.png";
import settings from "../assets/settings.png";

const Sidebar = () => {
  return (
    <aside className="w-70  h-screen bg-white border-r border-gray-200 flex flex-col justify-between ">
      {/* Top Section */}
      <div>
        {/* Google Docs logo + title */}
        <div className="flex h-18 items-center gap-2 px-5 border-b mb-2 border-gray-200">
          <img src={google} alt="" className="h-7" />
          <span className="text-[22px] font-normal text-gray-600">Docs</span>
        </div>

        {/* Sidebar menu items */}
        <nav className="flex flex-col gap-1 ">
          <button className="flex items-center gap-3 px-6 py-1 font-medium text-gray-700 hover:bg-gray-200 rounded-r-full text-sm">
            <img src={googledoc} alt="docs" className="h-7" /> Docs
          </button>
          <button className="flex items-center gap-5 px-7 py-2 font-medium text-gray-700 hover:bg-gray-200 rounded-r-full text-sm">
            <img src={sheet} alt="sheets" className="h-6" /> Sheets
          </button>
          <button className="flex items-center gap-5 px-7 py-2 font-medium text-gray-700 hover:bg-gray-200 rounded-r-full text-sm">
            <img src={slide} alt="slides" className="h-5" /> Slides
          </button>
          <button className="flex items-center gap-5 px-7 py-2 font-medium text-gray-700 hover:bg-gray-200 rounded-r-full text-sm">
            <img src={vids} alt="vids" className="h-6" /> Vids
          </button>
          <button className="flex items-center gap-5 px-7 py-2 font-medium text-gray-700 hover:bg-gray-200 rounded-r-full text-sm ">
            <img src={form} alt="forms" className="h-6" /> Forms
          </button>
          <div className="border-gray-100 border-t border-1 "></div>
          <button className="flex items-center gap-5 px-6 py-2  font-medium text-gray-700 hover:bg-gray-200 rounded-r-full text-sm ">
            <img src={settings} alt="Settings" className="h-6" />
            Settings
          </button>
          <button className="flex items-center gap-5 px-6 py-2 font-medium text-gray-700 hover:bg-gray-200 rounded-r-full text-sm">
            <IoHelpCircleOutline className="text-2xl" /> Help & Feedback
          </button>
          <div className="border-gray-100 border-t border-1 "></div>
          <button className="flex items-center gap-5 px-6 py-2  font-medium text-gray-700 hover:bg-gray-200 rounded-r-full text-sm">
            <img src={drive} alt="drive" className="h-5" /> Drive
          </button>
          <div className="border-gray-100 border-t border-1 "></div>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex  items-center gap-2 px-9 py- text-xs text-gray-600">
        <span>Privacy policy </span>
        <span> . Terms of Service</span>
      </div>
    </aside>
  );
};

export default Sidebar;
