import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Topbar from "../Topbar/topbar";

function Headermenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleSubMenuToggle = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const menuItems = [
    {
      name: "Home",
      link: "/",
      submenu: [
        { name: "Submenu 1", link: "/home/submenu-1" },
        { name: "Submenu 2", link: "/home/submenu-2" },
        { name: "Submenu 3", link: "/home/submenu-3" },
      ],
    },
    { name: "About Us", link: "/about" },
    {
      name: "Services",
      link: "/services",
      submenu: [
        { name: "Services1", link: "/services/Services1" },
        { name: "Services2", link: "/services/Services2" },
      ],
    },
    {
      name: "Projects",
      link: "/projects",
      submenu: [
        { name: "Projects1", link: "/projects/projects1" },
        { name: "Projects2", link: "/projects/projects2" },
      ],
    },
    {
      name: "Page",
      link: "/page",
      submenu: [
        { name: "Page1", link: "/page/page1" },
        { name: "Page2", link: "/page/page2" },
      ],
    },
    {
      name: "Blog",
      link: "/blog",
      submenu: [
        { name: "Blog1", link: "/blog/blog1" },
        { name: "Blog2", link: "/blog/blog2" },
      ],
    },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      {/* Header */}
      <div className="relative lg:flex xl:justify-between justify-end items-center flex-row none">
        {/* Mega menu */}
        <div className="xl:flex hidden lg:items-center">
          <ul className="flex flex-col lg:flex-row lg:space-x-9 space-y-3 lg:space-y-0">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group py-[38px]">
                <a href={item.link} className="flex items-center font-medium">
                  {item.name}
                  {item.submenu && (
                    <FaChevronDown className="ml-2 text-sm group-hover:rotate-180 transition-transform" />
                  )}
                </a>
                {item.submenu && (
                  <ul className="hidden group-hover:block z-20 absolute bg-white text-black mt-2 shadow-lg">
                    {item.submenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 hover:bg-gray-100 w-[200px]"
                      >
                        <a href={subItem.link}>{subItem.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Search and menu ico */}
        <div className="flex items-center relative xl:py-[0] sm:pt-[23px] py-[10px] sm:pb-[22px] justify-end">
          {isSearchOpen && (
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg  focus:outline-none absolute top-[60px] px-3 py-4 right-0 z-20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          )}
          <CiSearch
            className="text-[25px] text-black cursor-pointer"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
          <div
            className="transition duration-150 ease-in-out sm:ml-[40px] ml-[10px]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <a className="relative flex items-end justify-center flex-col w-[55px] h-[55px] rounded-full border border-black pr-[17px]">
              <span className="relative block w-[10px] h-[2px] bg-black my-[3px]"></span>
              <span className="relative block w-[20px] h-[2px] bg-black my-[3px]"></span>
            </a>
          </div>
        </div>
        {/* Mobile view */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black opacity-50 xl:opacity-0 z-40"></div> // Overlay
        )}
        <div
          className={`fixed top-0 right-0 h-full w-[250px] bg-white shadow-lg transform transition-transform duration-300 z-50 xl:hidden block
      ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            className="absolute top-4 right-4 text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            Close
          </button>
          <ul className="mt-16 space-y-4 overflow-y-auto h-full">
            {menuItems.map((item, index) => (
              <li key={index} className="px-4 py-2 border-b">
                <div className="flex justify-between items-center">
                  <a href={item.link} className="block">
                    {item.name}
                  </a>
                  {item.submenu && (
                    <button
                      onClick={() => handleSubMenuToggle(index)}
                      className="text-sm text-gray-500"
                    >
                      {openSubMenu === index ? "-" : "+"}
                    </button>
                  )}
                </div>
                {item.submenu && openSubMenu === index && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="py-1">
                        <a href={subItem.link} className="block text-sm">
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <div className="xl:hidden block">
             <Topbar />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Headermenu;
