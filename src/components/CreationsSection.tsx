/** @format */

import React from "react";

// import imageDeepEarth from "@/assets/images/mobile/image-deep-earth.jpg";
import imageDeepEarth from "@/assets/images/mobile/image-deep-earth.jpg";
import imageNightArcade from "@/assets/images/mobile/image-night-arcade.jpg";
import imageSoccerTeam from "@/assets/images/mobile/image-soccer-team.jpg";
import imageGrid from "@/assets/images/mobile/image-grid.jpg";
import imageFromAbove from "@/assets/images/mobile/image-from-above.jpg";
import imagePocketBorealis from "@/assets/images/mobile/image-pocket-borealis.jpg";
import imageCuriosity from "@/assets/images/mobile/image-curiosity.jpg";
import imageFisheye from "@/assets/images/mobile/image-fisheye.jpg";

// dektop images
import imageDeepEarthDesktop from "@/assets/images/desktop/image-deep-earth.jpg";

import imageNightArcadeDesktop from "@/assets/images/desktop/image-night-arcade.jpg";
import imageSoccerTeamDesktop from "@/assets/images/desktop/image-soccer-team.jpg";
import imageGridDesktop from "@/assets/images/desktop/image-grid.jpg";
import imageFromAboveDesktop from "@/assets/images/desktop/image-from-above.jpg";
import imagePocketBorealisDesktop from "@/assets/images/desktop/image-pocket-borealis.jpg";
import imageCuriosityDesktop from "@/assets/images/desktop/image-curiosity.jpg";
import imageFisheyeDesktop from "@/assets/images/desktop/image-fisheye.jpg";

import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const creationsData = [
  {
    mobileImg: imageDeepEarth,
    desktopImg: imageDeepEarthDesktop,
    title: "Deep Earth"
  },
  {
    mobileImg: imageNightArcade,
    desktopImg: imageNightArcadeDesktop,
    title: "Night Arcade"
  },
  {
    mobileImg: imageSoccerTeam,
    desktopImg: imageSoccerTeamDesktop,
    title: "Soccer Team"
  },
  {
    mobileImg: imageGrid,
    desktopImg: imageGridDesktop,
    title: "Grid"
  },
  {
    mobileImg: imageFromAbove,
    desktopImg: imageFromAboveDesktop,
    title: "From Above"
  },
  {
    mobileImg: imagePocketBorealis,
    desktopImg: imagePocketBorealisDesktop,
    title: "Pocket Borealis"
  },
  {
    mobileImg: imageCuriosity,
    desktopImg: imageCuriosityDesktop,
    title: "Curiosity"
  },
  {
    mobileImg: imageFisheye,
    desktopImg: imageFisheyeDesktop,
    title: "Fisheye"
  }
];

export default function CreationsSection() {
  return (
    <div className="flex flex-col gap-4 items-center ">
      <div className="lg:justify-between flex  lg:w-full">
        <h3 className="  text-3xl text-center uppercase"> Our creations</h3>

        <button className=" hidden lg:flex px-10 py-2 border-2 border-black w-fit hover:bg-black hover:text-white ">
          SEE ALL
        </button>
      </div>
      <section className="flex flex-col gap-4 lg:flex-row lg:flex-wrap  lg:justify-between">
        {creationsData.map((d, i) => (
          <Card
            key={i}
            desktopImg={d.desktopImg}
            mobileImg={d.mobileImg}
            title={d.title}
          />
        ))}
      </section>
      <button className=" lg:hidden px-10 py-2 border-2 border-black w-fit hover:bg-black hover:text-white ">
        SEE ALL
      </button>
    </div>
  );
}

type CardProps = {
  mobileImg: string | StaticImport;
  desktopImg: string | StaticImport;
  title: string;
};
function Card(props: CardProps) {
  return (
    <div className="relative">
      {/* mobile image */}
      <Image
        className="brightness-50 lg:hidden"
        src={props.mobileImg}
        alt="card-img"
      />
      {/* desktop image */}
      <Image
        className="brightness-50 hidden lg:flex"
        src={props.desktopImg}
        alt="card-img"
      />

      <p className="absolute bottom-6 text-white left-8 uppercase text-2xl font-thin max-w-[100px] ">
        {props.title}
      </p>
    </div>
  );
}
