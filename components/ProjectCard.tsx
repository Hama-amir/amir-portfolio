"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Github, PlayCircle, Sparkles, Globe } from "lucide-react";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  variants?: Variants;
  className?: string;
  index?: number;
};

export function ProjectCard({
  project,
  variants,
  className,
  index = 0,
}: ProjectCardProps) {
  const hasImage = Boolean(project.imageUrl && project.imageUrl.trim().length);

  // Determine link type: no link (empty or "#"), GitHub, or external website
  const rawLink = project.link?.toString() ?? "";
  const trimmedLink = rawLink.trim();
  const hasLink = Boolean(trimmedLink && trimmedLink !== "#");
  const isGithub = hasLink && (trimmedLink.includes("github.com") || trimmedLink.includes("git."));

  return (
    <motion.div
      variants={variants}
      initial={variants ? undefined : { opacity: 0, y: 20 }}
      whileInView={variants ? undefined : { opacity: 1, y: 0 }}
      viewport={variants ? undefined : { once: true }}
      transition={
        variants
          ? undefined
          : { delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
      }
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur",
        "transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/80",
        className
      )}
    >
      <div className="relative h-48 w-full overflow-hidden bg-slate-950">
        {hasImage ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-slate-300">
            <div className="flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em]">
              <Sparkles className="h-4 w-4" />
              No image
            </div>
          </div>
        )}

        <div className="absolute top-3 right-3 rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur-md">
          {project.role}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-slate-100 transition-colors group-hover:text-cyan-400">
          {project.title}
        </h3>

        <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-cyan-900/30 bg-cyan-950/30 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3">
          {hasLink ? (
            <Link
              href={trimmedLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {isGithub ? <Github size={16} /> : <Globe size={16} />}
              <span>{isGithub ? "Code" : "Website"}</span>
            </Link>
          ) : (
            <span className="ml-0 inline-flex items-center gap-2 text-sm font-medium text-slate-500 opacity-60" aria-disabled>
              <Sparkles className="h-4 w-4" />
              <span>No link</span>
            </span>
          )}

          {project.videoUrl ? (
            <Link
              href={project.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-red-400 transition-colors hover:text-red-300"
            >
              <PlayCircle size={16} />
              <span>Watch Demo</span>
            </Link>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

