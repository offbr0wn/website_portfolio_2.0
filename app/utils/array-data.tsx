import React from "react";
import { FaMobile, FaCloud } from "react-icons/fa";
import { Image } from "@nextui-org/react";
import MobileImage from "@/public/MobileImage.png";

export const ArrayData = [
  {
    data: "Jan 2023 - Mar 2024",
    projectLink: "https://www.unilink.com/",
    projectName: " Software React developer · Unilink",
    descList: [
      "Collaborated cross-functionally to streamline development processes, reducing time-to-market",
      "Spearheaded complete website redesign, enhancing functionality and user engagement. ",
      "Implemented Redux, RTK query, TypeScript, and REST API for efficient state management, achieving faster rendering and fetching times",
      "Utilized continuous integration and continuous deployment (CI/CD) pipelines to ensure code quality and rapid deployment cycles",
    ],

    skillList: [
      "React",
      "Typescript",
      "Node.js",
      "Git",
      "Tailwind CSS",
      "Redux",
      "Docker",
      "Next.js",
    ],
  },
  {
    data: "Nov 2021 - Dec 2022",
    projectLink: "https://catchapp.mobi/",
    projectName: " Front-end Software Developer (React) · CatchApp Bookings",
    descList: [
      "Translated business UX/UI requirements into technical specifications, ensuring responsive websites and a boost in user satisfaction.",
      "Developed reusable components and libraries, cutting development time by 30% and improving code efficiency with REST APIs.",
      "Conducted thorough code reviews and provided constructive feedback to team members, promoting code quality and consistency.",
      "Actively participated in sprint planning, stand-up meetings, and retrospectives to foster a culture of continuous improvement and teamwork.",
      "Collaborated closely with cross-functional teams to ensure seamless integration of front-end and back-end systems.",
    ],

    skillList: [
      "JavaScript",
      "Node.js",
      "Git",
      "HTML",
      "BitBucker",
      "Docker",
      "Jira",
    ],
  },
  {
    data: "Dec 2020 - Sep 2021",
    projectLink: "https://catchapp.mobi/",
    projectName: " Customer Service Advisor · Sitel Group",
    descList: [
      "Scheduled appointments for clients, ensuring timely and effective service delivery.",
      "Maintained meticulous records of client interactions to ensure accuracy and compliance with organizational standards.",
      "Determined charges for plans purchased or services scheduled, providing transparent and accurate information to clients.",
    ],

    skillList: [
      "Communication",
      "Problem-solving",
      "Creativity and resourcefulness",
      "Time management",
    ],
  },
];

export const EducationArray = [
  {
    data: "07/2020",
    projectName:
      "Bachelor of Science in Computer Science · University of East Anglia",
    descList: [
      "Relevant Courses: Web development, UI/UX, Data Structures and algorithms",
    ],
  },
  {
    data: "01/2021",
    projectName: "UX/UI course · UDEMY",
    descList: ["UX/UI course in user experience design essentials"],
  },
];

export const items = [
  {
    title: "Movie Streaming App - React Native",
    description:
      "A movie and tv show application created in react native with expo, where you can enjoy a wide range of TV shows and movies on your mobile device. With our app, you can easily discover new titles, browse through our extensive library, and watch your favorite shows and movies on the go.",
    header: "/MobileImage.png",
    className: "md:col-span-2",
    icon: <FaMobile className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/offbr0wn/movie-streaming-app?tab=readme-ov-file",
  },
  {
    title: "Weather App",
    description:
      "Weather Application offers weather updates and forecasts for any location. Its sleek interface provides current conditions,The app ensures users stay informed about the weather with ease and clarity.",
    header: "/WeatherImage.png",
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
    link: "https://github.com/offbr0wn/Phish-website",
    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Website Portfolio v1.0",
    description: "Portfolio showcasing all my experience in a website",
    // header: <Skeleton />,
    header: "/Website_1.0.png",
    className: "md:col-span-1",
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    link: "https://shashankravikumar.netlify.app/",
  },
  {
    title: "Website Portfolio v2.0",
    description: "New and improved of the website you're looking at.",

    className: "md:col-span-1",
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
