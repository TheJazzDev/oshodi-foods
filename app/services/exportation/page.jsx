"use client";
import { ImageGrid } from "@/components/shared";
import DeskBody from "./deskBody";
import MobileBody from "./mobileBody";

const Exportation = () => {
  return (
    <div className="px-4 sm:px-20 ">
      <div className="text-center">
        <p className="text-sm sm:text-base">Services</p>
        <p className="text-primary-blue mt-2 text-lg sm:text-[32px] font-medium">
          Global Exportation
        </p>
      </div>

      <section className="flex flex-col sm:flex-row sm:justify-between">
        <DeskBody />
        <ImageGrid
          img1="/images/cargo.png"
          alt1="Cargoes at dock"
          img2="/images/cargo-2.png"
          alt2="Ship loaded with cargoes"
          img3="/images/cargo-3.png"
          alt3="Loaded ship en route"
        />
        <MobileBody />
      </section>
    </div>
  );
};

export default Exportation;
