"use client";
import Image from "next/image";
import Link from "next/link";
import { LampContainer } from "./components/ui/lamp";
import Particles from "./components/ui/particles";
import { Spotlight } from "./components/ui/spotlight";
import { FlipWords } from "./components/ui/flip-words";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { CardRevelScroll } from "./components/ui/card-reveal-scroll";
import NextUiCard from "./components/ui/next-ui-card";
import SocialMediaicon from "./components/ui/social-media-icon";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  const navigation = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Running out of content
        </div>
      ),
    },
  ];
  return (
    <>
      {/* FIrst section */}
      <section>
        <div className="flex flex-col items-center md:justify-center w-screen h-screen overflow-hidden  md:px-[20vw]">
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
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <Particles
            className="absolute inset-0 -z-5 w-screen h-screen animate-fade-in"
            quantity={5000}
          />

          <Spotlight
            className="-top-20 -left-10 md:left-60 md:-top-20"
            fill="white"
          />

          <h1 className="z-10 text-4xl text-transparent duration-5000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-7xl  whitespace-nowrap bg-clip-text ">
            <Link
              href="/"
              className="underline duration-5000 hover:text-zinc-300"
            >
              Shashank Ravikumar
            </Link>
          </h1>
          {/* </LampContainer> */}

          <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          {/* Subtitle for main section */}

          <div className="my-10 text-center animate-fade-in px-[10vw] ">
            <h2 className="text-tiny md:text-sm text-zinc-500 ">
              Hi There 👋,I'm Shashank Ravikumar
              <FlipWords
                words={["Developer", "Designer", "Frontend-Engineer"]}
              />
              to build pixel-perfect, engaging, and accessible digital
              experiences..
            </h2>
            <div className="mt-5  ">
            <SocialMediaicon />
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* Second Section */}
        <div
          className="  flex flex-col items-center justify-center w-screen  min-h-1/2  md:px-[20vw] "
          id="about"
        >
          {/* <CardRevelScroll content={content} /> */}
          <NextUiCard />
        
        </div>
      </section>
    </>
  );
}
