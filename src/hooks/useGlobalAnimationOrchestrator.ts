import { useState, useEffect } from "react";
import { useScrollAnimation } from "./useScrollAnimation";
import { sectionTimings, durations, staggerDelays } from "../utils/animations";

interface UseGlobalAnimationOrchestratorOptions {
  sectionKey: keyof typeof sectionTimings;
  threshold?: number;
  triggerOnce?: boolean;
}

export const useGlobalAnimationOrchestrator = (
  options: UseGlobalAnimationOrchestratorOptions
) => {
  const { sectionKey, threshold = 0.1, triggerOnce = true } = options;
  
  const { ref, isInView } = useScrollAnimation({
    threshold,
    triggerOnce,
  });

  // Calculate synchronized timing for this section
  const sectionDelay = sectionTimings[sectionKey];
  
  // Create synchronized delays for elements within the section
  const createElementDelay = (elementIndex: number = 0, baseDelay: number = 0) => {
    return sectionDelay + baseDelay + (elementIndex * staggerDelays.fast);
  };

  // Create stagger container timing
  const staggerContainerTiming = {
    staggerChildren: staggerDelays.fast,
    delayChildren: sectionDelay + 0.05,
  };

  // Fast stagger timing for grids and lists
  const fastStaggerTiming = {
    staggerChildren: staggerDelays.fast,
    delayChildren: sectionDelay + 0.02,
  };

  return {
    ref,
    isInView,
    sectionDelay,
    createElementDelay,
    staggerContainerTiming,
    fastStaggerTiming,
    // Pre-calculated common delays
    headerDelay: createElementDelay(0, 0.1),
    contentDelay: createElementDelay(1, 0.1),
    cardsDelay: createElementDelay(2, 0.15),
    buttonDelay: createElementDelay(3, 0.2),
  };
};

// Hook for synchronized card animations
export const useSynchronizedCardAnimation = (
  sectionKey: keyof typeof sectionTimings,
  cardIndex: number,
  baseDelay: number = 0.2
) => {
  const delay = sectionTimings[sectionKey] + baseDelay + (cardIndex * staggerDelays.fast);
  
  return {
    delay,
    variants: {
      hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: durations.normal,
          ease: [0.25, 0.1, 0.25, 1],
          delay,
        },
      },
    },
  };
};

// Hook for synchronized text animations
export const useSynchronizedTextAnimation = (
  sectionKey: keyof typeof sectionTimings,
  textIndex: number = 0,
  baseDelay: number = 0.1
) => {
  const delay = sectionTimings[sectionKey] + baseDelay + (textIndex * staggerDelays.fast);
  
  return {
    delay,
    variants: {
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: durations.fast,
          ease: [0.25, 0.1, 0.25, 1],
          delay,
        },
      },
    },
  };
};

export default useGlobalAnimationOrchestrator;
