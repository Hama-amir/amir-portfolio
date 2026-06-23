'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, type Project } from "@/lib/data";
import { Timeline } from "@/components/Timeline";
import { workExperience } from "@/lib/data";
import { SplineHeadTracker } from "@/components/ui/SplineHeadTracker";
import { CursorGlow } from "@/components/ui/cursorGlow"; 

const featuredProjects = [
  projects.find((p) => String(p.id) === "1"),
  projects.find((p) => String(p.id) === "5"),
  projects.find((p) => String(p.id) === "9"),
].filter((p): p is Project => Boolean(p));

export default function Home() {
  return (
    <main className="min-h-screen px-6 pb-20 pt-12 md:pt-24">
      {/* --- HERO SECTION --- */}
      <div data-hero-area className="mx-auto max-w-6xl pb-32 md:pb-40">
        <section className="relative">
          <CursorGlow />
          <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:gap-20">
            {/* LEFT COLUMN: TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 space-y-6 text-center md:text-left"
            >
              <span className="inline-block rounded-full border border-cyan-900/50 bg-cyan-950/30 px-3 py-1 text-sm font-medium uppercase tracking-wider text-cyan-400">
                Available for Hire (Jan 2027)
              </span>

              <h1 className="text-4xl font-bold leading-tight text-slate-100 md:text-6xl">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Amir Hamadache
                </span>
              </h1>

              <h2 className="text-2xl font-light text-slate-400 md:text-3xl">
                <span className="font-medium text-slate-200">TECHNICAL PROGRAM MANAGER</span>
              </h2>

              <p className="mx-auto max-w-lg text-lg leading-relaxed text-slate-400 md:mx-0">
                <span className="font-semibold text-slate-200"> Mechatronics Engineer</span> specializing in 
                <span className="font-semibold text-slate-200"> Robotics</span>, 
                <span className="font-semibold text-slate-200"> Hardware Systems</span>, and 
                <span className="font-semibold text-slate-200"> AI Automation</span>.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4 md:justify-start">
                <Link
                  href="/about"
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 transition-transform duration-200 hover:scale-[1.02]"
                >
                  About Me <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: 3D ROBOT (hidden on mobile) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 opacity-20 blur-2xl" />
              <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-slate-900 shadow-2xl md:h-[432px] md:w-[432px]">
                <div className="hidden h-full w-full md:block">
                  <SplineHeadTracker
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="h-full w-full"
                    zoom={1.6}
                    offsetY={20}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      {/* --- EXPERIENCE TIMELINE --- */}
      <section className="mx-auto mb-32 max-w-4xl">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-200"
          >
            Professional Experience
          </motion.h2>
          <p className="mt-4 text-slate-400">
            My professional journey in Technical Program Management
          </p>
        </div>
        
        {/* Pass the work data */}
        <Timeline items={workExperience} /> 
      </section>
      {/* --- FEATURED WORK --- */}
      <section className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between">
          <motion.h2
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl font-bold text-slate-200"
          >
            Featured Work
          </motion.h2>

          <Link
            href="/software"
            className="flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-cyan-400"
          >
            View All Projects <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
