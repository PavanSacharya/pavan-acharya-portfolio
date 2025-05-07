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
        
        <Link href={""}>
          <MenuItem setActive={setActive} active={active} item="DesignDev">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href={"#uiux"}>
                UIUX
              </HoveredLink>
              <HoveredLink href={"#graphicdesign"}>
                Poster Design
              </HoveredLink>
              <HoveredLink href={"#projects"}>
                Project
              </HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href={"#freelance"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Freelance"
            
          ></MenuItem>
        </Link>
        <Link href={"#about"}>
          <MenuItem setActive={setActive} active={active} item="About">
            
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
