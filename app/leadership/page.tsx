'use client';

import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn"; 
import { leadershipExperience } from "@/lib/data";
import { Calendar, MapPin, Trophy, ExternalLink } from "lucide-react"; // Added ExternalLink

// Animation variants (Unchanged)
const listVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function LeadershipPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-6 pb-20 pt-24">
      {/* --- HEADER --- */}
      <FadeIn className="space-y-6 pt-6">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
          Leadership & Initiative
        </p>
        <h1 className="text-3xl font-bold text-slate-100 md:text-5xl leading-tight">
          Leading with clarity, momentum, <br /> and <span className="text-slate-500">calm execution.</span>
        </h1>
        <p className="max-w-2xl text-lg text-slate-400 leading-relaxed">
          Beyond the code, I build communities and guide teams. 
          A concise record of how I turn strategy into motion.
        </p>
      </FadeIn>

      {/* --- TIMELINE --- */}
      <FadeIn delay={0.1}>
        <motion.div
          variants={listVariants}
          initial="hidden"
          animate="show"
          className="relative flex flex-col gap-8"
        >
          {/* Vertical Line */}
          <span className="absolute left-4 top-3 h-[calc(100%-12px)] w-px bg-slate-800/80" />
          
          {leadershipExperience.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative rounded-2xl border border-slate-800/60 bg-slate-900/40 px-6 py-6 backdrop-blur-sm transition-colors hover:border-slate-700/80 hover:bg-slate-900/60 group"
            >
              {/* Glowing Dot */}
              <span className="absolute left-4 top-8 h-2.5 w-2.5 -translate-x-[5px] rounded-full bg-cyan-500 shadow-[0_0_12px_2px_rgba(6,182,212,0.5)] z-10" />
              
              <div className="ml-8 space-y-4">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">
                      {exp.role}
                    </h3>
                    
                    {/* Company Name with Optional Link */}
                    <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium mt-1">
                      <Trophy size={14} />
                      {exp.link ? (
                        <a 
                          href={exp.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline hover:text-cyan-300 flex items-center gap-1 transition-colors"
                        >
                          {exp.company}
                          <ExternalLink size={12} className="opacity-70" />
                        </a>
                      ) : (
                        <span>{exp.company}</span>
                      )}
                    </div>
                  </div>
                  
                  {/* Meta Data */}
                  <div className="flex flex-col md:items-end text-xs font-medium uppercase tracking-wider text-slate-500 gap-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {exp.dates}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm leading-relaxed marker:text-cyan-500/50">
                  {exp.descriptionPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold text-cyan-300 bg-cyan-950/30 rounded border border-cyan-900/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </FadeIn>
    </div>
  );
}