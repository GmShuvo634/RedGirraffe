import { motion } from "framer-motion";
import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  fadeInUpVariants,
  staggerContainerVariants,
  createViewportAnimation,
} from "../../utils/animations";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "fadeInUp" | "slideInLeft" | "slideInRight" | "scaleIn";
  delay?: number;
  stagger?: boolean;
  threshold?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  variant = "fadeInUp",
  delay = 0,
  stagger = false,
  threshold = 0.1,
}) => {
  const { ref, isInView } = useScrollAnimation({ threshold });

  const variants = stagger ? staggerContainerVariants : fadeInUpVariants;

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
      {...createViewportAnimation(threshold)}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
