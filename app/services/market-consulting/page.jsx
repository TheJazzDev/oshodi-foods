import { ImageGrid } from "@/components/shared";
import DeskBody from "./deskBody";
import MobileBody from "./mobileBody";

const Consulting = () => {
  return (
    <div className="px-4 sm:px-20 ">
      <div className="text-center">
        <p className="text-sm sm:text-base">Services</p>
        <p className="text-primary-blue mt-2 text-lg sm:text-[32px] font-medium">
          Market Consulting
        </p>
      </div>

      <section className="flex flex-col sm:flex-row sm:justify-between">
        <DeskBody />
        <ImageGrid
          img1="/images/consult.png"
          alt1="Consultant addressing customer"
          img2="/images/consult-2.png"
          alt2="Consultant addressing customer"
          img3="/images/consult-3.png"
          alt3="Man with headset"
        />
        <MobileBody />
      </section>
    </div>
  );
};

export default Consulting;
