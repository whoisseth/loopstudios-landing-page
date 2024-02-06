/** @format */

import CreationsSection from "@/components/CreationsSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IntractiveSection from "@/components/IntractiveSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-20 h-auto  ">
      <Hero />
      <section className="max-w-7xl mx-auto px-4 w-full  flex-col gap-20 flex">
        <IntractiveSection />
        <CreationsSection />
        {/* Creations section */}
      </section>
      <Footer />
    </div>
  );
}
