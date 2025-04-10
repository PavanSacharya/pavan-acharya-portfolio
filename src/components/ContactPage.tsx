import React from "react";
import X from "../../public/assets/Socialmedia/x.svg";
import instagram from "../../public/assets/Socialmedia/instagram.svg";
import behance from "../../public/assets/Socialmedia/behance.svg";
import call from "../../public/assets/Socialmedia/call.svg";
import fiverr from "../../public/assets/Socialmedia/fiverr.svg";
import github from "../../public/assets/Socialmedia/github.svg";
import linkedin from "../../public/assets/Socialmedia/linkedin.svg";
import mail from "../../public/assets/Socialmedia/mail.svg";
import upwork from "../../public/assets/Socialmedia/upwork.svg";
import facebook from "../../public/assets/Socialmedia/facebook.svg";

import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="relative">
      <div
         id="contact"
        className="lg:text-[80px] text-center tracking-tighter text-foreground mt-10 !text-[#dad7cd]"
        style={{ fontFamily: "Degular, sans-serif", fontWeight: 600 }}
      >
        Contact
      </div>

      <div className="flex justify-center gap-14 mt-10">
        <Link href="https://www.linkedin.com/in/pavansacharya/">
          <Image
            src={linkedin}
            alt="Linkedin"
            width={50}
            style={{ objectFit: "contain", cursor: "pointer" }}
            loading="lazy"
          />
        </Link>

        <Link href="https://www.instagram.com/artsoul.design_/?utm_source=qr#">
          <Image
            src={instagram}
            alt="instagram"
            width={50}
            style={{ objectFit: "contain", cursor: "pointer" }}
            loading="lazy"
          />
        </Link>
        <Link href="https://x.com/PavanAc18412166">
          <Image
            src={X}
            alt="x"
            width={50}
            style={{ objectFit: "contain", cursor: "pointer" }}
            loading="lazy"
          />
        </Link>
        <Link href="mailto:artsouldesign2024@gmail.com">
          <Image
            src={mail}
            alt="Email Address"
            width={50}
            style={{ objectFit: "contain", cursor: "pointer" }}
            loading="lazy"
          />
        </Link>
        <Link href="tel:+91 8970931564">
          <Image
            src={call}
            alt="call"
            width={50}
            style={{ objectFit: "contain", cursor: "pointer" }}
            loading="lazy"
          />
        </Link>
      </div>


      {/*  */}
      <div className="flex justify-center gap-14 mt-8">
      <Link href="https://www.fiverr.com/pavan_acharya/buying?source=avatar_menu_profile">
          <Image
            src={ behance}
            alt="Email Address"
            width={50}
            style={{ objectFit: "contain", cursor: "pointer" }}
            loading="lazy"
          />
        </Link>
      <Link href="https://github.com/PavanSacharya">
          <Image
            src={github}
            alt="Email Address"
            width={50}
            style={{ objectFit: "contain", cursor: "pointer" }}
            loading="lazy"
          />
        </Link>
        <Link href="https://www.upwork.com/freelancers/~013560cb76e7e70a03">
          <Image
            src={upwork}
            alt="Email Address"
            width={50}
            style={{ objectFit: "contain", cursor: "pointer" }}
            loading="lazy"
          />
        </Link>
        <Link href="https://www.fiverr.com/pavan_acharya/buying?source=avatar_menu_profile">
          <Image
            src={fiverr}
            alt="Email Address"
            width={50}
            style={{ objectFit: "contain", cursor: "pointer" }}
            loading="lazy"
          />
        </Link>
        <Link href="https://www.facebook.com/pavan.acharya.7543/">
          <Image
            src={ facebook}
            alt="Email Address"
            width={50}
            style={{ objectFit: "contain", cursor: "pointer" }}
            loading="lazy"
          />
        </Link>
      </div>
      

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 left-0 blue__gradient" />
      <div className="absolute z-[0] w-[40%] h-[35%] bottom-0 right-0 blue__gradient" />

    </div>
  );
};

export default ContactPage;
