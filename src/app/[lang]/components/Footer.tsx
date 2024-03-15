"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { CgWebsite } from "react-icons/cg";
import { AiFillYoutube } from "react-icons/ai";

interface FooterLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  social?: string;
}

interface CategoryLink {
  id: string;
  attributes: {
    name: string;
    slug: string;
  };
}

function FooterLink({ url, text }: FooterLink) {
  const path = usePathname();
  return (
    <li className="flex">
      <Link
        href={url}
        className={`hover:dark:text-violet-400 ${
          path === url && "dark:text-violet-400 dark:border-violet-400"
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}

function CategoryLink({ attributes }: CategoryLink) {
  return (
    <li className="flex">
      <Link
        href={`/${attributes.slug}`}
        className="hover:dark:text-violet-400"
      >
        {attributes.name}
      </Link>
    </li>
  );
}

function RenderSocialIcon({ social }: { social: string | undefined }) {
  switch (social) {
    case "WEBSITE":
      return <CgWebsite />;
    case "YOUTUBE":
      return <AiFillYoutube />;
    default:
      return null;
  }
}

export default function Footer({
  legalLinks,
  socialLinks,
}: {
  legalLinks: Array<FooterLink>;
  socialLinks: Array<FooterLink>;
}) {

  // const sclink = [
  //   { id: 1, url: "https://quannguyen.fun", newTab: true, text: "WEBSITE", social: "website" },
  //   { id: 2, url: "www.youtube.com/@nguyentrongquan4135", newTab: true, text: "YOUTUBE", social: "youtube" },
  //   { id: 3, url: "https://t.me/niumun22", newTab: true, text: "TELEGRAM", social: "telegram" },
  // ]

  return (
    <footer className="py-6 bg-white dark:bg-black dark:text-gray-50">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
          </div>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="flex">
            <span className="mr-2">
              ©{new Date().getFullYear()} Quan Nguyen
            </span>
          </div>
          <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
            {socialLinks.map((link: FooterLink) => {
              return (
                <a
                  key={link.id}
                  rel="noopener noreferrer"
                  href="https://quannguyen.fun"
                  title={link.text}
                  target={link.newTab ? "_blank" : "_self"}
                  className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900"
                >
                  <RenderSocialIcon social={link.social} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}