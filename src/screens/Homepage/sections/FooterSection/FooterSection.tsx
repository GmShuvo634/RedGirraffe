import { SendIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

// Data for important links
const importantLinks = [
  "The Journey",
  "Board of Advisors", 
  "Founding Team",
  "INDIA - S A & I Team",
  "Media Relations",
  "Higher Purpose",
  "Our Values",
  "RentPay™",
  "About Us",
  "Reviews",
  "FAQs",
  "Blog",
  "Press Releases"
];

// Data for policies & compliance
const policiesLinks = [
  "Fixed Deposit",
  "Refer & Earn",
  "Privacy Policy",
  "Refund/Cancellation Policy",
  "Terms & Conditions",
  "Anti corruption & Bribery Policy",
  "Code of Business Conduct & Ethics",
  "Anti-Fraud Policy Investigation",
  "Anti-Money Laundering Policy",
  "Sanctions Compliance Statement",
  "Grievance Redressal Policy"
];

// Data for business services
const businessServices = [
  "List Your Property",
  "Register as Agent",
  "Corporate Rental ERP",
  "SME Loans",
  "Post Your Requirement"
];

// Data for office locations
const officeLocations = [
  {
    country: "United Kingdom",
    company: "RedGirraffe Inc.",
    address: "Harben House, Harben Parade, Finchley Road, London, NW3 6LH."
  },
  {
    country: "Singapore", 
    company: "RedGirraffe Holdings",
    address: "3 Temasek Avenue, Centennial Tower, #17-01, Singapore 039190."
  },
  {
    country: "India",
    company: "RedGirraffe.com",
    addresses: [
      "904, Galleria Towers, DLF Phase IV, Gurgaon, Haryana - 122002.",
      "507, Tulsiani Chambers, Nariman Point, Mumbai - 400021."
    ]
  }
];

// Data for social media links
const socialMediaLinks = [
  { name: "YouTube", icon: "/src/public/youtube.png" },
  { name: "TikTok", icon: "/src/public/tiktok.png" },
  { name: "LinkedIn", icon: "/src/public/linkedin.png" },
  { name: "Instagram", icon: "/src/public/instagram.png" },
  { name: "Facebook", icon: "/src/public/facebook.png" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full pt-16 lg:pt-20 pb-6 lg:pb-8 px-4 sm:px-8 lg:px-20 bg-[#1a3c34] flex flex-col">
      <div className="flex flex-col w-full max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 lg:mb-16">
          
          {/* Important Links */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-2">Important Links</h3>
            <p className="text-[#b8860b] text-sm mb-6">Quick access to essential pages</p>
            <div className="space-y-3">
              {importantLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-[#9cacae] hover:text-white transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Policies & Compliance */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-2">Policies & Compliance</h3>
            <p className="text-[#b8860b] text-sm mb-6">Key policies for security and compliance</p>
            <div className="space-y-3">
              {policiesLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-[#9cacae] hover:text-white transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Business Services */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-2">Business Services</h3>
            <p className="text-[#b8860b] text-sm mb-6">Solutions for businesses & partners</p>
            <div className="space-y-3">
              {businessServices.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-[#9cacae] hover:text-white transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Our Offices */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-2">Our Offices</h3>
            <p className="text-[#b8860b] text-sm mb-6">Global presence, local impact</p>
            <div className="space-y-6">
              {officeLocations.map((office, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-[#b8860b] font-medium text-sm">{office.country}</h4>
                  <p className="text-white text-sm font-medium">{office.company}</p>
                  {office.addresses ? (
                    office.addresses.map((address, addrIndex) => (
                      <p key={addrIndex} className="text-[#9cacae] text-xs leading-relaxed">
                        {address}
                      </p>
                    ))
                  ) : (
                    <p className="text-[#9cacae] text-xs leading-relaxed">
                      {office.address}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Stay Connected */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-2">Stay Connected</h3>
            <p className="text-[#b8860b] text-sm mb-6">Never miss an update</p>
            
            {/* Email Subscription */}
            <div className="mb-8">
              <div className="flex items-center bg-white rounded-full p-1 mb-3">
                <Input
                  className="flex-1 border-0 bg-transparent text-gray-600 placeholder:text-gray-400 text-sm px-4"
                  placeholder="Enter your email"
                />
                <Button className="bg-[#b8860b] hover:bg-[#a0750a] rounded-full px-6 py-2 text-sm font-medium">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Company Info */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#00d959] rounded flex items-center justify-center">
                  <img src="/src/public/logo.png" alt="RedGirraffe" className="w-6 h-6" />
                </div>
                <h4 className="text-white font-bold text-xl">RedGirraffe</h4>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-white text-sm">🇺🇸</span>
                <span className="text-white text-sm">🇪🇺</span>
                <span className="text-white text-sm">🇬🇧</span>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 text-[#b8860b] text-sm mb-4">
                <span>Payments</span>
                <span>|</span>
                <span>B2B SaaS</span>
                <span>|</span>
                <span>Real Estate</span>
              </div>
              
              <div className="mb-6">
                <p className="text-[#b8860b] text-sm mb-2">Write to us at:</p>
                <a href="mailto:connect@redgirraffe.com" className="text-white font-medium text-sm hover:text-[#00d959] transition-colors">
                  connect@redgirraffe.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              {socialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <img src={social.icon} alt={social.name} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-[#366f65]">
          <div className="bg-[#b8860b] text-center py-3 rounded">
            <p className="text-black text-sm font-medium">
              Copyright © 2025-2026 | RedGirraffe - All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};