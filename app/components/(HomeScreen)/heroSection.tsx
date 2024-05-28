import Link from "next/link";
import React from "react";
import { FlipWords } from "../ui/flip-words";
import Particles from "../ui/particles";
import SocialMediaicon from "../ui/social-media-icon";
import { Spotlight } from "../ui/spotlight";
import { TextGenerateEffect } from "../ui/text-reveal";
import ToolTipWrapper from "../ui/tooltip";

function HeroSection() {
  const navigation = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex flex-col items-center justify-center  min-h-[90vh] overflow-hidden  md:px-[20vw]">
      <nav className="my-10 animate-fade-in z-10">
        <ul className="flex items-center justify-center gap-10">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl font-bold duration-500 text-zinc-500 hover:text-red-500"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      {/* Main section with line above and botton of main heading  */}
      <Particles
        className="absolute inset-0 -z-5 w-screen h-screen animate-fade-in"
        quantity={50}
      />

      <Spotlight
        className="top-0 -left-10 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <h1 className="z-20 text-3xl text-transparent duration-4000 bg-white cursor-default text-edge-outline animate-title font-calSans sm:text-5xl md:text-7xl  whitespace-nowrap bg-clip-text font-black ">
        <ToolTipWrapper>
          <Link
            href="/Shashank_Ravikumar_CV.pdf"
            locale={false}
            target="_blank"
            about="Download CV"
            className="underline duration-5000 hover:text-zinc-300"
          >
            Shashank Ravikumar
          </Link>
        </ToolTipWrapper>
      </h1>
      {/* </LampContainer> */}

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      {/* Subtitle for main section */}

      <div className=" text-center animate-fade-in  mt-5 flex-col">
        <h2 className=" md:text-2xl text-sm  my-0">
          <TextGenerateEffect words={"Frontend React Developer"} />
        </h2>
        <h2 className="text-tiny md:text-sm text-zinc-500 mt-10 sm:mt-5">
          Hi There 👋,I'm Shashank Ravikumar
          <FlipWords
            words={["Developer", "Designer", "Frontend-Engineer"]}
            className="w-max"
          />
          to build pixel-perfect, engaging, and accessible digital experiences..
        </h2>
        <div className=" mt-5 ">
          <SocialMediaicon />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
