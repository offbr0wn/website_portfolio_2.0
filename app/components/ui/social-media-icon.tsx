import React from "react";
import { FaDribbble, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function SocialMediaicon() {
  const SocialItems = [
    {
      socialName: FaLinkedin,
      socialLink: "https://www.linkedin.com/in/shashank-ravikumar/",
      socialBgColor: "bg-blue-500",
    },
    {
      socialName: FaGithub,
      socialLink: "https://github.com/offbr0wn/",
      socialBgColor: "bg-[#2b3137]",
    },
    {
      socialName: FaDribbble,
      socialLink: "https://dribbble.com/off_br0wn",
      socialBgColor: "bg-[#ea4c89]",
    },
    {
      socialName: FaInstagram,
      socialLink: "https://www.instagram.com/0ff_br0wn/",
      socialBgColor:
        "bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500",
    },
  ];

  console.log(SocialItems[0]?.socialName);
  return (
    <div className=" w-full h-auto py-8 flex items-center justify-center gap-4 flex-wrap">
      {SocialItems?.map((item, index) => (
        <Link
          key={index}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300 relative overflow-hidden"
          href={item?.socialLink}
          target="_blank"
        >
          {React.createElement(item?.socialName, {
            className:
              "relative z-10 fill-gray-900 transition-all duration-300 group-hover:fill-white",
          })}
          <div
            className={`absolute top-full left-0 w-full h-full rounded-full ${item?.socialBgColor} z-0 transition-all duration-500 group-hover:top-0`}
          ></div>
        </Link>
      ))}
      {/* 
      <Link
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300 relative overflow-hidden"
        href={""}
      >
        <FaGithub className="relative z-10 fill-gray-900 transition-all duration-300 group-hover:fill-white" />

        <div className="absolute top-full left-0 w-full h-full rounded-full bg-[#2b3137] z-0 transition-all duration-500 group-hover:top-0"></div>
      </Link>

      <Link
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300 relative overflow-hidden"
        href={""}
      >
        <FaDribbble className="relative z-10 fill-gray-900 transition-all duration-300 group-hover:fill-white" />

        <div className="absolute top-full left-0 w-full h-full rounded-full bg-[#ea4c89] z-0 transition-all duration-500 group-hover:top-0"></div>
      </Link>
      <Link
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300 relative overflow-hidden"
        href={""}
      >
        <FaInstagram className="relative z-10 fill-gray-900 transition-all duration-300 group-hover:fill-white" />

        <div className="absolute top-full left-0 w-full h-full rounded-full bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500 z-0 transition-all duration-500 group-hover:top-0"></div>
      </Link> */}
    </div>
  );
}
