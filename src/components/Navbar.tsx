"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import {
  HoveredLink,
  Menu,
  MenuItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname(); // Get the current route


  if (pathname === "/signup") return null;
  return (
    <div
      className={cn(
        "fixed top-10 sm:inset-x-0 sm:max-w-xl sm:mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"#home"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"#graphicdesign"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Poster"
          ></MenuItem>
        </Link>
        <Link href={"#uiux"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="UIUX"
          ></MenuItem>
        </Link>
        <Link href={"#projects"}>
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="">
                Portfolio
              </HoveredLink>
             
            </div>
          </MenuItem>
        </Link>
        <Link href={"#about"}>
          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#freelance">Freelance</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href={"#contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="mailto:artsouldesign2024@gmail.com">
                Email
              </HoveredLink>
              <HoveredLink href="https://www.linkedin.com/in/pavansacharya/">
                LinkedIn
              </HoveredLink>
              <HoveredLink href="https://www.instagram.com/artsoul.design_/?utm_source=qr#">
                Instagram
              </HoveredLink>
              <HoveredLink href="https://x.com/PavanAc18412166">
                X
              </HoveredLink>
              <HoveredLink href="tel:+91 8970931564">Mobile</HoveredLink>
            </div>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
