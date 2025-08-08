"use client";
import Image from "next/image";
import HeroText from "@/components/HeroText";
import NavBar from "@/components/NavBar";
import SecondSection from "@/components/SecondSection";
import Logos from "@/components/Logos";
import IntegrationsSection from "@/components/IntegrationsSection";
import ScrollStack from "@/components/ScrollStack";
 
import Lightning from "@/components/ReactBit/Lightning";

export default function Home() {
  return (
    <>
      <div className="bg-[#0D0816] relative overflow-hidden">
        <div
          className="absolute inset-0 z-[0]"
          style={{ width: "100%", height: "50%", position: "absolute" }}
        >
          <Lightning
            hue={20}
            xOffset={-1.2}
            speed={1}
            intensity={1}
            size={1}
            // backgroundColor="#0e0918"
          />
        </div>
        <NavBar />
        {/* <HeroSection /> */}
        <HeroText />
        <SecondSection />
      </div>
      <Logos />
      <IntegrationsSection />
      <ScrollStack />
    </>
  );
}
