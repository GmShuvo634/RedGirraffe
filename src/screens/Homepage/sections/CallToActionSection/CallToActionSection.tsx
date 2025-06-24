import { ArrowRightIcon, CheckIcon } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { SectionHeader } from "../../../../components/ui";
import { AnimatedCard, StaggeredGrid } from "../../../../components/animations";
import { durations, easings } from "../../../../utils/animations";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { useResponsiveCardSlice } from "../../../../hooks/useResponsiveCardSlice";
import {
  PrimaryActionButton,
  SecondaryActionButton,
} from "../../../../components/buttons";

// Data for the cards
const pricingCards = [
  {
    title: "Bank Partnership",
    description:
      "Reach out to RedGirraffe to engage in the B2B high-value global product partnership",
    features: [
      "Existing banking relationship",
      "Negotiated commercial rates",
      "Regulatory compliance",
    ],
    buttonText: "Request a Demo",
    variant: "white",
  },
  {
    title: "Pay-pulse Commercial",
    description:
      "High-value recurring payment capability across all major global payment networks",
    features: [
      "Partnered with leading global payment rails",
      "Compliance managed by world-class PSPs",
      "Alternative Payment Methods",
      "97+ Country Coverage",
    ],
    buttonText: "Request a Demo",
    variant: "green",
  },
  {
    title: "Authorised PSPs",
    description:
      "Partner with RedGirraffe to unlock large-scale high-value recurring product across geographies where you operate",
    features: [
      "Tier 1 PSPs only",
      "Competitive interchange",
      "Local market expertise",
    ],
    buttonText: "Request a Demo",
    variant: "white",
  },
];

