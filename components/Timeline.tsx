"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, Trophy } from "lucide-react";

// Define the interface for the data
interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  dates: string;
  descriptionPoints: string[];
  skills: string[];
}

interface TimelineProps {
  items: ExperienceItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-12 pl-4 md:pl-0">
      {/* The Vertical Line */}
      <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-800 md:left-1/2 md:-ml-0.5" />

      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`relative flex flex-col md:flex-row gap-8 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* The Dot */}
          <div className="absolute left-4 -ml-[9px] top-0 h-5 w-5 rounded-full border-4 border-slate-950 bg-cyan-500 md:left-1/2 md:-ml-[9px]" />

          {/* Date (Desktop Side) */}
          <div className="hidden md:block flex-1 pt-1 text-right md:text-slate-500">
            <span className={`flex items-center gap-2 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
              {index % 2 === 0 ? <Calendar size={14} /> : null}
              {item.dates}
              {index % 2 !== 0 ? <Calendar size={14} /> : null}
            </span>
          </div>

          {/* Content Card */}
          <div className="flex-1 ml-8 md:ml-0">
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              {/* Mobile Date */}
              <div className="flex items-center gap-2 text-xs font-medium text-cyan-400 mb-2 md:hidden">
                <Calendar size={12} />
                {item.dates}
              </div>

              <h3 className="text-xl font-bold text-slate-100">{item.role}</h3>
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                {/* Switch icon based on context if you want, or keep generic */}
                <Briefcase size={14} /> 
                <span>{item.company}</span>
                <span className="text-slate-600">•</span>
                <MapPin size={14} />
                <span>{item.location}</span>
              </div>
              
              <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300 text-sm leading-relaxed marker:text-cyan-500/50">
                {item.descriptionPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {item.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-2 py-1 text-xs font-medium text-cyan-300 bg-cyan-950/30 rounded border border-cyan-900/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}