"use client";
import React from "react";
import { Suspense } from "react";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <section
      id="home"
      className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-center"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#a3b18a"
      />
      <div className="p-4 flex flex-col items-center justify-center min-h-screen text-center">

        <div>
          <h1>
            <span
              className="lg:text-[70px] text-center tracking-tighter text-foreground text-[#dad7cd]"
              style={{ fontFamily: "Degular, sans-serif", fontWeight: 600 }}
            >

              Hello, I&apos;m
              <br />
            </span>

            <span

              style={{ fontFamily: "Degular, sans-serif", fontWeight: "bold" }}
              className="text-6xl lg:text-[130px]  text-[#a3b18a]"
            >
              Pavan Acharya
            </span>

          </h1>
          <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-[40px] mt-4 text-[#7d8597] tracking-tight text-muted-foreground whitespace-nowrap"style={{ fontFamily: "Degular, sans-serif", fontWeight: "300" }}>
            UIUX Designer | Graphic Designer | Passionate Coders
          </p>
        </div>
        <div className="mt-10">
          <Link
            href="#contact"
            className="bg-black border text-[#dad7cd] border-[#dad7cd hover:bg-[#FFFFFF1A] hover:duration-100 ease-in transition-all py-3 px-6 text-[16px] mr-2 rounded-lg font-bold"
          >
            Get in touch
          </Link>
          <Link
            href="#about"
            className="bg-black border text-[#dad7cd] border-[#dad7cd] hover:bg-[#FFFFFF1A] hover:duration-100 ease-in transition-all py-3 px-6 text-[16px] mr-2 rounded-lg font-bold"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
