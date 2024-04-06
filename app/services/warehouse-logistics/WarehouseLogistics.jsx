"use client";
import { ImageGrid } from "@/components/shared";
import DeskBody from "./deskBody";
import MobileBody from "./mobileBody";

const WarehouseLogistics = () => {
  return (
    <div className="px-4 sm:px-20 max-w-[1280px] mx-auto">
      <div className="text-center">
        <p className="text-sm sm:text-base">Services</p>
        <p className="text-primary-blue mt-2 text-lg sm:text-[32px] font-medium">
          Warehousing and Logistics
        </p>
      </div>

      <section className="flex flex-col lg:gap-20 sm:flex-row sm:justify-between">
        <DeskBody />
        <ImageGrid
          img1="/images/warehouse.png"
          alt1="Warehouse with stacked goods"
          img2="/images/warehouse-2.png"
          alt2="Truck parked at loading bay"
          img3="/images/delivery-truck.png"
          alt3="Delivery-truck"
        />
        <MobileBody />
      </section>
    </div>
  );
};

export default WarehouseLogistics;
