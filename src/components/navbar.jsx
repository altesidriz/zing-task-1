'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
const links = [
  { url: '/holidays', title: 'Почивки и екскурзии' },
  { url: '/hotels', title: 'Хотели' },
  { url: '/blog', title: 'Блог' },
  { url: '/contact', title: 'Контакти' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topLine = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerLine = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomLine = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };


  return (
    <div className='py-2 h-20 flex justify-around items-center sm:py-0'>
      {/* LOGO + BUTTON */}
      <div className="w-full flex justify-start h-max gap-10 items-center md:w-1/2 pl-20">
        <div className="flex items-center justify-center">
          <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topLine}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerLine}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomLine}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
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