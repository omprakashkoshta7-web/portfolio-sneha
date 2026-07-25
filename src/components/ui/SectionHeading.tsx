"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-16"
    >
      <h2 className="section-heading">
        <span className="gradient-text">{title}</span>
      </h2>
      <div className="gradient-divider" />
      {subtitle && <p className="section-subheading mt-4">{subtitle}</p>}
    </motion.div>
  );
}
