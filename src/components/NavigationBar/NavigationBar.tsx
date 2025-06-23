import { MenuIcon } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import {
  durations,
  easings,
} from "../../utils/animations";

export interface NavigationItem {
  label: string;
  sectionId: string;
}

interface NavigationBarProps {
  navItems: NavigationItem[];
  onNavigate?: (sectionId: string) => void;
  className?: string;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  navItems,
  onNavigate,
  className = "",
}) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Smooth scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Call optional callback
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  return (
    <>
      {/* Navigation Bar - Sticky */}
      <div className={`sticky top-0 z-50 flex items-center justify-center w-full bg-white/95 backdrop-blur-sm border-b border-[#ebebeb]/50 ${className}`}>
        <div className="container-inner">
          <div className="flex h-16 sm:h-16 lg:h-20 items-center justify-between w-full py-4 sm:py-4 lg:py-6 border-b border-[#ebebeb]">
            <div className="flex items-center gap-4 lg:gap-12 xl:gap-20">
              {/* Logo */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative w-8 h-8 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-[#00d959] rounded overflow-hidden">
                  <img
                    className="absolute w-full h-full top-0 left-0 object-cover"
                    alt="Logo"
                    src="/logo.png"
                  />
                </div>
                <div className="font-h5-h5-bold text-black text-lg sm:text-lg lg:text-xl xl:text-[length:var(--h5-h5-bold-font-size)] leading-tight tracking-[var(--h5-h5-bold-letter-spacing)]">
                  RedGirraffe
                </div>
              </div>

              {/* Navigation Links - Hidden on mobile and tablet */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-10">
                {navItems.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="p-0 h-auto hover:bg-transparent touch-manipulation"
                    onClick={() => scrollToSection(item.sectionId)}
                  >
                    <div className="font-body-large-body-large-semibold text-text text-sm lg:text-base xl:text-[length:var(--body-large-body-large-semibold-font-size)] text-center tracking-[var(--body-large-body-large-semibold-letter-spacing)] leading-[var(--body-large-body-large-semibold-line-height)] hover:text-app-primary transition-colors cursor-pointer">
                      {item.label}
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 xl:gap-3">
              {/* Mobile Menu Button - Show only on mobile */}
              <Button
                variant="ghost"
                className="block lg:hidden w-10 h-10 p-2 touch-manipulation"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <MenuIcon className="w-6 h-6 text-black" />
              </Button>

              {/* Desktop Buttons - Hidden on mobile */}
              <div className="hidden lg:flex items-center gap-2 xl:gap-3">
                <Button
                  variant="outline"
                  className="w-20 sm:w-20 lg:w-24 xl:w-[110px] h-10 sm:h-10 lg:h-10 px-3 sm:px-3 lg:px-6 py-2 lg:py-3 rounded-[64px] border border-solid border-[#ebebeb] text-sm touch-manipulation"
                >
                  <span className="font-body-medium-body-medium-regular text-black text-center tracking-[var(--body-medium-body-medium-regular-letter-spacing)] leading-[var(--body-medium-body-medium-regular-line-height)]">
                    Get Demo
                  </span>
                </Button>
                <Button className="w-16 sm:w-16 lg:w-20 xl:w-[110px] h-10 sm:h-10 lg:h-10 px-3 sm:px-3 lg:px-6 py-2 lg:py-3 bg-[#1a3c34] rounded-[64px] text-sm touch-manipulation">
                  <span className="font-body-medium-body-medium-regular text-white tracking-[var(--body-medium-body-medium-regular-letter-spacing)] leading-[var(--body-medium-body-medium-regular-line-height)]">
                    Login
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            className="lg:hidden w-full bg-white border-b border-[#ebebeb] px-4 py-4 sticky top-[80px] z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: durations.fast }}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    scrollToSection(item.sectionId);
                    setShowMobileMenu(false);
                  }}
                  className="text-left py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors touch-manipulation"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: durations.fast,
                    ease: easings.smooth,
                    delay: index * 0.05,
                  }}
                >
                  <span className="font-body-large-body-large-semibold text-text text-base hover:text-app-primary transition-colors">
                    {item.label}
                  </span>
                </motion.button>
              ))}

              {/* Mobile Action Buttons */}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-[#ebebeb]">
                <Button
                  variant="outline"
                  className="w-full h-12 rounded-[64px] border border-solid border-[#ebebeb] touch-manipulation"
                >
                  <span className="font-body-medium-body-medium-regular text-black">
                    Get Demo
                  </span>
                </Button>
                <Button className="w-full h-12 bg-[#1a3c34] rounded-[64px] touch-manipulation">
                  <span className="font-body-medium-body-medium-regular text-white">
                    Login
                  </span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
