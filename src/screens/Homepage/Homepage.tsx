
import { HeroSection } from "./sections/HeroSection";
import { FeatureHighlightSection } from "./sections/FeatureHighlightSection";
import { MainContentSection } from "./sections/MainContentSection";
import { ContentSection } from "./sections/ContentSection";
import {  LayoutSection } from "./sections/LayoutSection/LayoutSection";
import { FooterSection } from "./sections/FooterSection";
import { UserTestimonialsSection } from "./sections/UserTestimonialsSection/UserTestimonialsSection";
import { SubscriptionFormSection } from "./sections/SubscriptionFormSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { IndustriesSection } from "./sections/NavigationSection/NavigationSection";
import { HowItWorksSection } from "./sections/PricingPlansSection/PricingPlansSection";

export const Homepage = (): JSX.Element => {
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
    </div>
  );
};
