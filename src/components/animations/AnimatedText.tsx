import { motion } from "framer-motion";
import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  textRevealVariants,
  textStaggerVariants,
  fadeInUpVariants,
} from "../../utils/animations";

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "reveal" | "stagger" | "fadeUp";
  delay?: number;
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className = "",
  variant = "reveal",
  delay = 0,
  threshold = 0.1,
  as: Component = "div",
}) => {
  const { ref, isInView } = useScrollAnimation({ threshold });

  const getVariants = () => {
    switch (variant) {
      case "stagger":
        return textStaggerVariants;
      case "fadeUp":
        return fadeInUpVariants;
      default:
        return textRevealVariants;
    }
  };

  const MotionComponent = motion[Component as keyof typeof motion] as any;

  return (
    <MotionComponent
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      transition={{ delay }}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedText;
