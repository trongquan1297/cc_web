// ./frontend/src/app/[lang]/components/Navbar.tsx

"use client";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react';
import "./link.css"

interface NavLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
}

function NavLink({ url, text }: NavLink) {
  const path = usePathname();

  return (
    <li className="flex">
      <a
        id="nav"
        href={url}
        className={`flex items-center no-underline mx-4 -mb-1 dark:border-transparent ${
          path === url && "dark:text-violet-400 dark:border-violet-400"
        }}`}
      >
        {text}
      </a>
    </li>
  );
}

export default function Navbar({
  links,
}: {
  links: Array<NavLink>;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="p-4 dark:bg-black dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto px-0 sm:px-6 ">
        <Logo src='/images/logo.png' >
          {<h2 className="text-2xl text-gray-100 font-bold" id="nav">Quan Nguyen</h2>}
        </Logo>

        <ul className="flex text-gray-100 items-center hidden space-x-8 lg:flex no-underline">
          {links.map((link) => (
            <NavLink key={link.id} {...link} />
          ))}
        </ul>

        <button className="p-4 lg:hidden" text-red-600 onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-white "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            >
            </path>
          </svg>
        </button>
        {isMenuOpen && (
          <ul className="flex text-red-600  items-center space-x-8 lg:flex">
            {links.map((link) => (
              <NavLink key={link.id} {...link} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}