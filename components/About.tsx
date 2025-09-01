import Image from "next/image";
import profilePic from "@/public/my_pic.jpg";
import { BsCodeSlash } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";
import { cn } from "@/lib/utils";

const infoList = [
  {
    icon: <BsCodeSlash />,
    title: "Languages",
    description:
      "C++, TypeScript, ReactJs, NextJs, NodeJs, GraphQL, PostgreSQL",
  },
  {
    icon: <FaGraduationCap />,
    title: "Education",
    description: "BE Computer Engineering, Army Institute of Technology",
  },
  {
    icon: <FaFolderOpen />,
    title: "Experience",
    description: "2+ Years. Worked on 5+ Projects",
  },
];

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="absolute flex h-[50rem] w-full items-center justify-center bg-white dark:bg-[#000319]">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:80px_80px]",
            "[background-image:linear-gradient(to_right,rgba(228,228,231,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.4)_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.4)_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[#000319]"></div>
      </div>
      <h4 className="text-center mb-2 text-lg relative text-[#CBACF9] tracking-widest">Introduction</h4>
      <h1 className="text-center text-5xl relative heading">About Me</h1>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20 relative">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={profilePic}
            alt="My profile picture"
            className="rounded-3xl w-full"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl">
            Passionate Full-Stack Developer skilled in React, Next, Node.js and
            modern backend systems, focused on building scalable applications
            and seamless user experiences. Currently expanding into DevOps to
            deliver efficient end-to-end solutions while aiming to contribute to
            impactful, real-world projects.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, title, description }, idx) => (
              <li
                key={idx}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer"
              >
                <div className="w-7 mt-3">{icon}</div>
                <h3 className="my-4 font-semibold text-[#CBACF9]">{title}</h3>
                <p className="text-sm">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
