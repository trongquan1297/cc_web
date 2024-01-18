// ./frontend/src/app/[lang]/components/Navbar.tsx

"use client";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      <Link
        href={url}
        className={`flex items-center mx-4 -mb-1 border-b-2 dark:border-transparent ${
          path === url && "dark:text-violet-400 dark:border-violet-400"
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}

export default function Navbar({
  links,
}: {
  links: Array<NavLink>;
}) {

  return (
    <div className="p-4 dark:bg-black dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto px-0 sm:px-6">
        <Logo src="/images/newmoon22.png" >
          {<h2 className="text-2xl font-bold">Quan Nguyen</h2>}
        </Logo>

        <ul className="flex items-center hidden space-x-8 lg:flex">
          {links.map((link) => (
            <NavLink key={link.id} {...link} />
          ))}
        </ul>

        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}