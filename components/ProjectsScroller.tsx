"use client";
import React from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  link: string;
  githubLink: string;
  imageLink: string;
}

export default function ProjectsScroller({ projects }: { projects: Project[] }) {
  return (
    <div className="h-full bg-secondary-background border-2 border-foreground shadow-[4px_4px_0px_0px_var(--border)] px-6 py-4 flex flex-col gap-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-archivo text-3xl font-bold flex-1 text-center">Projects</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            style={{ flex: "1 1 calc(50% - 1.5rem)" }}
            className="bg-neutral-100 border-2 border-neutral-200 shadow-[2px_2px_0px_0px_var(--border)] flex flex-col"
          >
            {/* Top Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-archivo text-xl font-bold mb-2 flex items-center justify-between">
                {project.title}
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="ml-2">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.153-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.528 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10Z"/></svg>
                </a>
              </h3>
              <p className="text-sm text-neutral-700 mb-3 flex-grow">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline mt-auto"
              >
                View Project →
              </a>
            </div>
            {/* Bottom Image */}
            <div className="relative w-full h-40 border-t-2 border-neutral-300">
              {/* Replace src with actual project image path */}
              <Image src={project.imageLink} alt={project.title} fill className="object-fill" />
            </div>
          </div>
        ))}
        {/* Ghost placeholder to keep symmetry when odd number of projects */}
        {projects.length % 2 !== 0 && (
          <div
            aria-hidden="true"
            style={{ flex: "1 1 calc(50% - 1.5rem)" }}
            className="invisible"
          />
        )}
      </div>
    </div>
  );
}