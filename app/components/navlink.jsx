"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded p-1 ${
        pathName === link.url && "bg-fourth text-secondary"
      } hover:bg-fourth hover:text-secondary`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
