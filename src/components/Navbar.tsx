/** @format */
"use client";

import React from "react";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { navLinks } from "@/app/store";

export default function Navbar() {
  const [animationParent] = useAutoAnimate();

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  function toggleSidebar() {
    setSidebarOpen(!isSidebarOpen);
  }

  return (
    <div ref={animationParent}>
      <div className=" relative z-20    flex  justify-between items-center">
        {/* logo */}
        <Image src={logo} alt="logo" />

        {/* desktop nav links */}
        <div className=" gap-5 hidden md:flex">
          {navLinks.map((d, i) => (
            <Link
              className="border-b-2 border-b-transparent py-3 hover:border-b-white transition-all text-sm"
              key={i}
              href={d.href}
            >
              {d.title}
            </Link>
          ))}
        </div>

        <button
          ref={animationParent}
          onClick={toggleSidebar}
          className="text-4xl md:hidden"
        >
          {isSidebarOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>
      {isSidebarOpen && <MobileNavLinks />}
    </div>
  );
}

function MobileNavLinks() {
  return (
    <div
      //   style={{ left: "20xp" }}
      className="flex z-10 flex-col gap-6 fixed top-0 left-0 min-h-screen w-full bg-black px-4 pt-32 md:hidden"
    >
      {navLinks.map((d, i) => (
        <Link
          className="  uppercase  transition-all text-2xl font-thin"
          key={i}
          href={d.href}
        >
          {d.title}
        </Link>
      ))}
    </div>
  );
}
