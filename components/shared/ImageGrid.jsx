import Image from "next/image";

const ImageGrid = ({ img1, alt1, img2, alt2, img3, alt3 }) => {
  return (
    <section className="flex sm:flex-col gap-5 sm:gap-6 mt-12 sm:mt-16 items-center sm:items-start">
      <div className="block sm:flex">
        <div className="rounded-lg overflow-hidden border-2 border-transparent">
          <Image
            src={img1}
            width={408}
            height={408}
            className="h-[14.9rem] sm:h-[25.5rem] "
            alt={alt1}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
        <div className="rounded-lg overflow-hidden border-2 border-transparent">
          <Image
            src={img2}
            width={192}
            height={220}
            className="h-[7.1rem] sm:h-[13.75rem] "
            alt={alt2}
          />
        </div>
        <div className="rounded-lg overflow-hidden border-2 border-transparent">
          <Image
            src={img3}
            width={192}
            height={220}
            className="h-[7.1rem] sm:h-[13.75rem] "
            alt={alt3}
          />
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
