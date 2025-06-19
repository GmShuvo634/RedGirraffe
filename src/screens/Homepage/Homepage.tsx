import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ContentSection } from "./sections/ContentSection";
import { FeatureHighlightSection } from "./sections/FeatureHighlightSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { LayoutSection } from "./sections/LayoutSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection";
import { PricingPlansSection } from "./sections/PricingPlansSection";
import { SubscriptionFormSection } from "./sections/SubscriptionFormSection";
import { UserTestimonialsSection } from "./sections/UserTestimonialsSection/UserTestimonialsSection";

export const Homepage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="w-full max-w-[1440px]">
        <HeroSection />
        <LayoutSection />
        <MainContentSection />
        <ContentSection />
        <NavigationSection />
        <FeatureHighlightSection />
        <UserTestimonialsSection />
        <PricingPlansSection />
        <CallToActionSection />
        <SubscriptionFormSection />
        <FooterSection />
      </div>
    </div>
  );
};
