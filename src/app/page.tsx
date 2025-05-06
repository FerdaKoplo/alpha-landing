"use client";

import AboutAlpha from "@/components/landing/AboutAlpha";
import Client from "@/components/landing/Client";
import Marque from "@/components/landing/components/Marque";
import Media from "@/components/landing/components/Media";
import CTA from "@/components/landing/CTA";
import Ending from "@/components/landing/Ending";
import Hero from "@/components/landing/Hero";
import Portofolio from "@/components/landing/Portofolio";
import Section3 from "@/components/landing/Section3";
import Services from "@/components/landing/Services";
import Testimoni from "@/components/landing/Testimoni";
import WhyUs from "@/components/landing/WhyUs";
import Navbar from "@/components/layout/Navbar";
import { useSection } from "@/zustand/useNav";
import { useEffect } from "react";

export default function Home() {
  const { section } = useSection();

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === "contact") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToSection(section);
    console.log("h");
  }, [section]);

  return (
    <div className="relative">
      <div
        id="home"
        className="bg-gradient-to-br from-brand-dark to-brand start-0 rounded-b-3xl"
      >
        <div className="z-40 absolute w-full">
          <Navbar />
        </div>
        <Hero />
      </div>

      <AboutAlpha />
      <Marque />
      {/* <About /> */}
      {/* <Section2 /> */}
      {/* <Section1 /> */}
      {/* <div id="pricing"></div>
      <Pricing /> */}
      <Media />
      <Services />
      <WhyUs />
      <Client />
      <div id="porto"></div>
      <Portofolio />
      <Section3 />
      <div id="testi"></div>
      <Testimoni />
      <CTA />
      <Ending />
    </div>
  );
}
