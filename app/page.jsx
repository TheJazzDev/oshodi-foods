"use client";
import Image from "next/image";
import { Button } from "@/components/shared";
import { ReactTyped } from "react-typed";
import Services from "./services/page";

const Home = () => {
  return (
    <>
      <header className="flex flex-col sm:flex-row gap-6 sm:gap-0 justify-between">
        <div className="w-[22rem] sm:w-[39rem] flex flex-col gap-6 sm:gap-8">
          <h1 className="text-2xl sm:text-6xl text-primary-blue font-semibold text-balance tracking-wide leading-8 sm:leading-[80px]">
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

          <p className="text-primary-gray/75 left-6 sm:leading-8">
            We offer a wide range of food products with over 10 years of
            experience and we have established a network of reliable suppliers
            and partners in Nigeria and abroad. We guarantee fast delivery,
            competitive prices, and excellent customer service for every order
            you place with us.
          </p>
          <Button
            variant="primary"
            className="w-fit px-16 py-3 font-semibold hidden sm:block"
          >
            Explore our Services
          </Button>
        </div>
        <div className="rounded-lg overflow-hidden border-2 border-transparent">
          <Image
            src="/images/header-img.png"
            width={573}
            height={567}
            alt="African foodstuff"
          />
        </div>

        <Button
          variant="primary"
          className="w-fit px-16 py-3 self-center font-semibold sm:hidden"
        >
          Explore our Services
        </Button>
      </header>

      <section className="mt-16 sm:mt-28">
        <Services />{" "}
      </section>
    </>
  );
};

export default Home;
