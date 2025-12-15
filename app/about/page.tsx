'use client';

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { skills } from "@/lib/data";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 pb-20 pt-24">
      {/* --- BIO SECTION --- */}
      <section className="mb-20 space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-slate-100 md:text-5xl"
        >
          About Me
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-6 text-lg leading-relaxed text-slate-300"
        >
          <p>
            I am a <strong>Mechatronics Engineering student</strong> at the University of Waterloo.
            My background isn&apos;t just in code, and it isn&apos;t just in hardware—it&apos;s in the messy,
            complex intersection of both.
          </p>
          <p>
            From building <strong>autonomous Stewart Platforms</strong> to developing{" "}
            <strong>multiplayer Unreal Engine games</strong>, I have learned that the best engineering
            doesn&apos;t just work; it feels right to the user.
          </p>
          <p>
            I am pivoting into <strong>Software Engineering</strong> and <strong>Product Management</strong> because
            I love the challenge of translating complex technical constraints into seamless user experiences.
            Whether I&apos;m calculating fluid dynamics or designing an IoT people counter, my goal is always the same:
            solve the problem elegantly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-2 rounded-lg bg-cyan-600 px-6 py-3 font-medium text-white transition-colors shadow-lg shadow-cyan-900/20 hover:bg-cyan-500"
          >
            <Download size={18} /> Download Resume
          </a>
          <a
            href="mailto:your.email@uwaterloo.ca"
            className="flex items-center gap-2 rounded-lg bg-slate-800 px-6 py-3 font-medium text-slate-200 transition-colors hover:bg-slate-700"
          >
            <Mail size={18} /> Contact Me
          </a>
        </motion.div>
      </section>

      {/* --- SKILLS MATRIX --- */}
      <section>
        <h2 className="mb-8 border-b border-slate-800 pb-4 text-2xl font-bold text-slate-100">
          Technical Arsenal
        </h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-cyan-400">
              Languages
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {skills.languages.map((skill) => (
                <motion.span
                  variants={item}
                  key={skill}
                  className="rounded-md border border-slate-800 bg-slate-900 px-3 py-1 text-sm text-slate-300"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-cyan-400">
              Engineering & Design
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {skills.engineering.map((skill) => (
                <motion.span
                  variants={item}
                  key={skill}
                  className="rounded-md border border-slate-800 bg-slate-900 px-3 py-1 text-sm text-slate-300"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-cyan-400">
              Dev Tools
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {skills.tools.map((skill) => (
                <motion.span
                  variants={item}
                  key={skill}
                  className="rounded-md border border-slate-800 bg-slate-900 px-3 py-1 text-sm text-slate-300"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-cyan-400">
              Product & Strategy
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {skills.product.map((skill) => (
                <motion.span
                  variants={item}
                  key={skill}
                  className="rounded-md border border-slate-800 bg-slate-900 px-3 py-1 text-sm text-slate-300"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

