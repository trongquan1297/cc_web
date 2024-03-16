// ./frontend/src/app/[lang]/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { getMedia, getURL } from "./utils/api-helpers";
import { fetchAPI } from "./utils/fetch-api";

import { i18n } from "../../../i18n-config";
import Footer from "./components/Home/Footer";
import Navbar from "./components/Home/Navbar";

const FALLBACK_SEO = {
  title: " Starter Next Blog",
  description: " Starter Next Blog",
}


async function getGlobal(): Promise<any> {
  const token = process.env.NEXT_PUBLIC__API_TOKEN;

  if (!token) throw new Error("The  API Token environment variable is not set.");

  const path = `/global`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    populate: [
      "metadata.shareImage",
      "favicon",
      "navbar.links",
      "navbar.navbarLogo.logoImg",
      "footer.footerLogo.logoImg",
      "footer.menuLinks",
      "footer.legalLinks",
      "footer.socialLinks",
      "footer.categories",
    ],
  };

  const response = await fetchAPI(path, urlParamsObject, options);
  return response;
}

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getGlobal();

  if (!meta.data) return FALLBACK_SEO;

  const { metadata, favicon } = meta.data.attributes;
  const { url } = favicon.data.attributes;

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    icons: {
      icon: [new URL(url, getURL())],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {

  const global = await getGlobal();
  // TODO: CREATE A CUSTOM ERROR PAGE
  if (!global.data) return null;
  
  const { navbar, footer } = global.data.attributes;

  const navbarLogoUrl = getMedia(
    navbar.navbarLogo.logoImg.data.attributes.url
  );

  const footerLogoUrl = getMedia(
    footer.footerLogo.logoImg.data.attributes.url
  );
  const navbarLinks = [
    { id: 1, url: "/", newTab: false, text: "Blog" },
    { id: 2, url: "/snake-game", newTab: true, text: "Snake Game" },
    { id: 3, url: "/about-me", newTab: false, text: "About Me" },
  ];
  return (
    <html lang={params.lang}>
      <title>QuanNguyen's Blog</title>
      <body className="bg-white dark:bg-black">
        <Navbar
          links={navbarLinks}
        />
        <main className="bg-white dark:bg-black dark:text-gray-100 min-h-screen">
          {children}
        </main>
        <Footer
          legalLinks={footer.legalLinks}
          socialLinks={footer.socialLinks}
        />
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}