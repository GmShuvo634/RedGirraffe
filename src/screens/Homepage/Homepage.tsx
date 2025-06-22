import { HeroSection } from "./sections/HeroSection";
import { FeatureHighlightSection } from "./sections/FeatureHighlightSection";
import { MainContentSection } from "./sections/MainContentSection";
import { ContentSection } from "./sections/ContentSection";
import { LayoutSection } from "./sections/LayoutSection/LayoutSection";
import { FooterSection } from "./sections/FooterSection";
import { UserTestimonialsSection } from "./sections/UserTestimonialsSection/UserTestimonialsSection";
import { SubscriptionFormSection } from "./sections/SubscriptionFormSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { IndustriesSection } from "./sections/NavigationSection/NavigationSection";
import { HowItWorksSection } from "./sections/PricingPlansSection/PricingPlansSection";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp} from "lucide-react";
import { useEffect, useState } from "react";


export const Homepage = (): JSX.Element => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-[1440px]">
        <HeroSection />
        <section id="industries">
          <LayoutSection />
        </section>
        <MainContentSection />
        <ContentSection />
        <section id="industries">
          <IndustriesSection />
        </section>
        <section id="features">
          <FeatureHighlightSection />
        </section>
        <UserTestimonialsSection />
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        <section id="pricing">
          <CallToActionSection />
        </section>
        <section id="contact">
          <SubscriptionFormSection />
        </section>
      </div>
      <FooterSection />
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#4a8b7b] hover:bg-[#3d7a6a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center touch-manipulation"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 10px 25px rgba(74, 139, 123, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
