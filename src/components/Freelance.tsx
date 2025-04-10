"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Link from "next/link";

export default function AnimatedPinDemo() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 pt-24 -mt-32">
      {/* Main Heading and Description */}
      <div className="text-center">
        <h1
        id="freelance"
          className="lg:text-[80px] text-center tracking-tighter text-foreground mt-10 !text-[#dad7cd]"
          style={{ fontFamily: "Degular, sans-serif", fontWeight: 600 }}
        >
          Freelace
        </h1>
        <p
          className="sm:w-[80%] md:w-[75%] xl:w-[80%] text-2xl text-[#7d8597] z-9 text-center mx-auto"
          style={{ fontFamily: "Degular, sans-serif", fontWeight: 300 }}
        >
          I work as a freelance designer under the name <strong>artsoul.design</strong>, where I help people and businesses bring their ideas to life through creative design. I design <strong>logos, posters, websites, banners, and brochures</strong> that are clean, eye-catching, and made to fit each client’s needs. I also offer <strong>video editing and photo editing</strong> services to help complete the visual story. Whether it’s for a brand, a product, or an event, I focus on making designs that not only look good but also connect with people. I enjoy turning creative ideas into real, professional designs and I’m always open to working on exciting new projects.
        </p>
      </div>
      <PinContainer
        title="Start Your Project"
        href="/signup"
        zIndex="z-10"
      >

        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] " style={{ fontFamily: "Degular, sans-serif" }}>
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-lg text-[#EDEDE9]"
            style={{ fontFamily: "Degular, sans-serif" }}>
            Let's Work Together
          </h3>
          <div className="text-base !m-0 !p-0 font-normal" style={{ fontFamily: "Degular, sans-serif" }}>
            <span className="text-slate-500">
              Have a project in mind? Fill out the form and let’s turn your ideas into stunning visuals.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4">
            <img
              src="/assets/freelance/3dpin.png"
              alt="Descriptive Alt Text"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

        </div>
      </PinContainer>
    </div>
  );
}