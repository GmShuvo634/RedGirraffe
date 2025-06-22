import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

// Data for important links
const importantLinks = [
  { label: "The Journey", href: "https://redgirraffe.com/in/app/thejourney" },
  { label: "Board of Advisors", href: "https://redgirraffe.com/in/app/boardofadvisors" },
  { label: "Founding Team", href: "https://redgirraffe.com/in/app/foundingteam" },
  { label: "INDIA - S A & I Team", href: "https://redgirraffe.com/in/app/strategyadvisoryteam" },
  { label: "Media Relations", href: "https://redgirraffe.com/in/app/mediarelations" },
  { label: "Higher Purpose", href: "https://redgirraffe.com/in/app/purpose" },
  { label: "Our Values", href: "https://redgirraffe.com/in/app/values" },
  { label: "RentPay™", href: "https://redgirraffe.com/in/app/rentpay-details" },
  { label: "About Us", href: "https://redgirraffe.com/in/app/aboutus" },
  { label: "Reviews", href: "#" },
  { label: "FAQs", href: "https://redgirraffe.com/in/app/faqs" },
  { label: "Blog", href: "https://redgirraffe.com/blog/" },
  { label: "Press Releases", href: "https://redgirraffe.com/blog/media-corner/" },
];

// Data for policies & compliance
const policiesLinks = [
  { label: "Fixed Deposit", href: "https://redgirraffe.com/in/app/fixed-deposit" },
  { label: "Refer & Earn", href: "https://redgirraffe.com/in/app/referrals" },
  { label: "Privacy Policy", href: "https://redgirraffe.com/in/app/privacypolicy" },
  { label: "Refund/Cancellation Policy", href: "https://redgirraffe.com/in/app/refund" },
  { label: "Terms & Conditions", href: "https://redgirraffe.com/in/app/terms-and-conditions" },
  { label: "Anti corruption & Bribery Policy", href: "https://redgirraffe.com/in/app/anti-corruption-bribery" },
  { label: "Code of Business Conduct & Ethics", href: "https://redgirraffe.com/in/app/code-business-conduct-ethics" },
  { label: "Anti-Fraud Policy Investigation", href: "https://redgirraffe.com/in/app/anti-fraud-policy-investigation" },
  { label: "Anti-Money Laundering Policy", href: "https://redgirraffe.com/in/app/anti-money-laundering-policy" },
  { label: "Sanctions Compliance Statement", href: "https://redgirraffe.com/in/app/sanctions-compliance-statement" },
  { label: "Grievance Redressal Policy", href: "https://redgirraffe.com/in/app/grievance-redressal-policy" },
];

// Data for business services
const businessServices = [
  { label: "List Your Property", href: "https://redgirraffe.com/in/app/list-property" },
  { label: "Register as Agent", href: "https://redgirraffe.com/in/app/register-as-agent" },
  { label: "Corporate Rental ERP", href: "https://redgirraffe.com/in/app/rentpay-erp" },
  { label: "SME Loans", href: "https://redgirraffe.com/in/app/sme-loans" },
  { label: "Post Your Requirement", href: "https://redgirraffe.com/in/app/post-requirement" },
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

// Data for social media links (can be updated with real hrefs)
const socialMediaLinks = [
  { name: "YouTube", icon: "/youtube.png", href: "#" },
  { name: "TikTok", icon: "/tiktok.png", href: "#" },
  { name: "LinkedIn", icon: "/linkedin.png", href: "#" },
  { name: "Instagram", icon: "/instagram.png", href: "#" },
  { name: "Facebook", icon: "/facebook.png", href: "#" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full pt-16 lg:pt-20 pb-6 lg:pb-8 px-4 sm:px-8 lg:px-20 bg-[#1a3c34] flex flex-col">
      <div className="flex flex-col w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 lg:mb-16">

          {/* Important Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">Important Links</h3>
            <p className="text-[#b8860b] text-sm mb-6">Quick access to essential pages</p>
            <div className="space-y-3">
              {importantLinks.map(({ label, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#9cacae] hover:text-white transition-colors text-sm"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Policies & Compliance */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">Policies & Compliance</h3>
            <p className="text-[#b8860b] text-sm mb-6">Key policies for security and compliance</p>
            <div className="space-y-3">
              {policiesLinks.map(({ label, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#9cacae] hover:text-white transition-colors text-sm"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Business Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">Business Services</h3>
            <p className="text-[#b8860b] text-sm mb-6">Solutions for businesses & partners</p>
            <div className="space-y-3">
              {businessServices.map(({ label, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#9cacae] hover:text-white transition-colors text-sm"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Our Offices */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">Our Offices</h3>
            <p className="text-[#b8860b] text-sm mb-6">Global presence, local impact</p>
            <div className="space-y-6">
              {officeLocations.map((office, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-[#b8860b] font-medium text-sm">{office.country}</h4>
                  <p className="text-white text-sm font-medium">{office.company}</p>
                  {office.addresses ? (
                    office.addresses.map((address, addrIndex) => (
                      <p key={addrIndex} className="text-[#9cacae] text-sm leading-relaxed">
                        {address}
                      </p>
                    ))
                  ) : (
                    <p className="text-[#9cacae] text-sm leading-relaxed">
                      {office.address}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">Stay Connected</h3>
            <p className="text-[#b8860b] text-sm mb-6">Never miss an update</p>

            {/* Email Input */}
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
                  <img src="/logo.png" alt="RedGirraffe" className="w-6 h-6" />
                </div>
                <h4 className="text-white font-bold text-xl">RedGirraffe</h4>
              </div>
              <div className="flex items-center gap-2 mb-4">
               { [1, 2, 3, 4].map((country, index) => (
                  <img src={`/falg_${index + 1}.png`} key={index} alt="flag" className="w-8 h-6" />
                ))}
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

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialMediaLinks.map(({ name, icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <img src={icon} alt={name} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-[#366f65]">
          <div className="text-center py-3 rounded">
            <p className="text-white text-sm font-medium">
              Copyright © 2025-2026 | RedGirraffe - All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
