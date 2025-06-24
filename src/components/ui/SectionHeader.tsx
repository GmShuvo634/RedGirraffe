import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { AnimatedText } from "../animations";
import {
  durations,
  easings,
} from "../../utils/animations";

interface SectionHeaderProps {
  title: string;
  highlightedText?: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  highlightClassName?: string;
  highlightBackground?: string;
  textAlign?: "left" | "center" | "right";
  delay?: number;
  threshold?: number;
  maxWidth?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  highlightedText,
  subtitle,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  highlightClassName = "",
  highlightBackground = "#6CC832",
  textAlign = "center",
  delay = 0.1,
  threshold = 0.3,
  maxWidth = "4xl",
  as = "h2",
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const defaultTitleClasses = "font-h3-h3-semibold text-[#1a3c34] text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[length:var(--h3-h3-semibold-font-size)] tracking-[var(--h3-h3-semibold-letter-spacing)] leading-tight xl:leading-[var(--h3-h3-semibold-line-height)]";
  
  const defaultSubtitleClasses = "font-h6-h6-regular text-[#4a8b7b] text-base sm:text-base lg:text-lg xl:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)]";

  const defaultHighlightClasses = "inline-block px-3 py-1 rounded-md text-white font-semibold";

  return (
    <motion.div
      className={cn(
        "flex flex-col gap-4 sm:gap-5 w-full",
        `max-w-${maxWidth}`,
        alignmentClasses[textAlign],
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: durations.normal,
        ease: easings.smooth,
        delay,
      }}
      viewport={{ once: true, amount: threshold }}
    >
      {/* Main Title with Optional Highlighted Text */}
      <div className={cn("w-full", alignmentClasses[textAlign])}>
        <AnimatedText
          as={as}
          variant="fadeUp"
          className={cn(defaultTitleClasses, titleClassName)}
          delay={delay + 0.1}
          threshold={threshold}
        >
          {title}
          {highlightedText && (
            <>
              <span
                className={cn(defaultHighlightClasses, highlightClassName)}
                style={{ color: highlightBackground }}
              >
                {highlightedText}
              </span>
            </>
          )}
        </AnimatedText>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <div className={cn("w-full px-4 sm:px-6 lg:px-10", alignmentClasses[textAlign])}>
          <AnimatedText
            as="p"
            variant="fadeUp"
            className={cn(defaultSubtitleClasses, subtitleClassName)}
            delay={delay + 0.3}
            threshold={threshold}
          >
            {subtitle}
          </AnimatedText>
        </div>
      )}
    </motion.div>
  );
};

export default SectionHeader;
