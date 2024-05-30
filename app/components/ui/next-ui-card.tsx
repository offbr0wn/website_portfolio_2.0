import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import ExperienceCard from "./experience-card";
import { ArrayData, EducationArray } from "@/app/utils/array-data";

export default function NextUiCard() {
  return (
    <div className="  flex-col flex items-center justify-center ">
      <Tabs
        aria-label="Options"
        // isVertical={isVertical}
        className="  items-center justify-center "
      >
        <Tab key="about" title="About">
          <Card className="w-full">
            <CardBody className="space-y-5">
              <p>
                Hello! 👋, I'm Shashank a software developer specializing in
                frontend development, who's bread and butter is react and
                Typescript , I enjoy creating and designing things that live on
                the internet. My interest in web development started back in
                2017 when I decided to try editing custom elements within
                websites, which lead me to explore the creative side of web
                design
              </p>
              <p>
                Since the early days of my journey, I've been captivated by the
                art of crafting exceptional digital experiences. As a developer,
                I thrive on turning lines of code into functional and elegant
                solutions. My goal is to not just create software, but to build
                digital marvels that seamlessly merge form and function. I
                believe that aesthetics and usability go hand in hand. My eye
                for awesome design ensures that every project I undertake not
                only works flawlessly under the hood but also looks stunning on
                the surface.
              </p>

              <p>
                I have the ability to adapt to any type of environment,and get
                along with others when working in a group setting. I am
                passionate about coding and solving problems through thinking
                outside the box 🙂.
              </p>
              <p>💻 Currently seeking Contract/Freelance opportunities.</p>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="experience" title="Experience">
          <Card className="w-full ">
            <CardBody className="space-y-10">
              {ArrayData?.map((experiences, index) => (
                <React.Fragment key={index}>
                  <ExperienceCard experience={experiences} />
                </React.Fragment>
              ))}
            </CardBody>
          </Card>
        </Tab>
        <Tab key="education" title="Education">
          <Card className="w-full">
            <CardBody className="space-y-10">
              {EducationArray?.map((experiences, index) => (
                <React.Fragment key={index}>
                  <ExperienceCard experience={experiences} />
                </React.Fragment>
              ))}
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
