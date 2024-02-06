/** @format */

import React from "react";

import interactiveImage from "@/assets/images/desktop/image-interactive.jpg";
import interactiveImageMobile from "@/assets/images/mobile/image-interactive.jpg";
import Image from "next/image";
import { Balancer } from "react-wrap-balancer";

export default function IntractiveSection() {
  return (
    <>
      <MobileUi />
      <DesktopUi />
    </>
  );
}

function DesktopUi() {
  return (
    <div className="hidden md:flex  w-full relative ">
      <Image className="" src={interactiveImage} alt="image-interactive" />
      <div className="flex flex-col gap-8  bg-white absolute bottom-0 right-40 pt-10 pl-10 max-w-[480px]">
        <h3 className="text-5xl uppercase "> The leader in interactive VR</h3>
        <p className="text-gray-500 text-sm">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
}

function MobileUi() {
  return (
    <div className=" md:hidden text-center flex flex-col gap-10">
      <Image
        className="mx-auto"
        src={interactiveImageMobile}
        alt="image-interactive"
      />

      <Balancer className="flex flex-col gap-3">
        <h3 className="text-3xl uppercase "> The leader in interactive VR</h3>
        <p className="text-gray-500">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </Balancer>
    </div>
  );
}
