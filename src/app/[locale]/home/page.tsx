import { Process, Section, Section2, Section3 } from "@/components";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex-col flex items-center justify-center h-[600px] ">
        <Image
          src={"/Kimen/hinh_2.png"}
          width={200}
          height={100}
          alt="Product1"
          className="absolute -right-2"
        />
        {/* <Image
          src={"/products/product2.png"}
          width={100}
          height={100}
          alt="Product2"
          className="absolute right-[18%] top-[20%] animate-wiggle2"
        /> */}
        {/* <Image
          src={"/Kimen/hinh_3.jpeg"}
          width={250}
          height={100}
          alt="Product3"
          className="absolute right-[60%] top-0"
        /> */}
        <Image
          src={"/Kimen/hinh_1.jpg"}
          width={150}
          height={100}
          alt="Product4"
          className="absolute right-[14%] top-[12%] animate-wiggle2"
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
            Creating aroma of nature
          </span>
          <h1 className="text-[60px] tracking-[8px]">FLAVOUR & FRAGRANCE</h1>
          <p className="text-[21px] text-[#4b4b4b] w-3/5 font-thin  text-center">
            Kimen is the best choice for happlier , energy , healthier lives
            with quanlity products
          </p>
        </div>
      </div>

      <Section
        cate="FLAVOUR"
        title="Unlimited - Enjoy Sensory Experiences"
        desc="Co-operate with one of the leading Spanish manufacturers of flavours for the food sector, with more than half a century of experience designing and making sweet and savory flavours Natural , full certificate ,water soluble ,oil soluble, emulsion , powder form"
        urlImage="/Kimen/hinh_4.jpg"
      />

      <Section2
        cate="FRAGRANCE"
        title="Innovation – subtle and elegant"
        imgUrl="/Kimen/hinh_5.jpg"
        desc="The art of fragrance composition is intimately associated with the world of luxury and sophistication. Premium fragrances move and send positive messages, delivering true olfactory experiences. Co-operate with one of big group France manufactures of fragrances for personal care, aircare and home care"
      />

      <div className="mt-16">
        <Section
          cate="OTHERS"
          title="ESSENTIAL OILS"
          desc="There are numerous essential oils, each with its own unique scent and potential benefits. Examples include lavender, peppermint, eucalyptus, tea tree, chamomile, and ylang ylang..."
          urlImage="/Kimen/OTHER.webp"
        />
      </div>

      <div className="flex flex-col justify-center items-center py-[100px] bg-[#F3EEE9] mt-20">
        <span className="text-xl">The cultivation process</span>
        <h3 className="text-[36px] tracking-[3px]">OUR GARDEN PROGRESS</h3>

        <Process />
      </div>

      <Section3
        image="/Kimen/hinh_6.jpg"
        cate="Certificate flavour"
        title=""
        listItem={[
          "HALAL",
          "FSSC 22000",
          "ISO 9001",
          "KOSHER",
          "VEGAN CERTIFICATE",
          "NATURAL FLAVOUR",
        ]}
      />

      <Section3
        title=""
        cate="Certificate of fragrance"
        image="/Kimen/hinh_7.jpg"
        listItem={[
          "COA",
          "SDS",
          "Technical specifications",
          "Purity certificate",
          "Naturalness certificate",
          "IFRA certificate",
          "Certificate of compliance with the Cosmetics Directive 76/768/EEC.",
          "Cosmetic allergens certificate - Cosmetics Directive 2003/15/EEC.",
        ]}
        reverse
      />
    </>
  );
};

export default Home;
