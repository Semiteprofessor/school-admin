import React from "react";
import { FiSearch } from "react-icons/fi";
import { LuMessagesSquare } from "react-icons/lu";
import { TfiAnnouncement } from "react-icons/tfi";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search Bar */}

      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <FiSearch size={24} color="gray" />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/* Icon & User */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <LuMessagesSquare size={24} color="#000" />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <TfiAnnouncement size={24} color="#000" />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">John Doe</span>
        </div>
        <RxAvatar size={24} color="#000" />
      </div>
    </div>
  );
};

export default Navbar;
