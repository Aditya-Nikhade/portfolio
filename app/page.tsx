import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import React from 'react';
import { DotPattern } from "../components/magicui/dot-pattern";
import { RainbowButton } from "../components/magicui/rainbow-button";
import { ShineBorder } from "../components/magicui/shine-border";
import { AuroraText } from "../components/magicui/aurora-text";

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
    items: ["MongoDB", "MySQL"],
  },
  {
    label: "CS Fundamentals",
    items: ["OOPs", "DBMS", "OS"],
  },
  {
    label: "DevOps & Deployment",
    items: ["Docker", "Shell Scripting"],
  }
];

// Simplified projects data structure
const projects = [
  {
    title: "Project One",
    description: "A dummy project description for Project One. Showcases React and Node.js integration.",
    link: "#" // Add a dummy link if needed
  },
  {
    title: "Project Two",
    description: "A dummy project description for Project Two. Real-time chat app using WebSockets.",
    link: "#"
  },
  {
    title: "Project Three",
    description: "A dummy project description for Project Three. RESTful API with Express and MongoDB.",
    link: "#"
  },
  {
    title: "Project Four",
    description: "Another dummy project for layout demonstration.",
    link: "#"
  },
  {
    title: "Project Five",
    description: "Final dummy project for asymmetric layout.",
    link: "#"
  }
];

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-neutral-100 font-sans grid grid-cols-12 gap-6 px-6 py-6 overflow-y-auto overflow-x-hidden">
      <DotPattern
        className="absolute inset-0 w-full h-full fill-neutral-400/40 pointer-events-none"
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
      />
      {/* Left Column */}
      <section className="col-span-12 lg:col-span-3 flex flex-col gap-4 z-10">
        {/* Profile Box */}
        <div className="bg-white rounded-xl shadow-md border border-neutral-200 px-6 py-4 flex items-center gap-6">
          <Image
            src="/image.png"
            alt="Profile picture"
            width={96}
            height={96}
            className="object-cover w-24 h-24 border border-neutral-200 shadow flex-shrink-0"
            priority
          />
          <div className="flex flex-col">
            <AuroraText className="font-bold text-4xl font-cubano mb-1 text-left">
              Hi! <br /> I&apos;m Aditya
            </AuroraText>
          </div>
        </div>
        {/* Skills Box */}
        <div className="bg-white rounded-xl shadow-md border border-neutral-200 px-6 py-4 flex flex-col gap-4">
          <h2 className="font-bold text-4xl font-cubano mb-2 tracking-tight text-neutral-900">Skills</h2>
          <div className="flex flex-col gap-4">
            {skills.map((group) => (
              <div key={group.label}>
                <div className="text-sm font-bold text-neutral-700 mb-2 uppercase tracking-wide">{group.label}</div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="bg-neutral-100 border border-neutral-200 rounded px-2 py-1 text-xs font-medium shadow-sm"
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

      {/* Center Column: Projects */}
      <section className="col-span-12 lg:col-span-7 flex flex-col gap-6 z-10">
        <div className="relative bg-white rounded-xl shadow-md border border-neutral-200 p-6">
          <ShineBorder borderWidth={2} duration={10} shineColor={["#38bdf8", "#f472b6", "#facc15"]} />
          <h2 className="font-bold text-5xl font-cubano mb-6 tracking-tight text-neutral-900 text-left relative z-10">Projects</h2>
          {/* Simple 2-box per row grid for projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            {projects.map((project, i) => (
              <div key={i} className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-neutral-900">{project.title}</h3>
                <p className="text-sm text-neutral-500">{project.description}</p>
                {project.link && (
                  <a href={project.link} className="text-sm text-blue-600 hover:underline mt-2 inline-block">Learn More</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Right Column: Links */}
      <section className="col-span-12 lg:col-span-2 flex flex-col gap-6 z-10">
        <div className="bg-white rounded-xl shadow-md border border-neutral-200 p-6 flex flex-col items-start gap-4">
          <h2 className="font-bold text-2xl font-cubano mb-2 tracking-tight text-neutral-900 text-left">Links</h2>
          <div className="flex gap-4">
            <a
              href="https://github.com/Aditya-Nikhade"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
              aria-label="GitHub"
            >
              <FaGithub size={32} /> {/* Increased icon size */}
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin color="#0077b5" size={32} /> {/* Increased icon size */}
            </a>
            <RainbowButton asChild>
              <a href="https://drive.google.com/file/d/1ppzZQAGM8RA53leBhyr_2QI0QY2m24xk/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
            </RainbowButton>
          </div>
        </div>
      </section>
    </main>
  );
}
