"use client";
import { motion } from "framer-motion";
import { Download, Eye, Mail, Briefcase, FolderGit2, Cpu, Award, ChevronDown } from "lucide-react";
import TypingAnimation from "@/components/ui/TypingAnimation";
import GradientButton from "@/components/ui/GradientButton";
import { personalInfo, typingWords, quickStats } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase size={20} />,
  FolderGit2: <FolderGit2 size={20} />,
  Cpu: <Cpu size={20} />,
  Award: <Award size={20} />,
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 pt-20 pb-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b0b0b] z-[2]" />

      <div className="relative z-[3] max-w-4xl mx-auto text-center flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block glass rounded-full px-5 py-1.5 mb-6 border border-purple-500/10"
          >
            <span className="text-sm text-gray-300">
              <span className="text-purple-400">&#123; </span>
              Available for opportunities
              <span className="text-purple-400"> &#125;</span>
            </span>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
          <br />
          <span>{personalInfo.name.split(" ")[1]}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-heading mb-3"
        >
          <TypingAnimation words={typingWords} className="gradient-text" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <GradientButton
            href={personalInfo.resumeUrl}
            download="Sneha_Koshta_Resume.pdf"
          >
            <Download size={18} />
            Download Resume
          </GradientButton>
          <GradientButton
            variant="outline"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Eye size={18} />
            View Projects
          </GradientButton>
          <GradientButton
            variant="outline"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Mail size={18} />
            Contact Me
          </GradientButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-[3] w-full max-w-5xl mx-auto"
      >
        <div className="glass rounded-2xl border border-white/5 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
          {quickStats.map((stat) => (
            <div key={stat.label} className="p-4 md:p-5 text-center">
              <div className="flex justify-center mb-1 text-purple-400">
                {iconMap[stat.icon]}
              </div>
              <div className="text-lg md:text-xl font-bold font-heading text-white">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="relative z-[3] mt-4"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-gray-500" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
