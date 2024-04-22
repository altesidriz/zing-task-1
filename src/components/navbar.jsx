'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { url: '/holidays', title: 'Почивки и екскурзии' },
  { url: '/hotels', title: 'Хотели' },
  { url: '/blog', title: 'Блог' },
  { url: '/contact', title: 'Контакти' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='py-2 h-20 flex justify-around items-center sm:py-0'>
      {/* LOGO + BUTTON */}
      <div className="w-full flex justify-start h-max gap-10 items-center md:w-1/2 pl-20">
        <div className="flex items-center justify-center">
          <button onClick={()=>setOpen(!open)} className="w-full h-full border-2 flex flex-col gap-1 border-none z-20 relative md:hidden">
            <div className="w-8 h-[3px] bg-black rounded"></div>
            <div className="w-8 h-[3px] bg-black rounded"></div>
            <div className="w-8 h-[3px] bg-black rounded"></div>
          </button>
        </div>
        <div className="sm:w-full h-full align-middle">
          <Link href="/">
            <Image src="/logo.png" alt="" width={100} height={50} className="object-contain"/>
          </Link>
        </div>
      </div>
      {/* RESPONSIVE MENU */}
        {open &&
        <div className="absolute top-0 left-0 w-screen h-screen bg-red-400 text-white flex flex-col items-center justify-center gap-8 text-xl z-10">
          {links.map((link) => (
            <Link className="h-max hover:text-red-600" href={link.url} key={link.title}>{link.title}</Link>
          ))}
        </div>
        }
        {/* MENU LIST */}
      <div className="hidden md:flex pr-24 w-1/2 h-max justify-end items-center gap-10 text-sm">
        {links.map((link) => (
          <Link className="h-full hover:text-red-600" href={link.url} key={link.title}>{link.title}</Link>
        ))}
      </div>
    </div>
  );
};
export default Navbar;