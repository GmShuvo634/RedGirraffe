import { motion } from "framer-motion";
import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  cardVariants,
  hoverLiftVariants,
  hoverGlowVariants,
} from "../../utils/animations";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: "lift" | "scale" | "glow" | "none";
  threshold?: number;
  index?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = "",
  delay = 0,
  hoverEffect = "lift",
  threshold = 0.1,
  index = 0,
}) => {
  const { ref, isInView } = useScrollAnimation({ threshold });

  const getHoverVariants = () => {
    switch (hoverEffect) {
      case "lift":
        return {
          rest: {
            y: 0,
            transition: {
              duration: 0.2,
              ease: "easeOut",
            },
          },
          hover: {
            y: -8,
            transition: {
              duration: 0.2,
              ease: "easeOut",
            },
          },
        };
      case "glow":
        return hoverGlowVariants;
      case "scale":
        return {}; // Remove scaling effect
      default:
        return {};
    }
  };

  const animationDelay = delay + index * 0.1;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      transition={{ delay: animationDelay }}
      whileHover={hoverEffect !== "none" ? "hover" : undefined}
      {...(hoverEffect !== "none" && { variants: getHoverVariants() })}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
