import {
  ArrowRightIcon,
  ChevronDownIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Separator } from "../../../../components/ui/separator";

export const SubscriptionFormSection = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "+91 80 1019 1019",
      description: "The Best Way to get Faster Answer",
    },
    {
      icon: <MailIcon className="w-6 h-6" />,
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
      label: "PhoneIcon Number",
      placeholder: "Enter Your Company",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[60px] px-20 py-[120px] bg-white w-full">
      {/* Heading Section */}
      <div className="flex flex-col items-start gap-5 max-w-[800px] w-full">
        <h2 className="w-full font-h3-h3-semibold font-[number:var(--h3-h3-semibold-font-weight)] text-[#1a3c34] text-[length:var(--h3-h3-semibold-font-size)] text-center tracking-[var(--h3-h3-semibold-letter-spacing)] leading-[var(--h3-h3-semibold-line-height)] [font-style:var(--h3-h3-semibold-font-style)]">
          Ready to Transform Your Business Payments?
        </h2>

        <p className="w-full px-10 font-h6-h6-regular font-[number:var(--h6-h6-regular-font-weight)] text-[#4a8b7b] text-[length:var(--h6-h6-regular-font-size)] text-center tracking-[var(--h6-h6-regular-letter-spacing)] leading-[var(--h6-h6-regular-line-height)] [font-style:var(--h6-h6-regular-font-style)]">
          Join thousands of enterprises, banks, and PSPs simplifying payments
          with RedGirraffe
        </p>
      </div>

      {/* Contact Information */}
      <div className="flex items-start justify-center gap-5 w-full max-w-[1280px]">
        {contactInfo.map((info, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center gap-2.5 bg-white">
              <div className="flex items-center gap-2.5 w-full">
                <div className="w-8 h-8 flex items-center justify-center">
                  {info.icon}
                </div>
                <span className="font-h5-h5-semibold text-[length:var(--h5-h5-semibold-font-size)] leading-[var(--h5-h5-semibold-line-height)] whitespace-nowrap font-[number:var(--h5-h5-semibold-font-weight)] text-[#1b1b1b] tracking-[var(--h5-h5-semibold-letter-spacing)] [font-style:var(--h5-h5-semibold-font-style)]">
                  {info.title}
                </span>
              </div>
              <p className="font-body-large-body-large-regular font-[number:var(--body-large-body-large-regular-font-weight)] text-black text-[length:var(--body-large-body-large-regular-font-size)] tracking-[var(--body-large-body-large-regular-letter-spacing)] leading-[var(--body-large-body-large-regular-line-height)] [font-style:var(--body-large-body-large-regular-font-style)]">
                {info.description}
              </p>
            </div>
            {index === 0 && (
              <Separator orientation="vertical" className="h-[66px]" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Subscription Form */}
      <Card className="w-full bg-abu-bg border border-solid border-[#ebebeb] rounded-[20px]">
        <CardContent className="p-10 flex flex-col items-start gap-[60px]">
          <div className="flex flex-col items-start gap-5 w-full">
            {/* First row of form fields */}
            <div className="flex w-full items-start gap-10">
              {formFields.slice(0, 2).map((field) => (
                <div
                  key={field.id}
                  className="flex flex-col items-start gap-2.5 flex-1"
                >
                  <label
                    htmlFor={field.id}
                    className="self-stretch font-body-medium-body-medium-regular font-[number:var(--body-medium-body-medium-regular-font-weight)] text-black text-[length:var(--body-medium-body-medium-regular-font-size)] tracking-[var(--body-medium-body-medium-regular-letter-spacing)] leading-[var(--body-medium-body-medium-regular-line-height)] [font-style:var(--body-medium-body-medium-regular-font-style)]"
                  >
                    {field.label}
                  </label>
                  <Input
                    id={field.id}
                    placeholder={field.placeholder}
                    className="p-6 bg-white rounded-xl border border-solid border-[#ebebeb] font-body-large-body-large-regular text-text"
                  />
                </div>
              ))}
            </div>

            {/* Second row of form fields */}
            <div className="flex w-full items-start gap-10">
              {formFields.slice(2, 4).map((field) => (
                <div
                  key={field.id}
                  className="flex flex-col items-start gap-2.5 flex-1"
                >
                  <label
                    htmlFor={field.id}
                    className="self-stretch font-body-medium-body-medium-regular font-[number:var(--body-medium-body-medium-regular-font-weight)] text-black text-[length:var(--body-medium-body-medium-regular-font-size)] tracking-[var(--body-medium-body-medium-regular-letter-spacing)] leading-[var(--body-medium-body-medium-regular-line-height)] [font-style:var(--body-medium-body-medium-regular-font-style)]"
                  >
                    {field.label}
                  </label>
                  <Input
                    id={field.id}
                    placeholder={field.placeholder}
                    className="p-6 bg-white rounded-xl border border-solid border-[#ebebeb] font-body-large-body-large-regular text-text"
                  />
                </div>
              ))}
            </div>

            {/* Monthly Payment Volume dropdown */}
            <div className="flex flex-col w-[580px] items-start gap-2.5">
              <label
                htmlFor="paymentVolume"
                className="self-stretch font-body-medium-body-medium-regular font-[number:var(--body-medium-body-medium-regular-font-weight)] text-black text-[length:var(--body-medium-body-medium-regular-font-size)] tracking-[var(--body-medium-body-medium-regular-letter-spacing)] leading-[var(--body-medium-body-medium-regular-line-height)] [font-style:var(--body-medium-body-medium-regular-font-style)]"
              >
                Monthly Payment Volume
              </label>
              <Select>
                <SelectTrigger
                  id="paymentVolume"
                  className="p-6 bg-white rounded-xl border border-solid border-[#ebebeb] font-body-large-body-large-regular text-text flex justify-between items-center"
                >
                  <SelectValue placeholder="Home Loan" />
                  <ChevronDownIcon className="w-6 h-6" />
                </SelectTrigger>
              </Select>
            </div>
          </div>

          {/* Submit Button */}
          <Button className="flex items-center justify-center gap-3 px-10 py-4 bg-[#4a8b7b] rounded-[48px] w-[330px]">
            <ArrowRightIcon className="w-6 h-6 text-white" />
            <span className="font-h6-h6-semibold font-[number:var(--h6-h6-semibold-font-weight)] text-white text-[length:var(--h6-h6-semibold-font-size)] tracking-[var(--h6-h6-semibold-letter-spacing)] leading-[var(--h6-h6-semibold-line-height)] whitespace-nowrap [font-style:var(--h6-h6-semibold-font-style)]">
              Request a Demo
            </span>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
