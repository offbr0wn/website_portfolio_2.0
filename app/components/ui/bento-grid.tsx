"use client";
import { cn } from "@/app/utils/cn";
import Link from "next/link";
import { useRef, useState } from "react";
import { Image } from "@nextui-org/react";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4  mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  console.log(link);
  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2]  border border-transparent justify-normal flex flex-col space-y-4 items-start ",
        className
      )}
      style={{
        background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 100%)`,
      }}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {header && (
          <Image
            width={1000}
            height={1000}
            alt="NextUI hero Image with delay"
            src={String(header)}
            className="w-full  flex flex-1 max-h-[6rem] rounded-xl  z-20 pb-2 object-center object-cover"
          />
        )}
        {icon}
        <div className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-xl font-display">
          {title}
        </div>
        <div className="my-2 leading-0 duration-150 text-zinc-400 group-hover:text-zinc-300 text-xs">
          {description}
        </div>
        <div className="py-1">
          <Link href={link || "/"} target="_blank">
            <p className=" text-zinc-200 hover:text-zinc-50  lg:block">
              Read more <span aria-hidden="true">&rarr;</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
