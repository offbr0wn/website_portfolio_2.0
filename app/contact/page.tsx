"use client";
import React from "react";
import NavBar from "../components/ui/nav-bar";

import Link from "next/link";
import { FaLinkedin, FaMailBulk, FaGithub } from "react-icons/fa";
import motion from "framer-motion";
import ContactCard from "../components/ui/contact-card";

export default function ContactPage() {
  const socials = [
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/shashank-ravikumar/",
      label: "Twitter",
      handle: "Shashank-ravikumar",
    },
    {
      icon: <FaMailBulk size={20} />,
      href: "mailto:shashank201011@gmail.com",
      label: "Email",
      handle: "shashank201011@gmail.com",
    },
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/offbr0wn",
      label: "Github",
      handle: "offbr0wn",
    },
  ];

  return (
    <div className=" sm:max-h-screen  md:mt-0 lg:mt-0 md:h-[70vh] container flex items-center justify-center   px-4 mx-auto">
      {/* <h1 className="text-center text-4xl sm:text-7xl font-black font-calSans  bg-clip-text text-transparent  bg-gradient-to-r from-pink-500 to-violet-500  py-8 ">
          Contact
        </h1> */}
      <NavBar />
      <div className=" mt-20 grid w-screen grid-cols-1 gap-8 mx-auto  sm:mt-20 sm:grid-cols-3 lg:gap-16 ">
        {socials?.map((social, index) => (
          <React.Fragment key={index}>
            <ContactCard socials={social} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
