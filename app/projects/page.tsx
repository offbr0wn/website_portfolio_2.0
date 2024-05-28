import React from "react";

import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { FaFile } from "react-icons/fa";

export default function page() {
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );
  const items = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <Skeleton />,
      className: "md:col-span-2",
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <FaFile className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      // header: <Skeleton />,
      className: "md:col-span-1",
      // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
      className: "md:col-span-2",
      // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
      className: "md:col-span-2",
      // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
      className: "md:col-span-1",
      // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <div className=" min-h-[70vh] px-6 pt-20 space-y-8   lg:px-8 md:space-y-16 md:pt-16 ">
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
          />
        ))}
      </BentoGrid>
    </div>
  );
}
