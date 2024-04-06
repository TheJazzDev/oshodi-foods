import Image from "next/image";

const RenderImages = ({ src, className, alt }) => {
  return (
    <Image src={src} width={242} height={294} className={className} alt={alt} />
  );
};

const Images = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
      <div className="flex lg:flex-col gap-6 lg:gap-10 lg:mt-[6.25rem]">
        <RenderImages
          src="/images/distribution.png"
          alt="Delivery of goods"
          className="w-[137px] h-[167px] lg:w-[242px] lg:h-[292px] rounded-lg"
        />

        <RenderImages
          src="/images/distribution-3.png"
          alt="Supplies of various goods"
          className="w-[137px] h-[167px] lg:w-[242px] lg:h-[292px] rounded-lg"
        />
      </div>
      

      <div className="flex lg:flex-col gap-6 lg:gap-10">
        <RenderImages
          src="/images/distribution-2.png"
          alt="Truck stocked with goods"
          className="w-[137px] h-[167px] lg:w-[242px] lg:h-[292px] rounded-lg"
        />
        <RenderImages
          src="/images/distribution-4.png"
          alt="Supply pallet"
          className="w-[137px] h-[167px] lg:w-[242px] lg:h-[292px] rounded-lg"
        />
      </div>
    </div>
  );
};

export default Images;
