import { ExperienceProps } from "@/app/types/types";
import {
  CardHeader,
  Button,
  Card,
  CardBody,
  Chip,
  Link,
} from "@nextui-org/react";
import React from "react";
import { FaHeart, FaPause, FaPlaneArrival, FaShapes } from "react-icons/fa";
import { FaDiagramNext } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function ExperienceCard({ experience }: ExperienceProps) {
  return (
    <Card
      isBlurred
      className="grid border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] md:grid-flow-col sm:grid-flow-row select-none"
      shadow="md"
      isHoverable
    >
      <CardHeader className="relative sm:col-span-full sm:pb-0 items-start col-span-2">
        <h4 className="font-medium text-xs tracking-wide uppercase">
          {experience?.data}
        </h4>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-full gap-6 md:gap-4 items-center justify-center">
          <div className="flex flex-col col-span-6 md:col-span-8">
            {/* Top content */}
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h2 className=" font-bold text-base  capitalize leading-snug  text-slate-200 ">
                  <Link
                    
                    href={experience?.projectLink }
                    className="  inline-flex   text-foreground/90 hover:text-red-400 focus-visible:text-red-400"
                    target="_blank"
                  >
                    <span className="inline-block  ">
                      {experience?.projectName}
                      <FaArrowTrendUp
                        className="inline-block  shrink-0 transition-transform hover:-translate-y-1 hover:translate-x-1 focus-visible:-translate-y-1 focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                        size={20}
                      />
                    </span>
                  </Link>
                </h2>
              </div>
            </div>
            {/* Middle content */}
            {experience?.descList && (
              <div className="flex flex-col mt-2 ">
                <ul className="list-disc list-inside pl-1 space-y-1 ">
                  {experience?.descList?.map((item, index) => (
                    <li
                      className="md:text-sm sm:text-xs  leading-normal text-foreground/80 normal-case"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Bottom content */}

            {"skillList" in experience && (
              <div className="flex w-full items-center justify-start mt-3  flex-wrap space-2">
                {experience?.skillList?.map((item, index) => (
                  <Chip
                    variant="shadow"
                    key={index}
                    className="mr-2 mb-2 drop-shadow shadow-gray-800 flex items-center rounded-full bg-red-200/10 px-3 py-1 text-xs font-medium leading-5 text-red-400 "
                  >
                    {item}
                  </Chip>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
