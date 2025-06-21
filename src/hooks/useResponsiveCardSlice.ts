import { useState, useEffect } from "react";

/**
 * Custom hook for responsive card slicing based on screen size
 * Returns true if the screen is mobile (768px or smaller)
 * 
 * Usage:
 * const isMobile = useResponsiveCardSlice();
 * const cardsToShow = isMobile ? 7 : 6;
 */
export const useResponsiveCardSlice = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on mount
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

/**
 * Custom hook that returns the number of cards to display based on screen size
 * 
 * @param mobileCount - Number of cards to show on mobile (default: 7)
 * @param desktopCount - Number of cards to show on desktop (default: 6)
 * @returns Number of cards to display
 */
export const useResponsiveCardCount = (mobileCount: number = 7, desktopCount: number = 6) => {
  const isMobile = useResponsiveCardSlice();
  return isMobile ? mobileCount : desktopCount;
};

export default useResponsiveCardSlice;
