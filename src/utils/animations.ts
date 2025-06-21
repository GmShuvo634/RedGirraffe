import { Variants } from "framer-motion";

// Modern easing curves for silky smooth animations
export const easings = {
  smooth: [0.25, 0.1, 0.25, 1],
  snappy: [0.4, 0, 0.2, 1],
  bouncy: [0.68, -0.55, 0.265, 1.55],
  elastic: [0.175, 0.885, 0.32, 1.275],
  gentle: [0.25, 0.46, 0.45, 0.94],
} as const;

// Animation durations for consistency
export const durations = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  slower: 1.2,
} as const;

// Stagger delays for synchronized animations
export const staggerDelays = {
  fast: 0.1,
  normal: 0.15,
  slow: 0.2,
  slower: 0.3,
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
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.gentle,
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

// Stagger container variants
export const staggerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelays.normal,
      delayChildren: 0.1,
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
      delayChildren: 0.05,
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
    scale: 1,
    transition: {
      duration: durations.fast,
      ease: easings.smooth,
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
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
