"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import emailjs from "@emailjs/browser";

export default function SignupFormDemo({ setShowForm }: { setShowForm?: (value: boolean) => void }) {
  const [formData, setFormData] = useState({
    firstname: "",
    phone: "",
    email: "",
    requirements: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      from_name: `${formData.firstname} (${formData.phone})`,
      user_email: formData.email,
      message: formData.requirements,
      to_email: "artsouldesign2024@gmail.com", // Admin email
      email: formData.email, // Ensure email is included properly
    };

    emailjs
      .send("service_euihiub", "template_flsl7m5", templateParams, "HEG5THtROvk5oquqg")
      .then((result) => {
        console.log("Email sent to admin successfully:", result.text);

        // Send confirmation email to user
        emailjs
          .send("service_euihiub", "template_user_greeting", {
            to_name: formData.firstname,
            to_email: formData.email,
            message: `Hello ${formData.firstname}, thank you for reaching out! We will get back to you soon.`,
          }, "HEG5THtROvk5oquqg")
          .then(() => {
            alert("Form submitted successfully!thank you for reaching out! We will get back to you soon.");
            setFormData({ firstname: "", phone: "", email: "", requirements: "" });
            setShowForm?.(false);
          })
          .catch(() => {
            alert("Form submitted successfully!thank you for reaching out! We will get back to you soon.");
          });
      })
      .catch(() => {
        alert("Failed to send form data.");
      });
  };

  return (
    <div className="relative mx-auto w-full max-w-md p-[2px] rounded-2xl bg-[linear-gradient(to_right,#588157,#a3b18a)]">
      <div className="shadow-input w-full h-full rounded-2xl p-4 md:p-8 bg-black text-white">
        <h2 className="text-xl font-bold text-[#dad7cd]"style={{ fontFamily: "Degular, sans-serif", fontWeight: 700 }}>Welcome to artsoul.design</h2>
        <p className="mt-2 max-w-sm text-sm text-gray-400"style={{ fontFamily: "Degular, sans-serif", fontWeight: 300 }}>We’d love to hear about your ideas! Please fill out the form with your requirements,Once we receive your submission, we’ll get in touch with you shortly to discuss the next steps. Let’s create something amazing together!</p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer>
            <Label htmlFor="firstname">Name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" value={formData.firstname} onChange={handleChange} className="bg-gray-800 text-[#dad7cd] border border-gray-700" />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" placeholder="8970931564" type="text" value={formData.phone} onChange={handleChange} className="bg-gray-800 text-[#dad7cd] border border-gray-700" />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" value={formData.email} onChange={handleChange} className="bg-gray-800 text-white border border-gray-700" />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="requirements">Requirements</Label>
            <textarea id="requirements" placeholder="Enter your requirements..." value={formData.requirements} onChange={handleChange} className="w-full h-20 p-2 rounded-md border border-gray-700 bg-gray-800 text-white resize-none overflow-y-auto" />
          </LabelInputContainer>

          <button className="group/btn relative block h-10 w-full mt-4 rounded-md bg-gradient-to-br from-gray-700 to-gray-600 font-medium text-white" type="submit">
            Submit
            <BottomGradient />
          </button>

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

          
        </form>

        <div className="mt-4 p-3 bg-gray-800 rounded-lg text-center">
  <button 
    onClick={() => window.history.back()} 
    className="text-sm text-white hover:text-gray-400"
  >
    Close Form
  </button>
</div>

      </div>
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
);


