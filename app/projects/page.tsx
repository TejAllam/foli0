import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";
import previewsData from "./previews.json";

export const metadata: Metadata = {
  title: "Projects",
  description: "Tej Allam's Projects",
};

export default function Projects() {
  const projectsWithPreviews = projects.map((project) => {
    const preview = (previewsData as Record<string, any>)[project.url] || { screenshotUrl: null, description: null };
    return { ...project, preview };
  }).sort((a, b) => b.year - a.year);

  const ProjectCard = ({ project }: { project: any }) => (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group hover:opacity-100 transition-all duration-300 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md"
    >
      <div className="flex flex-col h-full">
        <div className="p-5 pb-4">
          <div className="w-full flex justify-between items-baseline mb-2">
            <span className="text-black dark:text-white font-medium tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </span>
            <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm shrink-0 ml-2">
              {project.year}
            </span>
          </div>
          <p className="prose prose-neutral dark:prose-invert text-sm text-neutral-800 dark:text-neutral-200">
            {project.description}
          </p>
        </div>

        {project.preview.screenshotUrl && (
          <div className="border-t border-neutral-200 dark:border-neutral-800 w-full bg-neutral-100 dark:bg-neutral-950 overflow-hidden">
            <img
              src={project.preview.screenshotUrl}
              alt={`Preview of ${project.title}`}
              className="w-full h-auto object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </a>
  );

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">My work over the years .. </h1>
      <div className="flex flex-col gap-8">
        {projectsWithPreviews.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
