"use client";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

export default function ParallaxScrollDemo() {
  return (
    <div className="text-center">
      <span
      id="graphicdesign"
        className="lg:text-[80px] text-center tracking-tighter text-foreground mt-10 !text-[#dad7cd]"
        style={{ fontFamily: "Degular, sans-serif", fontWeight: 600 }}
      >

        Poster Design
        <br />
      </span>

      <ParallaxScroll images={images} />
    </div>
  );
}

const images = [
  "/assets/Graphic_design/abhimanyu.svg",
  "/assets/Graphic_design/arjuna.svg",
  "/assets/Graphic_design/astionmartin.svg",
  "/assets/Graphic_design/challengergt.svg",
  "/assets/Graphic_design/frrari780.svg",
  "/assets/Graphic_design/intothevoid.svg",
  "/assets/Graphic_design/panja.svg",
  "/assets/Graphic_design/porsche.svg",
  "/assets/Graphic_design/ranijari.svg",
  "/assets/Graphic_design/rugby.svg",
  "/assets/Graphic_design/theroaroftradition.svg",
  "/assets/Graphic_design/tokuru.svg",
  "/assets/Graphic_design/udupi.svg",
  "/assets/Graphic_design/youth.svg",
  "/assets/Graphic_design/youthback.svg",
];