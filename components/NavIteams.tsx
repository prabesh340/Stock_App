"use client";
import { NAV_ITEAMS } from "@/lib/constants";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavIteams = () => {
  const pathname = usePathname();
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };
  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {NAV_ITEAMS.map(({ href, title }) => (
        <li key={href}>
          <Link
            href={href}
            className={clsx(
              "hover:text-yellow-500 transition-colors ",
              isActive(href) ? "text-gray-100" : ""
            )}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavIteams;
