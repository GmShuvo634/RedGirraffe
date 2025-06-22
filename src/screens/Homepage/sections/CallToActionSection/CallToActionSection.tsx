import { ArrowRightIcon, CheckIcon } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import {
  AnimatedText,
  AnimatedCard,
  StaggeredGrid,
  AnimatedButton,
} from "../../../../components/animations";
import {
  durations,
  easings,
} from "../../../../utils/animations";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { useResponsiveCardSlice } from "../../../../hooks/useResponsiveCardSlice";

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
    <section className="py-12 sm:py-16 lg:py-20 xl:py-[120px] px-4 sm:px-6 lg:px-8 xl:px-20 bg-[#e0eae8] w-full">
      <div className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-[60px] w-full max-w-7xl mx-auto">
        {/* Heading and description */}
        <motion.div
          className="flex flex-col w-full max-w-4xl items-center gap-4 sm:gap-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: durations.normal,
            ease: easings.smooth,
            delay: 0.1,
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <AnimatedText
            as="h2"
            variant="fadeUp"
            className="font-h3-h3-semibold text-[#1a3c34] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[length:var(--h3-h3-semibold-font-size)] text-center tracking-[var(--h3-h3-semibold-letter-spacing)] leading-tight xl:leading-[var(--h3-h3-semibold-line-height)]"
            delay={0.2}
            threshold={0.3}
          >
            RedGirraffe Global Commercial Card Pricing
          </AnimatedText>

          <AnimatedText
            as="p"
            variant="fadeUp"
            className="text-[#4a8b7b] text-sm sm:text-base lg:text-lg text-center px-4 sm:px-6 lg:px-10 font-normal leading-relaxed"
            delay={0.4}
            threshold={0.3}
          >
            <span>
              Pricing is subject to a commercial arrangement between your bank
              and RedGirraffe or its authorised PSPs. Please contact your
              commercial bank to confirm your{" "}
            </span>

            <span className="font-semibold">
              RedGirraffe Pay-Pulse Commercial Credit Card
            </span>

            <span>
              {" "}
              high value recurring rates on Visa, MasterCard & other leading
              global Payment Networks.
            </span>
          </AnimatedText>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full max-w-[600px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: durations.normal,
            ease: easings.smooth,
            delay: 0.6,
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="w-full sm:flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: durations.normal,
              ease: easings.smooth,
              delay: 0.8,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <AnimatedButton
              variant="default"
              className="w-full max-w-[270px] flex items-center justify-center gap-3 px-6 sm:px-8 lg:px-10 py-6 sm:py-7 lg:py-8 rounded-[48px] bg-[#1a3c34] text-white touch-manipulation hover:bg-[#0f2a24] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <motion.div
                initial={{ x: -8, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: durations.fast,
                  ease: easings.smooth,
                  delay: 1.0,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
              <motion.span
                className="font-h6-h6-semibold text-sm sm:text-base lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]"
                initial={{ x: 8, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: durations.fast,
                  ease: easings.smooth,
                  delay: 1.0,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Request a Demo
              </motion.span>
            </AnimatedButton>
          </motion.div>

          <motion.div
            className="w-full sm:flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: durations.normal,
              ease: easings.smooth,
              delay: 0.9,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <AnimatedButton
              variant="default"
              className="w-full max-w-[270px] flex items-center justify-center gap-3 px-6 sm:px-8 lg:px-10 py-6 sm:py-7 lg:py-8 rounded-[48px] bg-[#4a8b7b] text-white touch-manipulation hover:bg-[#3d7a6a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <motion.div
                initial={{ x: -8, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: durations.fast,
                  ease: easings.smooth,
                  delay: 1.1,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
              <motion.span
                className="font-h6-h6-semibold text-sm sm:text-base lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]"
                initial={{ x: 8, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: durations.fast,
                  ease: easings.smooth,
                  delay: 1.1,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Contact Sales
              </motion.span>
            </AnimatedButton>
          </motion.div>
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
                        className={`font-h4-h4-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[length:var(--h4-h4-semibold-font-size)] tracking-[var(--h4-h4-semibold-letter-spacing)] leading-tight xl:leading-[var(--h4-h4-semibold-line-height)] ${
                          pricingCards[currentSlide].variant === "white"
                            ? "text-black"
                            : "text-white"
                        }`}
                      >
                        {pricingCards[currentSlide].title}
                      </CardTitle>
                      <p
                        className={`mt-4 sm:mt-5 font-body-large-body-large-regular text-xs sm:text-sm lg:text-base xl:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-large-body-large-regular-line-height)] ${
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
                              className={`font-body-medium-body-medium-regular text-xs sm:text-sm lg:text-base xl:text-[length:var(--body-medium-body-medium-regular-font-size)] tracking-[var(--body-medium-body-medium-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-medium-body-medium-regular-line-height)] ${
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
                        className={`w-full px-6 sm:px-8 lg:px-10 py-6 sm:py-7 lg:py-8 rounded-[48px] touch-manipulation ${
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
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-5 w-full"
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
                  className={`flex flex-col gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10 rounded-xl border ${
                    card.variant === "white"
                      ? "bg-white border-[#ebebeb]"
                      : "[background:url(../frame-1455.png)_50%_50%_/_cover,linear-gradient(30deg,rgba(8,43,36,1)_0%,rgba(16,84,71,0.7)_100%)]"
                  } shadow-[8px_12px_20px_#00000014] touch-manipulation h-full hover:shadow-xl transition-shadow duration-300`}
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
                          card.variant === "white" ? "text-black" : "text-white"
                        }`}
                      >
                        {card.title}
                      </CardTitle>
                      <p
                        className={`mt-4 sm:mt-5 font-body-large-body-large-regular text-xs sm:text-sm lg:text-base xl:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-large-body-large-regular-line-height)] ${
                          card.variant === "white" ? "text-text" : "text-[#dbf0e4]"
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
                      delay: 1.8 + index * 0.2,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <Separator className="h-px w-full" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: durations.normal,
                      ease: easings.smooth,
                      delay: 2.0 + index * 0.2,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <CardContent className="p-0 flex flex-col gap-3">
                      {card.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="inline-flex items-center gap-3"
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
                              card.variant === "white" ? "bg-[#4a8b7b]" : "bg-white"
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
                                  ? "text-white"
                                  : "text-[#4a8b7b]"
                              }`}
                            />
                          </motion.div>
                          <span
                            className={`font-body-medium-body-medium-regular text-xs sm:text-sm lg:text-base xl:text-[length:var(--body-medium-body-medium-regular-font-size)] tracking-[var(--body-medium-body-medium-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-medium-body-medium-regular-line-height)] ${
                              card.variant === "white" ? "text-black" : "text-white"
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
                      delay: 2.6 + index * 0.2,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <CardFooter className="p-0">
                      <Button
                        className={`w-full px-6 sm:px-8 lg:px-10 py-6 sm:py-7 lg:py-8 rounded-[48px] touch-manipulation transition-all duration-300 ${
                          card.variant === "white"
                            ? "bg-[#4a8b7b] text-white hover:bg-[#3d7a6a] hover:shadow-lg"
                            : "bg-white text-[#4a8b7b] hover:bg-gray-50 hover:shadow-lg"
                        }`}
                      >
                        <span
                          className={`font-h6-h6-semibold text-sm sm:text-base lg:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)] ${
                            card.variant === "white"
                              ? "hover:text-white"
                              : "hover:text-[#4a8b7b]"
                          }`}
                        >
                          {card.buttonText}
                        </span>
                      </Button>
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
