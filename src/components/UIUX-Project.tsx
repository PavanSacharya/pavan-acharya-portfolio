"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";


const DummyContent = ({ images }: { images: string[] }) => {
  return (
    <>
      {images.map((image, index) => (
        <div key={index} className="mb-4">
          <Image
            src={image}
            alt={`Category image ${index}`}
            height={500}
            width={500}
            className="w-full h-auto mx-auto object-contain rounded-3xl"
          />
        </div>
      ))}
    </>
  );
};


const categoryImages: Record<string, string[]> = {
  "Artificial Intelligence": [
    "/assets/UIUX/Nike/MacBook Pro 14_ - 1.png",
    "/assets/UIUX/Nike/MacBook Pro 14_ - 2.png",
   "/assets/UIUX/Nike/MacBook Pro 14_ - 3.png",
   "/assets/UIUX/Nike/MacBook Pro 14_ - 4.png",
  ],
  Productivity: [
    "/assets/UIUX/Furniture/furniture-1.png",
    "/assets/UIUX/Furniture/furniture-2.png",
    "/assets/UIUX/Furniture/furniture-3.png",
    "/assets/UIUX/Furniture/furniture-4.png",
  ],
  Product: [
    "/assets/UIUX/Ngo/page1.png",
    "/assets/UIUX/Ngo/page2.png",
    "/assets/UIUX/Ngo/page3.png",
    "/assets/UIUX/Ngo/page4.png",
    "/assets/UIUX/Ngo/page5.png",
  ],
  iOS: [
    "/assets/UIUX/Puma/page1.png",
   "/assets/UIUX/Puma/page3.png",
   "/assets/UIUX/Puma/page2.png",
  ],
  Hiring: [
    "/assets/UIUX/Food/page1.png",
   "/assets/UIUX/Food/page2.png",
    "/assets/UIUX/Food/page3.png",
  ],
};


const data = [
  {
    category: "Nike Shoe E-Commerce Website – UI Design",
    title: "This is a clean and modern UI design for a Nike shoe store website. The layout is user-friendly with clear navigation for Men, Women, and Children categories, along with options for New Collections and Popular picks. The homepage features a bold banner with a featured product and a prominent Start Shopping button to attract user interaction.",
    src: "/assets/UIUX/Nike/nike.png",
    content: <DummyContent images={categoryImages["Artificial Intelligence"]} />,
  },
  {
    category: "Home Furniture App",
    title: "It is a stylish and modern mobile UI design for a home furniture app. The design highlights elegance and comfort, starting with a bold hero section featuring a vibrant green accent chair and a clear message: Your Perfect Seat Awaits. The clean cream background and rounded corners give the interface a soft, premium feel, while the bold “START” button encourages immediate user action.",
    src: "/assets/UIUX/Furniture/iPhone_Mockup_3.png",
    content: <DummyContent images={categoryImages["Productivity"]} />,
  },
  {
    category: "National Geographic – Website Redesign ",
    title: "This redesign brings a modern, immersive touch to National Geographic’s iconic storytelling. The layout emphasizes striking visuals and bold typography, drawing attention to the beauty of wildlife and the planet. A clean, intuitive interface guides users through key sections like subscriptions, news, and featured stories.",
    src: "/assets/UIUX/Ngo/Ngo-main.png",
    content: <DummyContent images={categoryImages["Product"]} />,
  },
  {
    category: "PUMA – Mobile Campaign UI",
    title: "This sleek mobile design captures PUMA’s dynamic energy and modern streetwear style. Featuring bold typography, high-contrast colors, and a fashion-forward layout, the interface puts focus on both the attitude and apparel. The Style in Motion theme highlights movement and confidence, with a bold athlete pose adding personality and depth.",
    src: "/assets/UIUX/Puma/puma.png",
    content: <DummyContent images={categoryImages["iOS"]} />,
  },
  {
    category: "Food Delivery App Design",
    title: "This food delivery app login screen is designed to instantly awaken the appetite. Featuring a sizzling burger with smoky and fiery visual effects, the UI combines bold imagery with compelling typography to deliver an unforgettable first impression. The tagline,From Our Kitchen to Your Comfort, reinforces the promise of hot, chef-crafted meals delivered fast and fresh.",
    src: "/assets/UIUX/Food/main.png",
    content: <DummyContent images={categoryImages["Hiring"]} />,
  },
];


export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2
      id="uiux"
        className="lg:text-[80px] text-center tracking-tighter text-foreground mt-10 !text-[#dad7cd]"
        style={{ fontFamily: "Degular, sans-serif", fontWeight: 600 }}
      >
        UI UX
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
