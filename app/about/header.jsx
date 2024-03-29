import Image from "next/image";

const Header = () => {
  return (
    <div className="hidden sm:flex gap-10 justify-center">
      <div className="flex flex-col gap-10 mt-[6.25rem]">
        <div className="rounded-lg overflow-hidden border-2 border-transparent">
          <Image
            src="/images/distribution.png"
            width={242}
            height={294}
            className="h-[18.5rem]"
            alt="Delivery of goods"
          />
        </div>
        <div className="rounded-lg overflow-hidden border-2 border-transparent">
          <Image
            src="/images/distribution-3.png"
            width={242}
            height={294}
            className="h-[18.5rem]"
            alt="Supplies of various goods"
          />
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="rounded-lg overflow-hidden border-2 border-transparent">
          <Image
            src="/images/distribution-2.png"
            width={242}
            height={294}
            className="h-[18.5rem]"
            alt="Truck stocked with goods"
          />
        </div>
        <div className="rounded-lg overflow-hidden border-2 border-transparent">
          <Image
            src="/images/distribution-4.png"
            width={242}
            height={294}
            className="h-[18.5rem]"
            alt="Supply pallet"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
