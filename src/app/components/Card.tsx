import { ReactNode } from "react";
import { motion } from "motion/react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export function Card({ children, className = "", hover = false, padding = "md" }: CardProps) {
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const Component = hover ? motion.div : "div";

  const hoverProps = hover
    ? {
        whileHover: { y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" },
        transition: { duration: 0.2 },
      }
    : {};

  return (
    <Component
      className={`bg-white rounded-2xl border border-[#E2E8F0] ${
        hover ? "cursor-pointer" : ""
      } ${paddings[padding]} ${className}`}
      {...hoverProps}
    >
      {children}
    </Component>
  );
}
