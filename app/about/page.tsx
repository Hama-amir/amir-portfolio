'use client';

import { motion } from "framer-motion";
import { Download, Mail, Cpu, Kanban, Terminal, Palette, Activity, Zap, Gamepad2 } from "lucide-react";
import { skills } from "@/lib/data";
import SpotlightCard from "@/components/SpotlightCard";

export default function About() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 pb-20 pt-24">
      
      {/* --- HERO / BIO SECTION --- */}
      <section className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-8"
        >
          <h1 className="text-4xl font-bold text-slate-100 md:text-6xl leading-tight">
            Engineering the <br />
            <span className="text-cyan-400">Physical & Digital.</span>
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-slate-400">
            <p>
              I am a <strong>Mechatronics Engineering student</strong> at the University of Waterloo. 
              My expertise lies in the messy, complex intersection where hardware meets software.
            </p>
            <p>
              From coding <strong>autonomous robots</strong> to managing <strong>large-scale tech events</strong>, 
              I realized that the best products aren&apos;t just &quot;functional&quot;—they are intuitive, robust, and user-centric.
            </p>
            <p>
              Now, I am pivoting into <strong>Technical Product Management</strong>. I use my engineering background to 
              translate complex constraints into clear strategy, ensuring we build the <em>right</em> thing, the <em>right</em> way.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              className="group flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition-all hover:bg-cyan-400 hover:scale-105"
            >
              <Download size={18} /> Download Resume
            </a>
            <a
              href="mailto:your.email@uwaterloo.ca"
              className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3 font-semibold text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
            >
              <Mail size={18} /> Contact Me
            </a>
          </div>
        </motion.div>

{/* --- DEFINING TRAJECTORY --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-800 pt-8"
        >
          {/* Pillar 1: The Technical Edge */}
          <div className="flex items-start gap-4 group">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
              <Terminal size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-200">Applied AI & Systems</h3>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                Deploying LLMs on edge devices & architecting scalable C++ systems.
              </p>
            </div>
          </div>

          {/* Pillar 2: The Founder Mindset */}
          <div className="flex items-start gap-4 group">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
              <Zap size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-200">Entrepreneurial Scale</h3>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                Founded initiatives with $30k+ revenue & led 120+ person teams.
              </p>
            </div>
          </div>

          {/* Pillar 3: The Hardware Bridge */}
          <div className="flex items-start gap-4 group">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
              <Cpu size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-200">Physical-Digital Bridge</h3>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                Translating mechanical constraints into seamless software UX.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- THE ARSENAL (BENTO GRID) --- */}
      <section>
        <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-3xl font-bold text-slate-100 border-l-4 border-cyan-500 pl-4"
        >
          The Arsenal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
          {/* Card 1: Product Strategy */}
          <SpotlightCard>
            <div className="mb-6 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Kanban size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Product Strategy</h3>
            </div>
            <p className="mb-6 text-slate-400">
                Tools I use to manage roadmaps, align cross-functional teams, and execute sprints.
            </p>
            <div className="flex flex-wrap gap-2">
                {[...skills.product, ...skills.softSkills].map(skill => (
                    <span key={skill} className="px-3 py-1 text-sm font-medium text-cyan-200 bg-cyan-950/40 border border-cyan-900/50 rounded-md">
                        {skill}
                    </span>
                ))}
            </div>
          </SpotlightCard>

          {/* Card 2: Design & Data */}
          <SpotlightCard>
            <div className="mb-6 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Palette size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Design & Data</h3>
            </div>
            <p className="mb-6 text-slate-400">
                Visualizing concepts and validating them with data. From Figma prototypes to SQL queries.
            </p>
            <div className="flex flex-wrap gap-2">
                {[...skills.designData, "SQL", "Python (Data)"].map(skill => (
                    <span key={skill} className="px-3 py-1 text-sm font-medium text-emerald-200 bg-emerald-950/40 border border-emerald-900/50 rounded-md">
                        {skill}
                    </span>
                ))}
            </div>
          </SpotlightCard>

          {/* Card 3: Engineering */}
          <SpotlightCard>
            <div className="mb-6 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                    <Cpu size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Engineering & CAD</h3>
            </div>
            <p className="mb-6 text-slate-400">
                My foundation in Mechatronics. Designing hardware, simulating physics, and rapid prototyping.
            </p>
            <div className="flex flex-wrap gap-2">
                {skills.engineering.map(skill => (
                    <span key={skill} className="px-3 py-1 text-sm font-medium text-blue-200 bg-blue-950/40 border border-blue-900/50 rounded-md">
                        {skill}
                    </span>
                ))}
            </div>
          </SpotlightCard>

          {/* Card 4: Software Dev */}
          <SpotlightCard>
            <div className="mb-6 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                    <Terminal size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Full Stack & Dev</h3>
            </div>
            <p className="mb-6 text-slate-400">
                The code that brings the hardware to life. From low-level C++ to Modern React web apps.
            </p>
            <div className="flex flex-wrap gap-2">
                {[...skills.languages, ...skills.devtools].map(skill => (
                    <span key={skill} className="px-3 py-1 text-sm font-medium text-purple-200 bg-purple-950/40 border border-purple-900/50 rounded-md">
                        {skill}
                    </span>
                ))}
            </div>
          </SpotlightCard>

        </div>
      </section>
    </main>
  );
}