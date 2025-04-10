"use client";

import SignupFormDemo from "@/components/ui/signup-form";
import { usePathname } from "next/navigation";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4 bg-[url()] bg-cover bg-center bg-no-repeat">
      {/* Signup Form Container with Outer Gradient */}
      <div className="">
        {/* Inner Form with Gradient Background */}
        <div className="">
          <SignupFormDemo />
        </div>
      </div>
    </div>
  );
}
