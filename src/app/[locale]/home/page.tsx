import { Process, Section, Section2, Section3 } from "@/components";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex-col flex items-center justify-center h-[600px] ">
        <Image
          src={"/Kimen/bap-cai.webp"}
          width={200}
          height={100}
          alt="Product1"
          className="absolute -right-2"
        />
        <Image
          src={"/products/product2.png"}
          width={100}
          height={100}
          alt="Product2"
          className="absolute right-[18%] top-[20%] animate-wiggle2"
        />
        <Image
          src={"/Kimen/cu-gung.jpg"}
          width={250}
          height={100}
          alt="Product3"
          className="absolute right-[60%] top-0"
        />
        <Image
          src={"/products/product4.png"}
          width={100}
          height={100}
          alt="Product4"
          className="absolute right-[12%] top-[12%] animate-wiggle2"
        />
        <Image
          src={"/Kimen/bap-cai.webp"}
          width={250}
          height={100}
          alt="Product5"
          className="absolute right-[60%] -left-2  animate-wiggle"
        />

        <div className="flex items-center flex-col justify-center">
          <span className="italic text-[23px] text-[#4b4b4b]">
            The taste of nature
          </span>
          <h1 className="text-[60px] tracking-[8px]">ORGANIC FOOD</h1>
          <p className="text-[21px] text-[#4b4b4b] w-3/5 font-thin  text-center">
            Our organic garden is the best choice for a healthy lifestyle.
            Quality organic produce with no additives.
          </p>
        </div>
      </div>

      <Section />

      <Section2 />

      <div className="mt-16">
        <Section />
      </div>

      <div className="flex flex-col justify-center items-center py-[100px] bg-[#F3EEE9] mt-20">
        <span className="text-xl">The cultivation process</span>
        <h3 className="text-[36px] tracking-[3px]">OUR GARDEN PROGRESS</h3>

        <Process />
      </div>

      <Section3 image="/Kimen/OTHER.webp" />

      <Section3 image="/products/Main-home-img4.jpg" reverse />
    </>
  );
};

export default Home;
