import React from "react";

import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { FaCloud, FaFile, FaMobile } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import NavBar from "../components/ui/nav-bar";
import { items } from "../utils/array-data";

export default function page() {


  return (
    <div className=" min-h-[70vh] px-6 pt-10 space-y-8   lg:px-8 md:space-y-5 md:pt-16 ">
      <NavBar />
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Projects
        </h2>
        <p className="mt-4 text-zinc-400">
          Some of the projects are from work and some are on my own time.
        </p>
      </div>
      <div className="w-full h-px bg-zinc-800" />
      {/* <HoverEffect items={projects} /> */}
      <BentoGrid className=" mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            className={item.className}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
