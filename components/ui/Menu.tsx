"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AlignRight } from "lucide-react";

interface MenuItem {
  name: string;
  link: string;
}

const Menu: React.FC<{ items: MenuItem[] }> = ({ items }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <div className="flex justify-end">
      <ul className="justify-end gap-8 font-bold md:flex hidden">
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="md:hidden flex flex-col relative">
        <button
          className="bg-black p-2 rounded-md shadow-2xl block w-10"
          onClick={handleClick}
        >
          <AlignRight />
        </button>
        <ul
          className={`absolute right-0 top-11 bg-black p-5 rounded-md w-[200px] duration-300 ease-in-out overflow-hidden ${
            showMenu ? "opacity-100" : "opacity-0"
          }`}
        >
          {items.map((item, index) => (
            <li key={index} className="mb-2">
              <Link href={item.link} onClick={handleLinkClick}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
