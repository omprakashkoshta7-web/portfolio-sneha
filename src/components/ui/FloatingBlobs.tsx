"use client";
import { motion } from "framer-motion";

interface BlobProps {
  className?: string;
  size?: number;
  color?: string;
  delay?: number;
  x?: number;
  y?: number;
}

function Blob({
  className = "",
  size = 300,
  color = "rgba(168,85,247,0.1)",
  delay = 0,
  x = 0,
  y = 0,
}: BlobProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        left: `${x}%`,
        top: `${y}%`,
      }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{
        duration: 12,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function FloatingBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <Blob size={400} color="rgba(168,85,247,0.06)" delay={0} x={-10} y={-10} />
      <Blob size={350} color="rgba(59,130,246,0.05)" delay={2} x={70} y={60} />
      <Blob size={300} color="rgba(6,182,212,0.04)" delay={4} x={80} y={-5} />
      <Blob size={250} color="rgba(168,85,247,0.05)" delay={6} x={10} y={70} />
    </div>
  );
}
