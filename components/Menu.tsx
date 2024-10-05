import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
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
        icon: <GrHomeRounded size={24} color="#000" />,
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
      { icon: <PiExam />, title: "Exams", href: "/exams" },
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
        icon: <TiMessages />,
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
        <div className="flex flex-col gap-2" key={menus.title}>
          <span className="hidden lg:block">{menus.title}</span>
          {menus.items.map((item) => (
            <Link href={item.href} key={item.title}>
              {item.icon} {item.title}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
