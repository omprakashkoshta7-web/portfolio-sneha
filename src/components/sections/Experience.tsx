"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/portfolio";

function TimelineItem({ experience, index, total }: { experience: typeof experiences[0]; index: number; total: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex gap-6 md:gap-8"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center shrink-0">
        {/* Dot */}
        <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
          <Briefcase size={18} className="text-white" />
        </div>
        {/* Connector line */}
        {index < total - 1 && (
          <div className="w-[2px] flex-1 bg-gradient-to-b from-purple-500/40 to-blue-500/10 min-h-[2rem]" />
        )}
      </div>

      {/* Content card */}
      <div className="flex-1 pb-10">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold font-heading text-white">
            {experience.role}
          </h3>
          <p className="text-purple-400 font-medium mt-0.5">
            {experience.company}
          </p>
          <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {experience.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} />
              {experience.location}
            </span>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="glass rounded-2xl p-5 border border-white/5">
          <ul className="space-y-3">
            {experience.responsibilities.map((resp, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed"
              >
                <ChevronRight size={14} className="text-purple-400 mt-0.5 shrink-0" />
                <span>{resp}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey and the impact I've made."
        />

        <div>
          {experiences.map((exp, i) => (
            <TimelineItem
              key={i}
              experience={exp}
              index={i}
              total={experiences.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
