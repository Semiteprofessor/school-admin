import React from "react";
import { FiSearch } from "react-icons/fi";
import { LuMessagesSquare } from "react-icons/lu";
import { TfiAnnouncement } from "react-icons/tfi";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search Bar */}

      <div className="hidden md:flex">
        <FiSearch size={24} color="gray" />
        <input type="text" placeholder="Search..." />
      </div>
      {/* Icon & User */}
      <div className="flex items-center gap-6">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <LuMessagesSquare size={24} color="#000" />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <TfiAnnouncement size={24} color="#000" />
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
