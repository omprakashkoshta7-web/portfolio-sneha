"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline";
  target?: string;
  rel?: string;
  download?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function GradientButton({
  children,
  href,
  onClick,
  className,
  variant = "primary",
  target,
  rel,
  download,
  type = "button",
  disabled,
}: GradientButtonProps) {
  const baseStyles = cn(
    "relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 overflow-hidden group",
    variant === "primary"
      ? "gradient-btn text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
      : "glass text-gray-200 hover:text-white hover:border-purple-500/30",
    className
  );

  const content = (
    <>
      {variant === "primary" && <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={baseStyles}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={baseStyles}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
}
