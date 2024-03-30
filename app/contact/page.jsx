"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button, Input, TextArea } from "@/components/shared";
import { Phone, Mail, MessageCircleMore } from "lucide-react";
// import { PhoneInput } from "react-international-phone";
// import "react-international-phone/style.css";

const Contact = () => {
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //   const handlePhoneInputChange = (value) => {
  //     setFormData((prev) => ({
  //       ...prev,
  //       number: value,
  //     }));
  //   };

  return (
    <div className="px-4 sm:px-0 relative">
      <section className="px-16# pt-8 sm:pt-16 bg-primary-blue text-white text-center h-[133px] sm:h-[534px] ">
        <h1 className="font-medium text-lg sm:text-[2.5rem]">Contact Us</h1>

        <p className="text-xs sm:text-lg text-white/80 mt-1 sm:mt-4 w-[324px] sm:w-[620px] mx-auto">
          Have a question or you want an enquiry? Don’t hesitate, we’d love to
          hear from you
        </p>
      </section>

      <form
        action=""
        className="flex flex-col gap-3 sm:gap-10 bg-white px-6 sm:px-8 py-3 sm:py-10 mx-[18px] sm:mx-[188px] rounded-md shadow-lg z-50 mt-[-20px] sm:mt-[-250px]"
      >
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between">
          <Input
            type="text"
            value={formData.fullName}
            name="fullName"
            id="fullName"
            label="Name"
            placeholder="Your full name"
            onChangeHandler={handleInputChange}
          />
          <Input
            type="email"
            value={formData.email}
            name="email"
            id="email"
            label="Email"
            placeholder="Your email"
            onChangeHandler={handleInputChange}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between mb-3">
          <Input
            type="tel"
            value={formData.number}
            name="number"
            id="number"
            label="Phone"
            placeholder="Your phone number"
            onChangeHandler={handleInputChange}
          />
          <Input
            type="text"
            value={formData.subject}
            name="subject"
            id="subject"
            label="Subject"
            placeholder="Subject"
            onChangeHandler={handleInputChange}
          />
        </div>

        <TextArea
          id="message"
          value={formData.message}
          name="message"
          label="Message"
          placeholder="Write a message"
          onChangeHandler={handleInputChange}
          rows={5}
          autoComplete="on"
          required
        />

        {/* <PhoneInput
          defaultCountry="us"
          value={formData.number}
          name="number"
          id="number"
          onChange={handlePhoneInputChange}
          className=""
        /> */}

        <Button variant="secondary" className="mt-3 font-semibold">
          Send
        </Button>
      </form>

      <section
        className={`${
          pathname === "/contact" ? "flex" : "hidden"
        } justify-center gap-7 sm:gap-10 mt-6 sm:mt-14`}
      >
        <div className="w-12 h-12 bg-[#D4D6F8] rounded-full flex items-center justify-center">
          <Phone color="#30348D" />
        </div>
        <div className="w-12 h-12 bg-[#D4D6F8] rounded-full flex items-center justify-center">
          <MessageCircleMore color="#30348D" />
        </div>
        <div className="w-12 h-12 bg-[#D4D6F8] rounded-full flex items-center justify-center">
          <Mail color="#30348D" />
        </div>
      </section>
    </div>
  );
};

export default Contact;
