import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import React from 'react';
import { AuroraText } from "../components/magicui/aurora-text";
import ProjectsScroller from "../components/ProjectsScroller";
import { g } from "framer-motion/client";


const skills = [
  {
    label: "Languages",
    items: ["C", "C++", "JavaScript", "SQL"],
  },
  {
    label: "Frontend Development",
    items: ["React.js", "HTML", "CSS", "TailwindCSS"],
  },
  {
    label: "Backend Development",
    items: ["Node.js", "Express.js", "Spring Boot (Basic)", "RESTful APIs", "WebSockets"],
  },
  {
    label: "Databases",
    items: ["MongoDB", "MySQL", "Redis"],
  },
  {
    label: "CS Fundamentals",
    items: ["OOPs", "DBMS", "OS"],
  },
  {
    label: "DevOps & Deployment",
    items: ["Docker", "Linux", "Shell Scripting", "AWS", "CI/CD"],
  }
];

// Simplified projects data structure
const projects = [
  {
    title: "ChatApp",
    description: "A classic deployed chat application made with MERN, Redis and Socket.io",
    link: "#", // Add a dummy link if needed
    githubLink: "https://github.com/Aditya-Nikhade/ec2_cicd",
    imageLink: "/chatapp.png"
  },
  {
    title: "Insight-Bot",
    description: "An AI-powered analytics tool which provides details about sales, customers and products",
    link: "#",
    githubLink: "https://github.com/Aditya-Nikhade/insight-bot",
    imageLink: "/insightbot.png"
  },
  {
    title: "In progress",
    description: "A small, but interesting one, coming soon.",
    link: "#",
    githubLink: "https://github.com/Aditya-Nikhade/In-progress",
    imageLink: "/work_in_progress.jpg"
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen w-full background-font-base grid grid-cols-12 gap-6 px-6 py-6 overflow-x-hidden">
      {/* Left Column */}
      <section className="bg-white col-span-12 lg:col-span-3 flex flex-col gap-4 z-10">
        {/* Profile Box */}
        <div className="bg-secondary-background border-2 border-foreground shadow-[4px_4px_0px_0px_var(--border)] px-6 py-4 flex items-center gap-6 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
          <Image
            src="/image.png"
            alt="Profile picture"
            width={96}
            height={96}
            className="object-cover w-24 h-24 border-2 border-foreground shadow-[4px_4px_0px_0px_var(--border)] flex-shrink-0"
            priority
          />
          <div className="flex flex-col">
            <AuroraText className="font-bold text-4xl font-archivo mb-1 text-left">
              Hi! <br /> I&apos;m Aditya
            </AuroraText>
          </div>
        </div>
        {/* Skills Box */}
        <div className="bg-secondary-background border-2 border-foreground shadow-[4px_4px_0px_0px_var(--border)] px-6 py-4 flex flex-col gap-4">
          <h2 className="font-archivo text-2xl font-bold">Skills</h2>
          <div className="flex flex-col gap-4">
            {skills.map((group) => (
              <div key={group.label}>
                <div className="text-sm font-bold text-neutral-700 mb-2 uppercase tracking-wide">{group.label}</div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="bg-neutral-100 border border-neutral-200 px-2 py-1 text-xs font-medium shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Center + Right: Projects and Links in a flex row */}
      <section className="col-span-12 lg:col-span-9 flex flex-row gap-6 z-10 items-start">
        {/* Projects Section (Client Component) */}
        <div className="bg-white flex-1 min-w-0 h-full">
          <ProjectsScroller projects={projects} />
        </div>
        {/* Links at the top right, vertically aligned with Projects, and Blogs button below */}
        <div className="flex flex-col items-end justify-start pt-2 min-w-fit">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <a
              href="https://github.com/Aditya-Nikhade"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-foreground bg-white px-4 py-2 shadow-[2px_2px_0px_0px_var(--border)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-nikhade-a88aa7224/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-foreground bg-white px-4 py-2 shadow-[2px_2px_0px_0px_var(--border)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <FaLinkedin color="#0077b5" size={28} />
            </a>
            <a
              href="https://drive.google.com/file/d/1ppzZQAGM8RA53leBhyr_2QI0QY2m24xk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-foreground bg-white px-4 py-2 shadow-[2px_2px_0px_0px_var(--border)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center"
            >
              Resume
            </a>
            <a
              href="https://monkeytype.com/profile/Aditya-Nikhade"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-foreground bg-white px-4 py-2 shadow-[2px_2px_0px_0px_var(--border)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center"
              aria-label="MonkeyType"
            >
              <Image
                src="/monkeytype.png"
                alt="MonkeyType"
                width={28}
                height={28}
                className="object-contain"
              />
            </a>
          </div>
          {/* Big Blogs Button below links */}
          <a
            href="/blogs"
            className="border-2 border-foreground bg-white px-10 py-6 shadow-[4px_4px_0px_0px_var(--border)] text-2xl font-bold hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center w-full mb-2"
          >
            Blogs
          </a>
        </div>
      </section>
    </main>
  );
}
