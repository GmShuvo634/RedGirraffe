import {
  ArrowRightIcon,
  MailIcon,
  PhoneIcon,
  MessageCircleIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

import { Separator } from "../../../../components/ui/separator";

export const SubscriptionFormSection = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    {
      icon: <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "+44 330 113 1707",
      description: "The Best Way to get Faster Answer",
    },
    {
      icon: <MessageCircleIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "+91 80 1019 1019",
      description: "WhatsApp Support Available",
    },
    {
      icon: <MailIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "connect@redgirraffe.com",
      description: "We Are Always Ready to Help",
    },
  ];

  // Form fields data
  const formFields = [
    { id: "fullName", label: "Full Name", placeholder: "Enter Your Name" },
    {
      id: "companyName",
      label: "Company Name",
      placeholder: "Enter Your Company",
    },
    {
      id: "email",
      label: "Business Email Address",
      placeholder: "Enter Your Email",
    },
    {
      id: "phone",
      label: "Phone Number",
      placeholder: "Enter Your Phone",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-[60px] px-4 sm:px-6 lg:px-8 xl:px-20 py-12 sm:py-16 lg:py-20 xl:py-[120px] bg-white w-full">
      {/* Heading Section */}
      <div className="flex flex-col items-start gap-4 sm:gap-5 max-w-4xl w-full">
        <h2 className="w-full font-h3-h3-semibold text-[#1a3c34] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[length:var(--h3-h3-semibold-font-size)] text-center tracking-[var(--h3-h3-semibold-letter-spacing)] leading-tight xl:leading-[var(--h3-h3-semibold-line-height)]">
          Ready to Transform Your Business Payments?
        </h2>

        <p className="w-full px-4 sm:px-6 lg:px-10 font-h6-h6-regular text-[#4a8b7b] text-sm sm:text-base lg:text-lg xl:text-[length:var(--h6-h6-regular-font-size)] text-center tracking-[var(--h6-h6-regular-letter-spacing)] leading-relaxed xl:leading-[var(--h6-h6-regular-line-height)]">
          Join thousands of enterprises, banks, and PSPs simplifying payments
          with RedGirraffe
        </p>
      </div>

      {/* Contact Information */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-5 w-full max-w-6xl">
        {contactInfo.map((info, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center gap-2.5 bg-white text-center sm:text-left">
              <div className="flex items-center gap-2.5 w-full justify-center sm:justify-start">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  {info.icon}
                </div>
                <span className="font-h5-h5-semibold text-[#1b1b1b] text-sm sm:text-base lg:text-lg xl:text-[length:var(--h5-h5-semibold-font-size)] leading-tight xl:leading-[var(--h5-h5-semibold-line-height)] tracking-[var(--h5-h5-semibold-letter-spacing)] whitespace-nowrap">
                  {info.title}
                </span>
              </div>
              <p className="font-body-large-body-large-regular text-black text-xs sm:text-sm lg:text-base xl:text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-large-body-large-regular-line-height)]">
                {info.description}
              </p>
            </div>
            {index < contactInfo.length - 1 && (
              <Separator orientation="vertical" className="hidden lg:block h-[66px]" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Subscription Form */}
      <Card className="w-full bg-abu-bg border border-solid border-[#ebebeb] rounded-[20px] max-w-6xl">
        <CardContent className="p-6 sm:p-8 lg:p-10 flex flex-col items-start gap-8 sm:gap-10 lg:gap-[60px]">
          <div className="flex flex-col items-start gap-4 sm:gap-5 w-full">
            {/* First row of form fields */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full">
              {formFields.slice(0, 2).map((field) => (
                <div
                  key={field.id}
                  className="flex flex-col items-start gap-2.5 w-full"
                >
                  <label
                    htmlFor={field.id}
                    className="self-stretch font-body-medium-body-medium-regular text-black text-sm sm:text-base lg:text-[length:var(--body-medium-body-medium-regular-font-size)] tracking-[var(--body-medium-body-medium-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-medium-body-medium-regular-line-height)]"
                  >
                    {field.label}
                  </label>
                  <Input
                    id={field.id}
                    placeholder={field.placeholder}
                    className="input-responsive p-4 sm:p-5 lg:p-6 bg-white rounded-xl border border-solid border-[#ebebeb] font-body-large-body-large-regular text-text"
                  />
                </div>
              ))}
            </div>

            {/* Second row of form fields */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full">
              {formFields.slice(2, 4).map((field) => (
                <div
                  key={field.id}
                  className="flex flex-col items-start gap-2.5 w-full"
                >
                  <label
                    htmlFor={field.id}
                    className="self-stretch font-body-medium-body-medium-regular text-black text-sm sm:text-base lg:text-[length:var(--body-medium-body-medium-regular-font-size)] tracking-[var(--body-medium-body-medium-regular-letter-spacing)] leading-relaxed xl:leading-[var(--body-medium-body-medium-regular-line-height)]"
                  >
                    {field.label}
                  </label>
                  <Input
                    id={field.id}
                    placeholder={field.placeholder}
                    className="input-responsive p-4 sm:p-5 lg:p-6 bg-white rounded-xl border border-solid border-[#ebebeb] font-body-large-body-large-regular text-text"
                  />
                </div>
              ))}
            </div>


          </div>

          {/* Submit Button */}
          <div className="flex justify-center lg:justify-start w-full">
            <Button
              size="mobile-lg"
              className="btn-mobile-lg flex items-center justify-center gap-3 bg-[#4a8b7b] rounded-[48px] w-full max-w-[330px]"
            >
              <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              <span className="font-h6-h6-semibold text-white tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)] whitespace-nowrap">
                Request a Demo
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};