import React from "react";
import Pabout from "@/components/Pabout";
import Phero from "@/components/Phero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
    >
      <Phero />
      <Pabout />
      <Skills />
    </section>
  );
}
