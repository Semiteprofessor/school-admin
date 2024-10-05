import React from "react";

const menuItems = [
  {
    title: "MENU",
    items: [
      { icon: "", title: "Home", href: "/" },
      { icon: "", title: "Teachers", href: "/teachers" },
      { icon: "", title: "Students", href: "/students" },
      { icon: "", title: "Parents", href: "/parents" },
      { icon: "", title: "Classes", href: "/classes" },
      { icon: "", title: "Lessons", href: "/lessons" },
      { icon: "", title: "Exams", href: "/exams" },
      { icon: "", title: "Assignments", href: "/assignments" },
      { icon: "", title: "Attendance", href: "/attendance" },
      { icon: "", title: "Calender", href: "/calender" },
      { icon: "", title: "Messages", href: "/messages" },
      { icon: "", title: "Announcement", href: "/announcement" },
    ],
  },
  {
    title: "OTHER",
    items: [
      { icon: "", title: "Profile", href: "/profile" },
      { icon: "", title: "Settings", href: "/settings" },
      { icon: "", title: "Logout", href: "/logout" },
    ],
  },
];

const Menu = () => {
  return (
    <div className="menu">
      {menuItems.map((menus) => (
        <div className="" key={menus.title}>
          <span>{menus.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Menu;
