import React from "react";
import { motion } from "framer-motion";
import { useScrollTriggeredCountUp } from "../../hooks/useCountUp";
import { durations, easings } from "../../utils/animations";

interface CountUpTextProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  separator?: string;
  className?: string;
  threshold?: number;
  children?: React.ReactNode;
  preserveValue?: boolean;
  animationDelay?: number;
}

export const CountUpText: React.FC<CountUpTextProps> = ({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  decimals = 0,
  suffix = "",
  prefix = "",
  separator = "",
  className = "",
  threshold = 0.3,
  preserveValue = false,
  animationDelay = 0,
}) => {
  const { ref, value, isAnimating, isInView } = useScrollTriggeredCountUp(
    {
      end,
      start,
      duration,
      delay,
      decimals,
      suffix,
      prefix,
      separator,
      preserveValue,
    },
    threshold
  );

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{
        duration: durations.slow,
        ease: easings.bouncy,
        delay: animationDelay,
      }}
    >
      {value}
    </motion.span>
  );
};

export default CountUpText;
