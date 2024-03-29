import Image from "next/image";

const MobileHeader = () => {
  return (
    <div className="flex flex-wrap sm:hidden gap-6 justify-center">
      <div className="rounded-lg overflow-hidden border-2 border-transparent">
        <Image
          src="/images/distribution.png"
          width={137}
          height={167}
          alt="Delivery of goods"
          className="h-[10.5rem]"
        />
      </div>
      <div className="rounded-lg overflow-hidden border-2 border-transparent">
        <Image
          src="/images/distribution-2.png"
          width={137}
          height={167}
          alt="Truck stocked with goods"
          className="h-[10.5rem]"
        />
      </div>
      <div className="rounded-lg overflow-hidden border-2 border-transparent">
        <Image
          src="/images/distribution-3.png"
          width={137}
          height={167}
          alt="Supplies of various goods"
          className="h-[10.5rem]"
        />
      </div>
      <div className="rounded-lg overflow-hidden border-2 border-transparent">
        <Image
          src="/images/distribution-4.png"
          width={137}
          height={167}
          alt="Supply pallet"
          className="h-[10.5rem]"
        />
      </div>
    </div>
  );
};

export default MobileHeader;
