import Link from "next/link";
import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiHome5Line } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineNoteAlt } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { MdOutlineAssignment } from "react-icons/md";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { ImCalendar } from "react-icons/im";
import { TiMessages } from "react-icons/ti";
import { ImProfile } from "react-icons/im";
import { GrAnnounce } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <RiHome5Line size={24} color="#000" />,
        title: "Home",
        href: "/",
      },
      {
        icon: <FaChalkboardTeacher size={24} color="#000" />,
        title: "Teachers",
        href: "/teachers",
      },
      {
        icon: <PiStudentBold size={24} color="#000" />,
        title: "Students",
        href: "/students",
      },
      {
        icon: <IoPeopleSharp size={24} color="#000" />,
        title: "Parents",
        href: "/parents",
      },
      {
        icon: <GiTeacher size={24} color="#000" />,
        title: "Classes",
        href: "/classes",
      },
      {
        icon: <MdOutlineNoteAlt size={24} color="#000" />,
        title: "Lessons",
        href: "/lessons",
      },
      {
        icon: <PiExam size={24} color="#000" />,
        title: "Exams",
        href: "/exams",
      },
      {
        icon: <MdOutlineAssignment size={24} color="#000" />,
        title: "Assignments",
        href: "/assignments",
      },
      {
        icon: <BsFileEarmarkCheck size={24} color="#000" />,
        title: "Attendance",
        href: "/attendance",
      },
      {
        icon: <ImCalendar size={24} color="#000" />,
        title: "Calender",
        href: "/calender",
      },
      {
        icon: <TiMessages size={24} color="#000" />,
        title: "Messages",
        href: "/messages",
      },
      {
        icon: <GrAnnounce size={24} color="#000" />,
        title: "Announcement",
        href: "/announcement",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <ImProfile size={24} color="#000" />,
        title: "Profile",
        href: "/profile",
      },
      {
        icon: <IoSettingsOutline size={24} color="#000" />,
        title: "Settings",
        href: "/settings",
      },
      {
        icon: <FiLogOut size={24} color="#000" />,
        title: "Logout",
        href: "/logout",
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((menus) => (
        <div className="flex flex-col gap-4" key={menus.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {menus.title}
          </span>
          {menus.items.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
            >
              {item.icon} <span className="hidden lg:block">{item.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
