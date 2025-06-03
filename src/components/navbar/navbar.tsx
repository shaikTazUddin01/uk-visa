"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").filter(Boolean).pop() || ""; // Extracts 'home'

  const formatText = (text: string): string => {
    return text
      .replace(/-/g, " ") // Replace hyphens with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
  };
  return (
    <div className="max-w-screen-xl mx-auto w-full">
      {/* Top Bar */}
      <div className="px-1">
      <div className="flex items-center space-x-2 p-1 md:p-2">
        <Link href="/">
          <Image
            src="/logo.gif"
            className="w-5/6 md:w-[285px] md:py-2"
            alt="UKVI Logo"
            width={300}
            height={200}
          />
        </Link>
      </div>

        </div>
      <div className="relative -mt-2.5">
        <Image
          src="/router_design.png"
          alt="UKVI Logo"
          width={10000}
          height={400}
          className="w-full h-5 md:h-12"
        />

        <p className="absolute top-1/2 -translate-y-1/2 left-0 text-white text-[5px] md:text-xs lg:p-4 pl-2 pt-2">
          You are here {">"} Sponsorship management system {">"}{" "}
          {(lastSegment === "creat-assign" ||
            lastSegment === "defined-cos" ||
            lastSegment === "views-cos" ||
            lastSegment === "sponsorship-duties" ||
            lastSegment === "manage-work-addresses") &&
            "Work >"}{" "}
          {formatText(lastSegment || "")}
        </p>
      </div>
    </div>
  );
}
