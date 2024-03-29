"use client";
import Image from "next/image";
import { Button } from "@/components/shared";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      <header className="flex justify-between">
        <div className="w-[39rem] flex flex-col gap-8">
          <h1 className="text-6xl text-primary-blue font-semibold text-balance tracking-wide leading-[80px]">
            Discover the <br />
            Best{" "}
            <span className="text-primary-red">
              <ReactTyped
                strings={["Nigerian", "Afro Caribbean"]}
                typeSpeed={150}
                loop
                // startWhenVisible={true}
                showCursor={false}
              />
            </span>
            <br /> Food Products
          </h1>

          <p className="text-primary-gray/75 leading-8">
            We offer a wide range of food products with over 10 years of
            experience and we have established a network of reliable suppliers
            and partners in Nigeria and abroad. We guarantee fast delivery,
            competitive prices, and excellent customer service for every order
            you place with us.
          </p>
          <Button variant="primary" className="w-fit px-16 py-3 font-semibold">
            Explore our Services
          </Button>
        </div>
        <div className="rounded-lg overflow-hidden border-2 border-transparent">
          <Image src="/images/header-img.png" width={573} height={567} />
        </div>
      </header>
    </>
  );
};

export default Home;
