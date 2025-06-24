import {
  Volume2,
  VolumeX,
  Maximize,
} from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card } from "../../../../components/ui/card";
import { GradientText } from "../../../../components/ui/GradientText";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

import { PrimaryActionButton, SecondaryActionButton } from "../../../../components/buttons";
import { CountUpText } from "../../../../components/animations";
import {
  fadeInUpVariants,
  staggerContainerVariants,
  durations,
  easings,
} from "../../../../utils/animations";
import { useGlobalAnimationOrchestrator } from "../../../../hooks/useGlobalAnimationOrchestrator";

export const HeroSection = (): JSX.Element => {
  // Synchronized animation orchestrator for hero section
  const { createElementDelay } = useGlobalAnimationOrchestrator({
    sectionKey: "hero",
    threshold: 0.1,
  });

  // Video player state
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
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
    <div className="flex flex-col w-full gap-8 sm:gap-12 lg:gap-16 xl:gap-40 pb-8 sm:pb-12 lg:pb-16 xl:pb-[120px] mt-0 lg:mt-[120px]">

      {/* Hero Content */}
      <div className="container-inner">
        <div className="flex flex-col lg:flex-row mt-16 md:mt-0 items-center justify-between gap-6 sm:gap-8 lg:gap-12 xl:gap-28 w-full">
          {/* Left Content */}
          <div className="flex flex-col lg:w-1/3 w-full xl:w-[560px] items-center gap-6 sm:gap-8 lg:gap-10 xl:gap-[60px] relative bg-white">
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

              {/* Heading - Mobile optimized with animation and gradient effect */}
              <GradientText
                as="h1"
                className="responsive-h1 font-h1-h1-semibold tracking-[var(--h1-h1-semibold-letter-spacing)] xl:text-left text-center w-full"
                useCSS={true}
              >
                <motion.div variants={fadeInUpVariants}>
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: durations.normal,
                      ease: easings.smooth,
                      delay: createElementDelay(0, 0.1),
                    }}
                  >
                    RedGirraffe Global
                  </motion.span>{" "}
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: durations.normal,
                      ease: easings.smooth,
                      delay: createElementDelay(1, 0.1),
                    }}
                  >
                    Commercial Card
                  </motion.span>
                </motion.div>
              </GradientText>

              {/* Subheading - Mobile optimized with animation */}
              <motion.p
                className="responsive-body font-body-large-body-large-semibold text-app-secondary tracking-[var(--body-large-body-large-semibold-letter-spacing)] xl:text-left text-center w-full"
                variants={fadeInUpVariants}
              >
                Simplify payments, reduce costs, and unlock smarter cash flow
                with seamless recurring payouts in 97+ countries.
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
                <PrimaryActionButton
                  // onClick={() => scrollToSection("contact")}
                  size="mobile-lg"
                >
                  Request a Demo
                </PrimaryActionButton>

                <SecondaryActionButton
                  // onClick={() => scrollToSection("contact")}
                  size="mobile-lg"
                >
                  Contact Sales
                </SecondaryActionButton>
              </motion.div>

              {/* Stats with animation */}
              <motion.p
                className="w-full text-center font-h6-h6-regular text-text text-base lg:text-base xl:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)]"
                variants={fadeInUpVariants}
              >
                <CountUpText
                  end={20}
                  start={0}
                  duration={2000}
                  delay={100}
                  prefix="$"
                  suffix="B+"
                  className="font-bold text-app-primary"
                  threshold={0.3}
                  animationDelay={createElementDelay(3, 0.2)}
                />{" "}
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
            className="w-full flex justify-center mt-4 sm:mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: durations.normal,
              ease: easings.gentle,
              delay: createElementDelay(2, 0.15),
            }}
            whileHover={{
              transition: { duration: durations.fast, ease: easings.smooth },
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
                  whileHover={{ opacity: 0.8 }}
                  whileTap={{ opacity: 1 }}
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
                  whileHover={{ opacity: 0.8 }}
                  whileTap={{ opacity: 1 }}
                  aria-label="Toggle fullscreen"
                >
                  <Maximize className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
