"use client";
import { ImageGrid } from "@/components/shared";
import DeskBody from "./deskBody";
import MobileBody from "./mobileBody";

const Distribution = () => {
  return (
    <div className="px-4 sm:px-20 max-w-[1280px] mx-auto">
      <div className="text-center">
        <p className="text-sm sm:text-base">Services</p>
        <p className="text-primary-blue mt-2 text-lg sm:text-[32px] font-medium">
          Local Distribution
        </p>
      </div>

      <section className="flex flex-col lg:gap-20 sm:flex-row sm:justify-between">
        <DeskBody />
        <ImageGrid
          img1="/images/distribution.png"
          alt1="Workers offloading truck"
          img2="/images/distribution-2.png"
          alt2="Workers offloading supply truck"
          img3="/images/distribution-3.png"
          alt3="Workers offloading truck"
        />
        <MobileBody />
      </section>
    </div>
  );
};

export default Distribution;
