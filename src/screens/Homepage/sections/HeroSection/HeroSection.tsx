import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

export const HeroSection = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    "Features",
    "Industries",
    "How It Works",
    "Pricing",
    "Contact",
  ];

  return (
    <div className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-20 xl:gap-40 pb-12 sm:pb-16 lg:pb-20 xl:pb-[120px]">
      {/* Navigation Bar */}
      <div className="flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 xl:px-20 bg-white">
        <div className="flex h-14 sm:h-16 lg:h-20 items-center justify-between w-full max-w-7xl py-3 sm:py-4 lg:py-6 border-b border-[#ebebeb]">
          <div className="flex items-center gap-4 lg:gap-12 xl:gap-20">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-[#00d959] rounded overflow-hidden">
                <img
                  className="absolute w-full h-full top-0 left-0 object-cover"
                  alt="Logo"
                  src="/src/public/logo.png"
                />
              </div>
              <div className="font-h5-h5-bold text-black text-base sm:text-lg lg:text-xl xl:text-[length:var(--h5-h5-bold-font-size)] leading-tight tracking-[var(--h5-h5-bold-letter-spacing)]">
                RedGirraffe
              </div>
            </div>

            {/* Navigation Links - Hidden on mobile and tablet */}
            <div className="hidden xl:flex items-center gap-6 2xl:gap-10">
              {navItems.map((item, index) => (
                <Button key={index} variant="ghost" className="p-0 h-auto hover:bg-transparent touch-manipulation">
                  <div className="font-body-large-body-large-semibold text-text text-sm lg:text-base xl:text-[length:var(--body-large-body-large-semibold-font-size)] text-center tracking-[var(--body-large-body-large-semibold-letter-spacing)] leading-[var(--body-large-body-large-semibold-line-height)] hover:text-app-primary transition-colors">
                    {item}
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="outline"
              className="w-16 sm:w-20 lg:w-24 xl:w-[110px] h-8 sm:h-9 lg:h-10 px-2 sm:px-3 lg:px-6 py-2 lg:py-3 rounded-[64px] border border-solid border-[#ebebeb] text-xs sm:text-sm touch-manipulation"
            >
              <span className="font-body-medium-body-medium-regular text-black text-center tracking-[var(--body-medium-body-medium-regular-letter-spacing)] leading-[var(--body-medium-body-medium-regular-line-height)]">
                Get Demo
              </span>
            </Button>
            <Button className="w-14 sm:w-16 lg:w-20 xl:w-[110px] h-8 sm:h-9 lg:h-10 px-2 sm:px-3 lg:px-6 py-2 lg:py-3 bg-[#1a3c34] rounded-[64px] text-xs sm:text-sm touch-manipulation">
              <span className="font-body-medium-body-medium-regular text-white tracking-[var(--body-medium-body-medium-regular-letter-spacing)] leading-[var(--body-medium-body-medium-regular-line-height)]">
                Login
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col xl:flex-row items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-20 px-4 sm:px-6 lg:px-8 xl:px-0 w-full max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="flex flex-col w-full xl:w-[560px] items-start gap-8 sm:gap-10 lg:gap-12 xl:gap-[60px] relative bg-white">
          {/* Hero Text Content */}
          <div className="flex flex-col items-start gap-4 lg:gap-5 w-full">
            {/* Toggle Group */}
            <ToggleGroup
              type="single"
              defaultValue="commercial"
              className="bg-[#e5e9ec] rounded-[40px] p-1 w-fit"
            >
              <ToggleGroupItem
                value="commercial"
                className="bg-abu-bg rounded-[32px] px-3 sm:px-4 lg:px-[15px] py-1.5 data-[state=on]:bg-abu-bg data-[state=off]:bg-transparent text-sm lg:text-base touch-manipulation"
              >
                <span className="font-h6-h6-semibold text-[#1a3c34] text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]">
                  Commercial
                </span>
              </ToggleGroupItem>
              <ToggleGroupItem
                value="platforms"
                className="px-3 sm:px-4 lg:px-[15px] py-1.5 data-[state=on]:bg-abu-bg data-[state=off]:bg-transparent text-sm lg:text-base touch-manipulation"
              >
                <span className="font-h6-h6-semibold text-[#1a3c34] text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]">
                  Platforms
                </span>
              </ToggleGroupItem>
            </ToggleGroup>

            {/* Heading */}
            <h1 className="font-h1-h1-semibold text-app-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[length:var(--h1-h1-semibold-font-size)] tracking-[var(--h1-h1-semibold-letter-spacing)] leading-tight xl:leading-[var(--h1-h1-semibold-line-height)]">
              RedGirraffe Global Commercial Card
            </h1>

            {/* Subheading */}
            <p className="font-body-large-body-large-semibold text-app-secondary text-sm sm:text-base lg:text-lg xl:text-[length:var(--body-large-body-large-semibold-font-size)] tracking-[var(--body-large-body-large-semibold-letter-spacing)] leading-relaxed xl:leading-[var(--body-large-body-large-semibold-line-height)]">
              Simplify payments, reduce costs, and unlock smarter cash flow with
              seamless recurring payouts in 97+ countries.
            </p>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-center justify-center gap-4 lg:gap-5 w-full">
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 lg:gap-5 w-full">
              <Button className="w-full sm:w-auto sm:flex-1 lg:w-[200px] xl:w-[270px] h-12 sm:h-13 lg:h-14 px-4 sm:px-6 lg:px-10 py-3 lg:py-4 bg-app-primary rounded-[48px] flex items-center justify-center gap-2 lg:gap-3 touch-manipulation">
                <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                <span className="font-h6-h6-semibold text-white text-sm lg:text-base xl:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]">
                  Request a Demo
                </span>
              </Button>
              <Button className="w-full sm:w-auto sm:flex-1 lg:w-[200px] xl:w-[270px] h-12 sm:h-13 lg:h-14 px-4 sm:px-6 lg:px-10 py-3 lg:py-4 bg-[#4a8b7b] rounded-[48px] flex items-center justify-center gap-2 lg:gap-3 touch-manipulation">
                <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                <span className="font-h6-h6-semibold text-white text-sm lg:text-base xl:text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)]">
                  Contact Us
                </span>
              </Button>
            </div>

            {/* Stats */}
            <p className="w-full text-center font-h6-h6-regular text-text text-sm lg:text-base xl:text-[length:var(--h6-h6-regular-font-size)] tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)]">
              $20B+ processed annually
            </p>
          </div>

          {/* Tooltip - Hidden on mobile */}
          <div className="hidden lg:block absolute w-[163px] h-[45px] top-[-45px] left-[260px]">
            <div className="relative h-[45px]">
              <Card className="inline-flex items-center justify-center gap-2.5 px-3.5 py-1 absolute top-0 left-[31px] bg-[#00d959] rounded-[55px] overflow-hidden border-none">
                <span className="font-body-large-body-large-regular text-[#1b1b1b] text-[length:var(--body-large-body-large-regular-font-size)] text-center tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-[var(--body-large-body-large-regular-line-height)] whitespace-nowrap">
                  Click to change
                </span>
              </Card>
              <img
                className="absolute w-8 h-8 top-[13px] left-0"
                alt="Cursor"
                src="/src/public/fluent_cursor-20-filled.svg"
              />
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full xl:w-auto flex justify-center">
          <video
            className="w-full max-w-[640px] h-auto aspect-video object-cover rounded-[10px]"
            autoPlay
            loop
            muted
            src="/src/public/hero-section.mp4"
          />
        </div>
      </div>
    </div>
  );
};