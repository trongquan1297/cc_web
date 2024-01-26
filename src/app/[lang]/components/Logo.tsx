// ./frontend/src/app/[lang]/components/Logo.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo({
  src,
  children,
}: {
  src: string | null;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href="/"
      aria-label="Back to homepage"
      className="flex items-center p-2"
    >
      {src && <Image src='/images/logo.png' alt="logo" width={50} height={50} />}
      <div className="ml-2">{children}</div>
    </Link>
  );
}