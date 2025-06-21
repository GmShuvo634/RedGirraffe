import { motion } from "framer-motion";
import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  staggerContainerVariants,
  staggerFastContainerVariants,
  staggerSlowContainerVariants,
  fadeInVariants,
} from "../../utils/animations";

interface StaggeredGridProps {
  children: React.ReactNode;
  className?: string;
  speed?: "fast" | "normal" | "slow";
  threshold?: number;
  delay?: number;
}

export const StaggeredGrid: React.FC<StaggeredGridProps> = ({
  children,
  className = "",
  speed = "normal",
  threshold = 0.1,
  delay = 0,
}) => {
  const { ref, isInView } = useScrollAnimation({ threshold });

  const getContainerVariants = () => {
    switch (speed) {
      case "fast":
        return staggerFastContainerVariants;
      case "slow":
        return staggerSlowContainerVariants;
      default:
        return staggerContainerVariants;
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getContainerVariants()}
      transition={{ delay }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={fadeInVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredGrid;
