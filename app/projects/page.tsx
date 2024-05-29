import React from "react";

import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { FaCloud, FaFile, FaMobile } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import NavBar from "../components/ui/nav-bar";

export default function page() {
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );
  const items = [
    {
      title: "Movie Streaming App - React Native",
      description:
        "A movie and tv show application created in react native with expo, where you can enjoy a wide range of TV shows and movies on your mobile device. With our app, you can easily discover new titles, browse through our extensive library, and watch your favorite shows and movies on the go.",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <FaMobile className="h-4 w-4 text-neutral-500" />,
      link: "https://github.com/offbr0wn/movie-streaming-app?tab=readme-ov-file",
    },
    {
      title: "Weather App",
      description:
        "Weather Application offers weather updates and forecasts for any location. Its sleek interface provides current conditions,The app ensures users stay informed about the weather with ease and clarity.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <FaCloud className="h-4 w-4 text-neutral-500" />,
      link: "https://github.com/offbr0wn/weather-app",
    },
    {
      title: " Phishing Awareness Website",
      description:
        "Educates users on to identify and avoid phishing attempts through interactive quizzes and resources. by reducing risk of falling victim to cyber threats",
      // header: <Skeleton />,
      className: "md:col-span-1",
      // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Website Portfolio v1.0",
      description: "Portfolio showcasing all my experience in a website",
      // header: <Skeleton />,
      className: "md:col-span-1",
      // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      link: "https://shashankravikumar.netlify.app/",
    },
    {
      title: "Website Portfolio v2.0",
      description: "New and improved of the website you're looking at.",
      header: <Skeleton />,
      className: "md:col-span-1",
      // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
  ];

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
