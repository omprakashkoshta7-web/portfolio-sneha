"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award, Star, BookOpen, Cloud, Shield, Cpu } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientButton from "@/components/ui/GradientButton";
import { about, personalInfo } from "@/data/portfolio";

const achievementIcons: Record<string, React.ReactNode> = {
  "Cisco Certifications": <Shield size={18} />,
  "ISRO Machine Learning": <Cpu size={18} />,
  CCNA: <BookOpen size={18} />,
  "Google Cloud Enthusiast": <Cloud size={18} />,
  "Strong Backend Development": <Star size={18} />,
  "Cloud Ready": <Cloud size={18} />,
};

function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center"
    >
      {/* Image with gradient border */}
      <div className="relative group">
        {/* Outer glow ring */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 opacity-30 blur-md group-hover:opacity-50 transition-opacity duration-500" />

        {/* Gradient border frame */}
        <div className="relative rounded-full p-[2px] bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400">
          <div className="relative rounded-full overflow-hidden bg-[#111111] w-48 h-48">
            <img
              src="/images/profile.jpg"
              alt="Sneha Koshta"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about my background, education, and professional journey."
        />

        {/* Image + Summary row */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-14 items-start mb-10">
          <ProfileImage />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="h-full">
              <h3 className="text-xl font-bold font-heading text-white mb-4">
                Professional Summary
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                {about.summary.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-6">
                <GradientButton href={personalInfo.resumeUrl} download="Sneha_Koshta_Resume.pdf">
                  <Star size={18} />
                  Download Resume
                </GradientButton>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Education + Achievements row */}
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-heading text-white mb-1">
                    Education
                  </h4>
                  <p className="text-gray-200 font-medium">
                    {about.education.degree}
                  </p>
                  <p className="text-gray-400 text-sm mt-0.5">
                    {about.education.institution} | {about.education.university}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span>{about.education.period}</span>
                    <span className="flex items-center gap-1">
                      <Award size={14} className="text-purple-400" />
                      CGPA: {about.education.cgpa}
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard>
              <h4 className="text-lg font-bold font-heading text-white mb-4 flex items-center gap-2">
                <Award size={20} className="text-purple-400" />
                Achievements
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {about.achievements.map((achievement, i) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-gray-300"
                  >
                    <span className="text-purple-400 shrink-0">
                      {achievementIcons[achievement] || <Star size={18} />}
                    </span>
                    {achievement}
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
