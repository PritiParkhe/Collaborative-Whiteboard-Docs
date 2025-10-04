import React from "react";
import Navbar from "../component/Navbar";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { RxTriangleDown } from "react-icons/rx";
import { MdOutlineFolderOpen } from "react-icons/md";
import { LiaThListSolid } from "react-icons/lia";
import { MdSortByAlpha } from "react-icons/md";
import doc from "../assets/doc.png";
import word from "../assets/word.png";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <div className=" ">
        {/* START A NEW DOCUMENT */}
        <div className="bg-[#f1f3f4] h-[300px] pt-4  ">
          <div className="flex items-center justify-between  mx-[200px]">
            <div className="flex text-md items-center justify-center mb-3">
              Start a new document
            </div>

            {/* Template gallery controls */}

            <div className="flex items-center justify-between gap-3 mb-3 text-xs text-gray-600 font-semibold">
              <button>Template Gallery</button>
              <div className="flex flex-col text-[0.50rem]  py-1 px-2 hover:bg-gray-200 rounded-full ">
                <FaAngleUp />
                <FaAngleDown />
              </div>
              <h1 className="text-lg text-gray-200">|</h1>
              <PiDotsThreeOutlineVerticalFill className="text-2xl px-1 hover:bg-gray-200 rounded-full" />
            </div>
          </div>

          {/* Template thumbnails */}

          <div className="flex items-center justify-center gap-3 overflow-x-auto">
            {/* Blank Doc */}
            <div className="flex flex-col items-center cursor-pointer">
              <div className=" ">
                <img
                  src="https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png"
                  alt=""
                  className="h-48 object-cover border border-gray-200 hover:border-blue-600 rounded-sm"
                ></img>
              </div>
              <span className="mt-1 text-xs text-gray-600">Blank</span>
            </div>

            {/* Example Template */}
            <div className="flex flex-col  items-center cursor-pointer">
              <img
                src="https://ssl.gstatic.com/docs/templates/thumbnails/1OLxGsoZ-q6o9MiMbWpY7FngEKzF94SS6fZXAwo-vorM_400_2.png"
                alt=""
                className="h-48  object-cover border border-gray-200 hover:border-blue-600 rounded-sm"
              />
              <span className="mt-1 text-xs text-gray-600">Resume</span>
            </div>
          </div>
        </div>

        {/* Recent Documents Section */}

        <div className="px-8 py-8 mx-auto max-w-[1200px]">
          <div className="flex justify-between items-center mb-4  ">
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Documents
            </h2>

            <div className="flex items-center gap-32 text-gray-900 ">
              <div className="flex items-center gap-1 text-sm font-semibold">
                <span className="text-gray-600">Owned by anyone</span>
                <RxTriangleDown className="text-gray-400" />
              </div>

              <div className="flex items-center gap-2 text-gray-900 text-3xl">
                <MdSortByAlpha className="cursor-pointer  px-1 hover:bg-gray-200 rounded-full " />
                <LiaThListSolid className="cursor-pointer px-1 hover:bg-gray-200 rounded-full " />
                <MdOutlineFolderOpen className="cursor-pointer px-1 hover:bg-gray-200 rounded-full " />
              </div>
            </div>
          </div>
          {/* Document cards grid */}
          <div className="">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
              {Array(10)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 hover:border-blue-600 rounded-sm  cursor-pointer"
                  >
                    <div className="w-full h-48 bg-gray-50 flex items-center justify-center border-b border-gray-100 "></div>
                    <div className="p-3">
                      <h3 className="text-sm font-medium text-gray-600 truncate">
                        Document {i + 1}
                      </h3>
                      <div className="flex items-center justify-between gap-2 mt-1 text-gray-500">
                        <img src={doc} alt="doc" className="h-6"/>
                        <span className="text-xs ">Opened Sep 25, 2025</span>
                        <PiDotsThreeOutlineVerticalFill className="text-2xl px-1 hover:bg-gray-200 rounded-full" />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
