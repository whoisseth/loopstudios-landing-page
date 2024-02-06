/** @format */

import React from "react";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/app/store";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

type Props = {};

const socialLinks = [
  {
    icon: <IoLogoFacebook />,
    link: "/"
  },
  {
    icon: <FaTwitter />,
    link: "/"
  },
  {
    icon: <FaPinterest />,
    link: "/"
  },
  {
    icon: <IoLogoInstagram />,
    link: "/"
  }
];

export default function Footer({}: Props) {
  return (
    <div className="flex  w-full  justify-between  text-white bg-black py-10 px-4">
      <footer className="max-w-7xl mx-auto w-full flex justify-between items-center md:items-start flex-col md:flex-row gap-5">
        {/* left */}

        <section className="flex gap-4 flex-col">
          <Image src={logo} alt="logo" />

          <div className=" gap-5 flex flex-col md:flex-row  items-center md:items-start">
            {navLinks.map((d, i) => (
              <Link
                className="md:border-b-2 md:border-b-transparent py-3 md:hover:border-b-white transition-all text-sm w-fit"
                key={i}
                href={d.href}
              >
                {d.title}
              </Link>
            ))}
          </div>

          {/*  */}
        </section>

        {/* right */}
        <section className="flex gap-4 flex-col  items-center md:items-start">
          <div className="flex gap-3">
            {socialLinks.map((d, i) => (
              <Link
                key={i}
                className="text-white text-2xl hover:scale-105 transition-all hover:opacity-80"
                href={d.link}
              >
                {d.icon}
              </Link>
            ))}
          </div>

          <p className="text-xs py-3 text-slate-600">
            © 2021 Loopstudios. All rights reserved.
          </p>
          {/*  */}
        </section>
      </footer>
    </div>
  );
}
