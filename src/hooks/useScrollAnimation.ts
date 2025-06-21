import { useInView } from "framer-motion";
import { useRef } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  margin?: string;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    margin = "0px 0px -100px 0px",
  } = options;

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: triggerOnce,
    amount: threshold,
    margin,
  });

  return { ref, isInView };
};

export const useStaggeredScrollAnimation = (
  itemCount: number,
  options: UseScrollAnimationOptions = {}
) => {
  const { ref, isInView } = useScrollAnimation(options);

  const getItemDelay = (index: number, baseDelay: number = 0.1) => {
    return isInView ? index * baseDelay : 0;
  };

  return { ref, isInView, getItemDelay };
};

// Hook for parallax scroll effects
export const useParallaxScroll = (speed: number = 0.5) => {
  const ref = useRef(null);

  return {
    ref,
    style: {
      transform: `translateY(${speed * 100}%)`,
    },
  };
};

// Hook for scroll-triggered animations with custom delays
export const useDelayedScrollAnimation = (
  delay: number = 0,
  options: UseScrollAnimationOptions = {}
) => {
  const { ref, isInView } = useScrollAnimation(options);

  return {
    ref,
    isInView,
    animationDelay: isInView ? delay : 0,
  };
};

// Legacy compatibility
export const useStaggeredAnimation = useStaggeredScrollAnimation;
