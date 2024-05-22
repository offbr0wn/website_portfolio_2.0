"use client";
import Image from "next/image";
import Link from "next/link";
import { LampContainer } from "./components/ui/lamp";
import Particles from "./components/ui/particles";
import { Spotlight } from "./components/ui/spotlight";
import { FlipWords } from "./components/ui/flip-words";

export default function Home() {
  console.log("Hello World");
  const navigation = [
    { name: "About", href: "/projects" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-20">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-2xl duration-500 text-zinc-500 hover:text-red-500"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      {/* Main section with line above and botton of main heading  */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={1000}
      />
      {/* <LampContainer> */}
      <Spotlight
        className="-top-40 -left-10 md:left-60 md:-top-20"
        fill="white"
      />

      <h1 className="z-10 text-9xl text-transparent duration-2000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text ">
        Shashank Ravikumar
      </h1>
      {/* </LampContainer> */}

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      {/* Subtitle for main section */}

      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Hi There 👋,I'm Shashank Ravikumar
          {/* <Link
            target="_blank"
            href="https://unkey.dev"
            className="underline duration-500 hover:text-zinc-300"
          >
            unkey.dev
          </Link>{" "} */}
          <FlipWords
            words={["Developer", "Designer", "Frontend <br/> Engineer"]}
          />
          to build pixel-perfect, engaging, and accessible digital experiences..
        </h2>
      </div>
    </div>
  );
}
