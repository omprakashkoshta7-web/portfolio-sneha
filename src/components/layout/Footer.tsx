"use client";
import { motion } from "framer-motion";
import { Mail, Heart, Code2, Globe } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold font-heading">
              <span className="gradient-text">{personalInfo.name}</span>
            </h3>
            <p className="text-gray-500 text-sm mt-1">{personalInfo.title}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass text-gray-400 hover:text-white hover:border-purple-500/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <Code2 size={20} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass text-gray-400 hover:text-white hover:border-purple-500/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Globe size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl glass text-gray-400 hover:text-white hover:border-purple-500/30 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-6 border-t border-white/5 text-center"
        >
          <p className="text-gray-500 text-sm flex items-center justify-center gap-1.5">
            Designed & Developed with
            <Heart size={14} className="text-purple-500 fill-purple-500" />
            using React + Next.js
          </p>
          <p className="text-gray-600 text-xs mt-2">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
