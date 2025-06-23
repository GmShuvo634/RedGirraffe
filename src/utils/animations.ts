import { Variants } from "framer-motion";

// Modern easing curves for silky smooth animations
export const easings = {
  smooth: [0.25, 0.1, 0.25, 1],
  snappy: [0.4, 0, 0.2, 1],
  bouncy: [0.68, -0.55, 0.265, 1.55],
  elastic: [0.175, 0.885, 0.32, 1.275],
  gentle: [0.25, 0.46, 0.45, 0.94],
} as const;

// Animation durations for consistency - Faster timing
export const durations = {
  fast: 0.2,
  normal: 0.35,
  slow: 0.5,
  slower: 0.7,
} as const;

// Stagger delays for synchronized animations - Faster staggering
export const staggerDelays = {
  fast: 0.05,
  normal: 0.08,
  slow: 0.12,
  slower: 0.15,
} as const;

// Global section timing for synchronized animations
export const sectionTimings = {
  hero: 0,
  layout: 0.1,
  mainContent: 0.2,
  content: 0.3,
  industries: 0.4,
  features: 0.5,
  testimonials: 0.6,
  pricing: 0.7,
  contact: 0.8,
  footer: 0.9,
} as const;

// Fade in animations
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
};

export const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
};

export const fadeInDownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
};

// Slide animations
export const slideInLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    },
  },
};

export const slideInRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    },
  },
};

// Scale animations
export const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: easings.gentle,
    },
  },
};

export const scaleUpVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    },
  },
};

// Stagger container variants - Faster synchronized timing
export const staggerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelays.fast,
      delayChildren: 0.05,
    },
  },
};

export const staggerFastContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelays.fast,
      delayChildren: 0.02,
    },
  },
};

export const staggerSlowContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelays.slow,
      delayChildren: 0.2,
    },
  },
};

// Hover animations
export const hoverLiftVariants: Variants = {
  rest: {
    y: 0,
    transition: {
      duration: durations.fast,
      ease: easings.smooth,
    },
  },
  hover: {
    y: -8,
    transition: {
      duration: durations.fast,
      ease: easings.smooth,
    },
  },
};

export const hoverScaleVariants: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: durations.fast,
      ease: easings.smooth,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: durations.fast,
      ease: easings.smooth,
    },
  },
};

export const hoverGlowVariants: Variants = {
  rest: {
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: durations.fast,
      ease: easings.smooth,
    },
  },
  hover: {
    boxShadow: "0 20px 40px rgba(74, 139, 123, 0.3)",
    transition: {
      duration: durations.fast,
      ease: easings.smooth,
    },
  },
};

// Text animations
export const textRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
};

export const textStaggerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// Button animations
export const buttonVariants: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: durations.fast,
      ease: easings.smooth,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: durations.fast,
      ease: easings.smooth,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: easings.snappy,
    },
  },
};

// Card animations
export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: easings.gentle,
    },
  },
  hover: {
    y: -12,
    scale: 1.02,
    transition: {
      duration: durations.fast,
      ease: easings.smooth,
    },
  },
};

// Page transition variants
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    },
  },
  out: {
    opacity: 0,
    y: -20,
    transition: {
      duration: durations.fast,
      ease: easings.smooth,
    },
  },
};

// Utility function to create custom stagger delays
export const createStaggerDelay = (index: number, baseDelay: number = staggerDelays.normal) => ({
  delay: index * baseDelay,
});

// Utility function to create viewport-based animations
export const createViewportAnimation = (threshold: number = 0.1, once: boolean = true) => ({
  viewport: { once, amount: threshold },
});

// Synchronized section animation variants
export const createSectionVariants = (sectionKey: keyof typeof sectionTimings): Variants => ({
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
      delay: sectionTimings[sectionKey],
    },
  },
});

// Fast synchronized stagger container for sections
export const createSectionStaggerVariants = (sectionKey: keyof typeof sectionTimings): Variants => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelays.fast,
      delayChildren: sectionTimings[sectionKey] + 0.1,
    },
  },
});

// Utility to create synchronized delays for elements within sections
export const createSynchronizedDelay = (
  sectionKey: keyof typeof sectionTimings,
  elementIndex: number = 0,
  baseDelay: number = 0
) => {
  return sectionTimings[sectionKey] + baseDelay + (elementIndex * staggerDelays.fast);
};