export const CallToActionSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useResponsiveCardSlice();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % pricingCards.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + pricingCards.length) % pricingCards.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <section className="bg-[#e0eae8] w-full pt-16 lg:pt-20 pb-16 lg:pb-20 px-6 sm:px-6 lg:px-[60px] rounded-md">
      <div className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-[60px] w-full">
        {/* Heading and description */}
        <SectionHeader
          title="RedGirraffe Global Commercial Card"
          highlightedText="Pricing"
          subtitle="Pricing is subject to a commercial arrangement between your bank and RedGirraffe or its authorised PSPs. Please contact your commercial bank to confirm your RedGirraffe Pay-Pulse Commercial Credit Card high value recurring rates on Visa, MasterCard & other leading global Payment Networks."
          delay={0.1}
          threshold={0.3}
        />

        {/* Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-4 w-full max-w-[600px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: durations.normal,
            ease: easings.smooth,
            delay: 0.6,
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <PrimaryActionButton
            size="mobile-lg"
            className="w-full max-w-[280px]"
          >
            Request a Demo
          </PrimaryActionButton>

          <SecondaryActionButton
            size="mobile-lg"
            className="w-full max-w-[280px]"
          >
            Contact Sales
          </SecondaryActionButton>
        </motion.div>

        {/* Pricing cards - Mobile Slider / Desktop Grid */}
        {isMobile ? (
          <div className="w-full">
            {/* Mobile Slider */}
            <div className="relative w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="w-full"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_: any, { offset, velocity }: any) => {
                    const swipe = Math.abs(offset.x) * velocity.x;

                    if (swipe < -10000) {
                      nextSlide();
                    } else if (swipe > 10000) {
                      prevSlide();
                    }
                  }}
                >
                  <Card
                    className={`flex flex-col gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10 rounded-xl border ${
                      pricingCards[currentSlide].variant === "white"
                        ? "bg-white border-[#ebebeb]"
                        : "[background:url(../frame-1455.png)_50%_50%_/_cover,linear-gradient(30deg,rgba(8,43,36,1)_0%,rgba(16,84,71,0.7)_100%)]"
                    } shadow-[8px_12px_20px_#00000014] touch-manipulation`}
                  >
                    <CardHeader className="p-0">
                      <CardTitle
                        className={`font-h6-h6-semibold text-black text-lg sm:text-xl lg:text-lg xl:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)] ${
                          pricingCards[currentSlide].variant === "white"
                            ? "text-black"
                            : "text-white"
                        }`}
                      >
                        {pricingCards[currentSlide].title}
                      </CardTitle>
                      <p
                        className={`mt-2 sm:mt-5 font-body-large-body-large-regular text-sm sm:text-base lg:text-base xl:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-large-body-large-regular-line-height)] ${
                          pricingCards[currentSlide].variant === "white"
                            ? "text-text"
                            : "text-[#dbf0e4]"
                        }`}
                      >
                        {pricingCards[currentSlide].description}
                      </p>
                    </CardHeader>

                    <Separator className="h-px w-full" />

                    <CardContent className="p-0 flex flex-col gap-3">
                      {pricingCards[currentSlide].features.map(
                        (feature, idx) => (
                          <div
                            key={idx}
                            className="inline-flex items-center gap-3"
                          >
                            <div
                              className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                                pricingCards[currentSlide].variant === "white"
                                  ? "bg-[#4a8b7b]"
                                  : "bg-white"
                              }`}
                            >
                              <CheckIcon
                                className={`w-3 h-3 sm:w-4 sm:h-4 ${
                                  pricingCards[currentSlide].variant === "white"
                                    ? "text-white"
                                    : "text-[#4a8b7b]"
                                }`}
                              />
                            </div>
                            <span
                              className={`font-body-medium-body-medium-regular text-sm sm:text-base lg:text-base xl:text-[length:var(--body-medium-body-medium-regular-font-size)] tracking-[var(--body-medium-body-medium-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-medium-body-medium-regular-line-height)] ${
                                pricingCards[currentSlide].variant === "white"
                                  ? "text-black"
                                  : "text-white"
                              }`}
                            >
                              {feature}
                            </span>
                          </div>
                        )
                      )}
                    </CardContent>

                    <CardFooter className="p-0">
                      <Button
                        className={`w-full px-6 sm:px-8 lg:px-8 py-6 sm:py-7 lg:py-8 rounded-[48px] touch-manipulation ${
                          pricingCards[currentSlide].variant === "white"
                            ? "bg-[#4a8b7b] text-white"
                            : "bg-white text-[#4a8b7b]"
                        }`}
                      >
                        <span
                          className={`font-h6-h6-semibold text-sm sm:text-base lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)] ${
                            pricingCards[currentSlide].variant === "white"
                              ? "hover:text-white"
                              : "hover:text-[#4a8b7b]"
                          }`}
                        >
                          {pricingCards[currentSlide].buttonText}
                        </span>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot Indicators - Smaller Size */}
            <motion.div
              className="flex justify-center gap-1.5 mt-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: durations.normal,
                ease: easings.smooth,
                delay: 1.5,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {pricingCards.map((_, index) => (
                <motion.div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-[16px] h-[8px] rounded-full transition-colors ${
                    index === currentSlide ? "bg-[#1a3c34]" : "bg-[#1a3c34]/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: durations.fast,
                    ease: easings.bouncy,
                    delay: 1.6 + index * 0.1,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </motion.div>
          </div>
        ) : (
          /* Desktop Grid */
          <StaggeredGrid
            className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-5 w-full"
            speed="normal"
            threshold={0.2}
            delay={1.4}
          >
            {pricingCards.map((card, index) => (
              <AnimatedCard
                key={index}
                hoverEffect="lift"
                index={index}
                threshold={0.2}
                className="h-full"
              >
                <Card
                  className={`flex flex-col gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10 rounded-xl border group ${
                    card.variant === "white"
                      ? "bg-white border-[#ebebeb] hover:[background:url(../frame-1455.png)_50%_50%_/_cover,linear-gradient(30deg,rgba(8,43,36,1)_0%,rgba(16,84,71,0.7)_100%)] hover:cursor-pointer"
                      : "[background:url(../frame-1455.png)_50%_50%_/_cover,linear-gradient(30deg,rgba(8,43,36,1)_0%,rgba(16,84,71,0.7)_100%)] hover:cursor-pointer"
                  }  shadow-[8px_12px_20px_#00000014] touch-manipulation h-full hover:shadow-xl transition-shadow duration-300`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: durations.normal,
                      ease: easings.smooth,
                      delay: 1.6 + index * 0.2,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <CardHeader className="p-0">
                      <CardTitle
                        className={`font-h4-h4-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[length:var(--h4-h4-semibold-font-size)] tracking-[var(--h4-h4-semibold-letter-spacing)] leading-tight xl:leading-[var(--h4-h4-semibold-line-height)] ${
                          card.variant === "white"
                            ? "group-hover:text-white"
                            : "text-white"
                        }`}
                      >
                        {card.title}
                      </CardTitle>
                      <p
                        className={`mt-4 sm:mt-5 font-body-large-body-large-regular text-xs sm:text-sm lg:text-base xl:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-large-body-large-regular-line-height)] ${
                          card.variant === "white"
                            ? "text-text group-hover:text-white"
                            : "text-[#dbf0e4]"
                        }`}
                      >
                        {card.description}
                      </p>
                    </CardHeader>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{
                      duration: durations.normal,
                      ease: easings.smooth,
                      delay: 1.4 + index * 0.2,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <Separator className="h-[1px] w-full" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: durations.normal,
                      ease: easings.smooth,
                      delay: 1.6 + index * 0.2,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <CardContent className="p-0 flex flex-col gap-3">
                      {card.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="inline-flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: durations.fast,
                            ease: easings.smooth,
                            delay: 2.2 + index * 0.2 + idx * 0.1,
                          }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          <motion.div
                            className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                              card.variant === "white"
                                ? "bg-[#4a8b7b] group-hover:bg-white"
                                : "bg-white"
                            }`}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                              duration: durations.fast,
                              ease: easings.bouncy,
                              delay: 2.3 + index * 0.2 + idx * 0.1,
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                          >
                            <CheckIcon
                              className={`w-3 h-3 sm:w-4 sm:h-4 ${
                                card.variant === "white"
                                  ? "text-white group-hover:text-[#4a8b7b]"
                                  : "text-[#4a8b7b]"
                              }`}
                            />
                          </motion.div>
                          <span
                            className={`font-body-medium-body-medium-regular text-xs sm:text-sm lg:text-base xl:text-[length:var(--body-medium-body-medium-regular-font-size)] tracking-[var(--body-medium-body-medium-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-medium-body-medium-regular-line-height)] ${
                              card.variant === "white"
                                ? "text-black group-hover:text-white"
                                : "text-white"
                            }`}
                          >
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </CardContent>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: durations.normal,
                      ease: easings.smooth,
                      delay: 1.8 + index * 0.2,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <CardFooter className="p-0 flex items-center justify-center">
                      <PrimaryActionButton
                        showIcon={false}
                        className={`w-full px-10 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-7 rounded-[48px] touch-manipulation transition-all duration-300 ${
                          card.variant === "white"
                            ? "bg-[#4a8b7b] text-white hover:bg-[#3d7a6a] hover:shadow-lg"
                            : "bg-[#4a8b7b] hover:bg-[#3d7a6a] hover:shadow-lg text-white"
                        }`}
                      >
                        {card.buttonText}
                      </PrimaryActionButton>
                    </CardFooter>
                  </motion.div>
                </Card>
              </AnimatedCard>
            ))}
          </StaggeredGrid>
        )}
      </div>
    </section>
  );
};
