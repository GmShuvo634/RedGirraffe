import { ArrowRightIcon, MenuIcon, Volume2, VolumeX, Maximize } from "lucide-react";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";
import { AnimatedSection, AnimatedText, AnimatedButton } from "../../../../components/animations";
import {
  fadeInUpVariants,
  slideInLeftVariants,
  slideInRightVariants,
  staggerContainerVariants,
  buttonVariants,
  durations,
  easings
} from "../../../../utils/animations";

export const HeroSection = (): JSX.Element => {
  // Navigation menu items with their corresponding section IDs
  const navItems = [
    { label: "Features", sectionId: "features" },
    { label: "Industries", sectionId: "industries" },
    { label: "How It Works", sectionId: "how-it-works" },
    { label: "Pricing", sectionId: "pricing" },
    { label: "Contact", sectionId: "contact" },
  ];

  // Smooth scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Video player state
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-40 pb-8 sm:pb-12 lg:pb-16 xl:pb-[120px]">
      {/* Navigation Bar - Sticky */}
      <div className="sticky top-0 z-50 flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 xl:px-20 bg-white/95 backdrop-blur-sm border-b border-[#ebebeb]/50">
        <div className="flex h-16 sm:h-16 lg:h-20 items-center justify-between w-full max-w-7xl py-4 sm:py-4 lg:py-6 border-b border-[#ebebeb]">
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

      {/* Mobile Navigation Menu */}
      {showMobileMenu && (
        <motion.div
          className="lg:hidden w-full bg-white border-b border-[#ebebeb] px-4 py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
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
                transition={{ delay: index * 0.1 }}
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

      {/* Hero Content */}
      <div className="flex flex-col xl:flex-row mt-16 md:mt-0 items-center gap-6 sm:gap-8 lg:gap-10 xl:gap-20 px-4 sm:px-6 lg:px-8 xl:px-0 w-full max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="flex flex-col w-full xl:w-[560px] items-center gap-6 sm:gap-8 lg:gap-10 xl:gap-[60px] relative bg-white">
          {/* Hero Text Content */}
          <motion.div
            className="flex flex-col place-items-center xl:place-items-start gap-4 lg:gap-5 w-full"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Toggle Group */}
            <motion.div variants={fadeInUpVariants}>
              <ToggleGroup
                type="single"
                defaultValue="commercial"
                className="bg-[#e5e9ec] rounded-[40px] p-1 w-fit"
              >
                <ToggleGroupItem
                  value="commercial"
                  className="bg-abu-bg rounded-[32px] px-4 sm:px-4 lg:px-[15px] py-2 data-[state=on]:bg-abu-bg data-[state=off]:bg-transparent text-sm lg:text-base touch-manipulation"
                >
                  <span className="font-h6-h6-semibold text-[#1a3c34] text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]">
                    Commercial
                  </span>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="platforms"
                  className="px-4 sm:px-4 lg:px-[15px] py-2 data-[state=on]:bg-abu-bg data-[state=off]:bg-transparent text-sm lg:text-base touch-manipulation"
                >
                  <span className="font-h6-h6-semibold text-[#1a3c34] text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]">
                    Platforms
                  </span>
                </ToggleGroupItem>
              </ToggleGroup>
            </motion.div>

            {/* Heading - Mobile optimized with animation */}
            <motion.h1
              className="responsive-h1 font-h1-h1-semibold text-app-primary tracking-[var(--h1-h1-semibold-letter-spacing)] xl:text-left text-center w-full"
              variants={fadeInUpVariants}
            >
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: durations.slow, ease: easings.smooth, delay: 0.3 }}
              >
                RedGirraffe
              </motion.span>{" "}
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: durations.slow, ease: easings.smooth, delay: 0.5 }}
              >
                Global Commercial Card
              </motion.span>
            </motion.h1>

            {/* Subheading - Mobile optimized with animation */}
            <motion.p
              className="responsive-body font-body-large-body-large-semibold text-app-secondary tracking-[var(--body-large-body-large-semibold-letter-spacing)] xl:text-left text-center w-full"
              variants={fadeInUpVariants}
            >
              Simplify payments, reduce costs, and unlock smarter cash flow with
              seamless recurring payouts in 97+ countries.
            </motion.p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="flex flex-col items-center justify-center gap-4 lg:gap-5 w-full"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* CTA Buttons - Mobile stacked with animations */}
            <motion.div
              className="flex flex-col sm:flex-col lg:flex-row items-stretch spacing-mobile w-full"
              variants={fadeInUpVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="mobile-lg"
                  className="w-full lg:w-[200px] xl:w-[270px] bg-app-primary rounded-[48px] flex items-center justify-center gap-3"
                  onClick={() => scrollToSection("contact")}
                >
                  <ArrowRightIcon className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  <span className="font-h6-h6-semibold text-white tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]">
                    Request a Demo
                  </span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="mobile-lg"
                  className="w-full lg:w-[200px] xl:w-[270px] bg-[#4a8b7b] rounded-[48px] flex items-center justify-center gap-3"
                  onClick={() => scrollToSection("contact")}
                >
                  <ArrowRightIcon className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  <span className="font-h6-h6-semibold text-white tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]">
                    Contact Sales
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats with animation */}
            <motion.p
              className="w-full text-center font-h6-h6-regular text-text text-base lg:text-base xl:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)]"
              variants={fadeInUpVariants}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: durations.normal, ease: easings.gentle, delay: 0.8 }}
                className="font-bold text-app-primary"
              >
                $20B+
              </motion.span>{" "}
              processed annually
            </motion.p>
          </motion.div>

          {/* Tooltip - Hidden on mobile */}
          <div className="block absolute md:w-[163px] w-[120px] md:h-[45px] h-[30px] md:top-[-45px] top-[-45px] md:left-[260px] left-[230px]">
            <div className="relative h-[45px]">
              <Card className="inline-flex items-center justify-center gap-2.5 px-3.5 py-1 absolute top-0 left-[31px] bg-[#00d959] rounded-[55px] overflow-hidden border-none">
                <span className="font-body-large-body-large-regular text-[#1b1b1b] text-[length:var(--body-large-body-large-regular-font-size)] text-center tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-[var(--body-large-body-large-regular-line-height)] whitespace-nowrap text-sm sm:text-base ">
                  Click to change
                </span>
              </Card>
              <img
                className="absolute w-8 h-8 top-[13px] left-0"
                alt="Cursor"
                src="/fluent_cursor-20-filled.svg"
              />
            </div>
          </div>
        </div>

        {/* Hero Video Player - Mobile optimized with custom controls */}
        <motion.div
          className="w-full xl:w-auto flex justify-center mt-4 sm:mt-6 lg:mt-0"
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: durations.slower,
            ease: easings.gentle,
            delay: 0.6
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: durations.fast, ease: easings.smooth }
          }}
        >
          <div
            className="relative w-full max-w-[640px] group"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
            onTouchStart={() => setShowControls(true)}
            onTouchEnd={() => setTimeout(() => setShowControls(false), 3000)}
          >
            <motion.video
              ref={videoRef}
              className="w-full h-auto aspect-video object-cover rounded-[10px] shadow-2xl"
              autoPlay
              loop
              muted
              playsInline
              src="/hero-video.mp4"
            />

            {/* Custom Video Controls */}
            <motion.div
              className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: showControls ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Mute/Unmute Button */}
              <motion.button
                onClick={toggleMute}
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-black/70 hover:bg-black/90 rounded-full backdrop-blur-sm transition-all duration-200 touch-manipulation"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                ) : (
                  <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                )}
              </motion.button>

              {/* Fullscreen Button */}
              <motion.button
                onClick={toggleFullscreen}
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-black/70 hover:bg-black/90 rounded-full backdrop-blur-sm transition-all duration-200 touch-manipulation"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle fullscreen"
              >
                <Maximize className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};