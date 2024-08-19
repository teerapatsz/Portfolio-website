"use client"
import React, { useContext, useState } from 'react'
import Link from "next/link";
import Image from 'next/image';
import NavLink from './navlink'
import { OpenContext } from '../opencontext'
import MobileNav from './mobileNav'


export default function Navbar() {
  ;

  const {links} = useContext(OpenContext)
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      {/* LOGO */}
      <div className="flex justify-center" >
        <Link href="/" className=" flex items-center justify-center" >
          <span className='text-fourth text-xl font-bold'>My</span>
          <div className='w-12 h-8 bg-fourth flex justify-center items-center'>
            <span className='text-primary text-xl font-bold'>Port.</span>
          </div>
        </Link>
      </div>
      <div className='hidden md:flex gap-4 '>
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* RESPONSIVE */}
      <div className="md:hidden flex justify-end w-full">
        <MobileNav  />
      </div>
    </div>
  )
}
