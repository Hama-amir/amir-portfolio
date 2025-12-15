 'use client';

import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function MechanicalPage() {
  const filtered = projects.filter(
    (project) => project.category === "mechanical"
  );

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-6">
      <FadeIn className="space-y-4 pt-6">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          Mechanical
        </p>
        <h1 className="text-3xl font-semibold text-slate-50 md:text-4xl">
          Interfaces tuned for physical systems, kinematics, and safety.
        </h1>
      </FadeIn>

      <FadeIn delay={0.05}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} variants={item} />
          ))}
        </motion.div>
      </FadeIn>
    </div>
  );
}

