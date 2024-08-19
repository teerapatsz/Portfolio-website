import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import React, { useContext, useState } from 'react'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { OpenContext } from '../opencontext'

const MobileNav = () => {
  const pathName = usePathname();
  const {links} = useContext(OpenContext)
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <FaBars size="2rem" color="#dda15e"/>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center items-center bg-primary">
        {links.map((link) => (
          <Link
            href={link.url}
            key={link.title}
            className={`text-2xl m-5  ${ pathName === link.url && 'text-fourth border-b-2 border-fourth'} hover:text-fourth transition-all`}
          >
            {link.title}
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
