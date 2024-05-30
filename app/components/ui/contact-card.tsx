"use client";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from "react";
import { BackgroundGradient } from "./background-gradient";
import Link from "next/link";

export default function ContactCard({
  socials,
}: {
  socials: {
    href: string;
    icon: React.ReactNode;
    handle: string;
    label: string;
  };
}): React.ReactElement {
  return (
    <BackgroundGradient className=" bg-zinc-900 rounded-[22px]  h-full  w-full">
      <motion.div
        whileHover={{
          scale: 1.05,
        }}
       className="h-full"
      >
        <Card className="w-full h-full  relative" isPressable isBlurred>
          <Link
            href={socials.href}
            target="_blank"
            className=" py-10 sm:p-10 flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48   bg-gradient-to-br opacity-100  via-zinc-100/10  transition group-hover:opacity-50  hover:border-zinc-400/50 border-zinc-600 h-full"
          >
            <span
              className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"
            />
            <span className="relative z-10 flex items-center justify-center w-12 h-10 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
              {socials.icon}
            </span>
            <div className="z-10 flex flex-col  items-center">
              <span className=" font-medium  duration-150  text-zinc-200 group-hover:text-white font-calSans  md:text-xl text-wrap break-all whitespace-pre-wrap">
                {socials.handle}
              </span>
              <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                {socials.label}
              </span>
            </div>
          </Link>
        </Card>
      </motion.div>
    </BackgroundGradient>
  );
}
