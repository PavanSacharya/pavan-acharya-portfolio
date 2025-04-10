"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";


export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-transparent items-center justify-center relative overflow-hidden mt-20 ">

      <InfiniteMovingCards items={testimonials} direction="right" speed="normal" />
    </div>
  );
}

const testimonials = [
  {
    image: "/assets/freelance/bannerslide.png",
    name: "",
    title: "",
  },
  {
    image: "/assets/freelance/poster.png",
    name: "",
    title: "",
  },
  {
    image: "/assets/freelance/certificateofhonor.png",
    name: "",
    title: "",
  },
  {
    image: "/assets/freelance/idcard.png",
    name: "",
    title: "",
  },
  {
    image: "/assets/freelance/invitation.png",
    name: "",
    title: "",
  },
  {
    image: "/assets/freelance/logo.png",
    name: "",
    title: "",
  },
  {
    image: "/assets/freelance/package.png",
    name: "",
    title: "",
  },
  {
    image: "/assets/freelance/tshirt.png",
    name: "",
    title: "",
  },
];
