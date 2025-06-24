import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface UseCountUpOptions {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  separator?: string;
  preserveValue?: boolean;
  easingFn?: (t: number) => number;
}

interface UseCountUpReturn {
  value: string;
  isAnimating: boolean;
  reset: () => void;
}

// Easing functions
const easingFunctions = {
  linear: (t: number) => t,
  easeOut: (t: number) => 1 - Math.pow(1 - t, 3),
  easeInOut: (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  easeOutQuart: (t: number) => 1 - Math.pow(1 - t, 4),
};

export const useCountUp = ({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  decimals = 0,
  suffix = "",
  prefix = "",
  separator = "",
  preserveValue = false,
  easingFn = easingFunctions.easeOutQuart,
}: UseCountUpOptions): UseCountUpReturn => {
  const [value, setValue] = useState<string>(
    formatNumber(preserveValue ? end : start, decimals, suffix, prefix, separator)
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const hasStartedRef = useRef(false);

  // Format number with separators, decimals, prefix, and suffix
  function formatNumber(
    num: number,
    decimals: number,
    suffix: string,
    prefix: string,
    separator: string
  ): string {
    const fixedNum = num.toFixed(decimals);
    const parts = fixedNum.split(".");
    
    // Add thousand separators if specified
    if (separator) {
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    }
    
    const formattedNum = parts.join(".");
    return `${prefix}${formattedNum}${suffix}`;
  }

  // Animation function
  const animate = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easingFn(progress);
    
    const currentValue = start + (end - start) * easedProgress;
    setValue(formatNumber(currentValue, decimals, suffix, prefix, separator));

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      setIsAnimating(false);
      hasStartedRef.current = true;
    }
  };

  // Start animation
  const startAnimation = () => {
    if (hasStartedRef.current && preserveValue) return;
    
    setIsAnimating(true);
    startTimeRef.current = undefined;
    
    const startAnimationWithDelay = () => {
      animationRef.current = requestAnimationFrame(animate);
    };

    if (delay > 0) {
      setTimeout(startAnimationWithDelay, delay);
    } else {
      startAnimationWithDelay();
    }
  };

  // Reset animation
  const reset = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    hasStartedRef.current = false;
    setIsAnimating(false);
    setValue(formatNumber(start, decimals, suffix, prefix, separator));
    startTimeRef.current = undefined;
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return {
    value,
    isAnimating,
    reset,
    startAnimation,
  } as UseCountUpReturn & { startAnimation: () => void };
};

// Hook that combines countup with scroll-triggered animation
export const useScrollTriggeredCountUp = (
  options: UseCountUpOptions,
  threshold: number = 0.3
) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const countUp = useCountUp(options);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    if (isInView && !hasTriggeredRef.current) {
      hasTriggeredRef.current = true;
      (countUp as any).startAnimation();
    }
  }, [isInView, countUp]);

  return {
    ref,
    ...countUp,
    isInView,
  };
};

export default useCountUp;
