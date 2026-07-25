"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  tilt?: boolean;
}

export default function GlassCard({ children, className, hover = true, delay = 0, tilt = false }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={tilt ? { rotateX: 2, rotateY: 2, scale: 1.02 } : hover ? { y: -5, scale: 1.02 } : undefined}
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300",
        hover && "cursor-default",
        className
      )}
      style={{ perspective: tilt ? "1000px" : undefined }}
    >
      {children}
    </motion.div>
  );
}
