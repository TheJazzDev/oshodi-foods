import { ImageGrid } from "@/components/shared";
import MobileBody from "./mobileBody";
import DeskBody from "./deskBody";

const Commodity = () => {
    return (
      <div className="px-4 sm:px-20 ">
        <div className="text-center">
          <p className="text-sm sm:text-base">Services</p>
          <p className="text-primary-blue mt-2 text-lg sm:text-[32px] font-medium">
            Commodity Procurement
          </p>
        </div>

        <section className="flex flex-col sm:flex-row sm:justify-between">
          <DeskBody />
          <ImageGrid
            img1="/images/commodity.png"
            alt1="African food grains"
            img2="/images/honey-beans.png"
            alt2="Packaged honey beans"
            img3="/images/gari.png"
            alt3="Packaged garri"
          />
          <MobileBody />
        </section>
      </div>
    );
}

export default Commodity