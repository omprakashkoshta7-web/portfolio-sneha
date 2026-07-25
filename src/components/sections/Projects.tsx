"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, ExternalLink, X, ChevronRight, Check } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientButton from "@/components/ui/GradientButton";
import { projects } from "@/data/portfolio";

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="glass rounded-2xl border border-white/10 max-w-2xl w-full max-h-[85vh] overflow-y-auto"
      >
        <div className="relative h-48 bg-gradient-to-br from-purple-600/30 via-blue-600/20 to-cyan-600/30 flex items-end p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/10 to-cyan-600/20" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-black/30 text-gray-300 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold font-heading text-white">
              {project.title}
            </h3>
            <p className="text-purple-300">{project.subtitle}</p>
          </div>
        </div>

        <div className="p-6 space-y-5">
          <p className="text-gray-400 leading-relaxed">
            {project.fullDescription}
          </p>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Features</h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                  <Check size={14} className="text-green-400 shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <GradientButton href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Code2 size={18} />
              View Code
            </GradientButton>
            <GradientButton href={project.liveUrl} target="_blank" rel="noopener noreferrer" variant="outline">
              <ExternalLink size={18} />
              Live Demo
            </GradientButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of projects I've built with modern technologies."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <GlassCard key={project.title} delay={i * 0.1} tilt>
              <div
                className="relative h-48 rounded-xl mb-5 overflow-hidden cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold font-heading text-white/80 mb-1">
                      {project.title.charAt(0)}
                    </div>
                    <p className="text-white/60 text-sm font-medium">{project.subtitle}</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                  <span className="flex items-center gap-1 text-white text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                    View Details <ChevronRight size={16} />
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold font-heading text-white mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-purple-400 mb-3">{project.subtitle}</p>
              <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 text-[11px] rounded-lg bg-white/5 text-gray-400 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2.5 py-0.5 text-[11px] rounded-lg bg-white/5 text-gray-500 border border-white/5">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                <GradientButton href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs px-4 py-2">
                  <Code2 size={14} />
                  Code
                </GradientButton>
                <GradientButton href={project.liveUrl} target="_blank" rel="noopener noreferrer" variant="outline" className="text-xs px-4 py-2">
                  <ExternalLink size={14} />
                  Demo
                </GradientButton>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="ml-auto px-3 py-2 rounded-xl text-xs text-gray-400 hover:text-white glass hover:border-purple-500/20 transition-all"
                >
                  Details
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
