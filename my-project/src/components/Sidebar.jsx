import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const activeClass = "text-black w-full bg-gray-100 font-bold  p-2";

  const NavLinkFunction = () => {
    const Navlinks = [
      { navName: "Dashboard", to: "/" },
      { navName: "Admin", to: "/admin" },
      { navName: "Students", to: "/students" },
    ];

    return (
      <ul className="flex flex-col">
        {Navlinks.map((link, index) => (
          <Link
            to={link.to}
            key={index}
            className={`border border-b-0 py-2 hover:bg-gray-50 hover:font-bold px-4 w-full   ${
              location.pathname === link.to ? activeClass : ""
            }`}
          >
            {link.navName}
          </Link>
        ))}
      </ul>
    );
  };

  return (
    <aside className="bg-white shadow-md w-64 ">{NavLinkFunction()}</aside>
  );
};

export default Sidebar;
