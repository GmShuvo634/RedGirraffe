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
    <div className="flex flex-col items-center gap-40 pb-[120px]">
      {/* Navigation Bar */}
      <div className="flex items-center justify-around w-full px-20 bg-white">
        <div className="flex h-20 items-center gap-[338px] py-6 flex-1 border-b border-[#ebebeb]">
          <div className="flex items-center gap-20 flex-1">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 bg-[#00d959] rounded overflow-hidden">
                <img
                  className="absolute w-8 h-8 top-0 left-0"
                  alt="Logo"
                  src="/logo-1.svg"
                />
              </div>
              <div className="font-h5-h5-bold text-black text-[length:var(--h5-h5-bold-font-size)] leading-[var(--h5-h5-bold-line-height)] tracking-[var(--h5-h5-bold-letter-spacing)] [font-style:var(--h5-h5-bold-font-style)]">
                RedGirraffe
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-10 mr-[-116px]">
              {navItems.map((item, index) => (
                <Button key={index} variant="ghost" className="p-0 h-auto">
                  <div className="font-body-large-body-large-semibold text-text text-[length:var(--body-large-body-large-semibold-font-size)] text-center tracking-[var(--body-large-body-large-semibold-letter-spacing)] leading-[var(--body-large-body-large-semibold-line-height)] [font-style:var(--body-large-body-large-semibold-font-style)]">
                    {item}
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="w-[110px] h-10 px-6 py-3 rounded-[64px] border border-solid border-[#ebebeb]"
            >
              <span className="font-body-medium-body-medium-regular text-black text-[length:var(--body-medium-body-medium-regular-font-size)] text-center tracking-[var(--body-medium-body-medium-regular-letter-spacing)] leading-[var(--body-medium-body-medium-regular-line-height)] [font-style:var(--body-medium-body-medium-regular-font-style)]">
                Get Demo
              </span>
            </Button>
            <Button className="w-[110px] h-10 px-6 py-3 bg-[#1a3c34] rounded-[64px]">
              <span className="font-body-medium-body-medium-regular text-white text-[length:var(--body-medium-body-medium-regular-font-size)] tracking-[var(--body-medium-body-medium-regular-letter-spacing)] leading-[var(--body-medium-body-medium-regular-line-height)] [font-style:var(--body-medium-body-medium-regular-font-style)]">
                Login
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex items-center gap-20 px-20 w-full">
        {/* Left Content */}
        <div className="flex flex-col w-[560px] items-start gap-[60px] relative bg-white">
          {/* Hero Text Content */}
          <div className="flex flex-col items-start gap-5 w-full">
            {/* Toggle Group */}
            <ToggleGroup
              type="single"
              defaultValue="commercial"
              className="bg-[#e5e9ec] rounded-[40px] p-1"
            >
              <ToggleGroupItem
                value="commercial"
                className="bg-abu-bg rounded-[32px] px-[15px] py-1.5 data-[state=on]:bg-abu-bg data-[state=off]:bg-transparent"
              >
                <span className="font-h6-h6-semibold text-[#1a3c34] text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)] [font-style:var(--h6-h6-semibold-font-style)]">
                  Commercial
                </span>
              </ToggleGroupItem>
              <ToggleGroupItem
                value="platforms"
                className="px-[15px] py-1.5 data-[state=on]:bg-abu-bg data-[state=off]:bg-transparent"
              >
                <span className="font-h6-h6-semibold text-[#1a3c34] text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)] [font-style:var(--h6-h6-semibold-font-style)]">
                  Platforms
                </span>
              </ToggleGroupItem>
            </ToggleGroup>

            {/* Heading */}
            <h1 className="font-h1-h1-semibold text-app-primary text-[length:var(--h1-h1-semibold-font-size)] tracking-[var(--h1-h1-semibold-letter-spacing)] leading-[var(--h1-h1-semibold-line-height)] [font-style:var(--h1-h1-semibold-font-style)]">
              RedGirraffe Global Commercial Card
            </h1>

            {/* Subheading */}
            <p className="font-body-large-body-large-semibold text-app-secondary text-[length:var(--body-large-body-large-semibold-font-size)] tracking-[var(--body-large-body-large-semibold-letter-spacing)] leading-[var(--body-large-body-large-semibold-line-height)] [font-style:var(--body-large-body-large-semibold-font-style)]">
              Simplify payments, reduce costs, and unlock smarter cash flow with
              seamless recurring payouts in 97+ countries.
            </p>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-start gap-5 w-full">
            {/* CTA Buttons */}
            <div className="flex items-center gap-5">
              <Button className="w-[270px] h-14 px-10 py-4 bg-app-primary rounded-[48px] flex items-center justify-center gap-3">
                <ArrowRightIcon className="w-6 h-6 text-white" />
                <span className="font-h6-h6-semibold text-white text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)] [font-style:var(--h6-h6-semibold-font-style)]">
                  Request a Demo
                </span>
              </Button>
              <Button className="w-[270px] h-14 px-10 py-4 bg-[#4a8b7b] rounded-[48px] flex items-center justify-center gap-3">
                <ArrowRightIcon className="w-6 h-6 text-white" />
                <span className="font-h6-h6-semibold text-white text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)] [font-style:var(--h6-h6-semibold-font-style)]">
                  Contact Us
                </span>
              </Button>
            </div>

            {/* Stats */}
            <p className="w-[550px] font-h6-h6-regular text-textblack text-[length:var(--h6-h6-regular-font-size)] text-center tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)] [font-style:var(--h6-h6-regular-font-style)]">
              $20B+ processed annually
            </p>
          </div>

          {/* Tooltip */}
          <div className="absolute w-[163px] h-[45px] top-[-45px] left-[287px]">
            <div className="relative h-[45px]">
              <Card className="inline-flex items-center justify-center gap-2.5 px-3.5 py-1 absolute top-0 left-[31px] bg-[#00d959] rounded-[55px] overflow-hidden border-none">
                <span className="font-body-large-body-large-regular text-[#1b1b1b] text-[length:var(--body-large-body-large-regular-font-size)] text-center tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-[var(--body-large-body-large-regular-line-height)] [font-style:var(--body-large-body-large-regular-font-style)]">
                  Click to change
                </span>
              </Card>
              <img
                className="absolute w-8 h-8 top-[13px] left-0"
                alt="Cursor"
                src="/fluent-cursor-20-filled.svg"
              />
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <img
          className="w-[640px] h-[360px] object-cover"
          alt="Rectangle"
          src="/rectangle-161124874.png"
        />
      </div>
    </div>
  );
};
