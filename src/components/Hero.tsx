/** @format */

import React from "react";
import heroImgeDesktop from "@/assets/images/desktop/image-hero.jpg";
import heroImgeMobile from "@/assets/images/mobile/image-hero.jpg";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="w-full relative text-white  ">
      <BGImges />
      <section className="top-0 left-0 w-full  absolute max-w-7xl  mx-auto flex flex-col gap-20  px-4 py-5  md:py-10  inset-x-0 ">
        <Navbar />
        {/*  */}
        <h1 className="uppercase text-5xl max-w-[350px]  lg:text-6xl lg:max-w-[480px] border p-5 font-thin">
          Immersive experiences that deliver
        </h1>
      </section>
    </div>
  );
}

function BGImges() {
  return (
    <div className="">
      {/* mobile ui */}
      <Image
        className="w-full md:hidden brightness-50 h-auto  "
        src={heroImgeMobile}
        alt="image-hero"
      />
      {/* desktop ui */}
      <Image
        className="w-full hidden md:flex brightness-50 h-auto "
        src={heroImgeDesktop}
        alt="image-hero"
      />
    </div>
  );
}
