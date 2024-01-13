import { Section, Section2, Slider } from "@/components";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  const BenefitBox = ({ icon, name }: { icon: string; name: string }) => {
    return (
      <div className="flex justify-center px-14 items-center flex-col w-1/2 mb-6 ">
        <Image src={icon} alt="Next.js Logo" width={60} height={30} priority />
        <span className="mt-5 block tracking-[3px]">{name}</span>

        <p className="text-center text-[#6B6B6B] text-base pt-3">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        </p>
      </div>
    );
  };

  return (
    <div className="translate-y-[100px]">
      <div className="relative h-[500px] flex items-center justify-center">
        <Image
          src={"/About-us-TA-parallax.jpg"}
          fill
          objectFit="cover"
          alt="about-us"
        />
        <div className="z-10 text-center">
          <p className="text-xl text-[#737373]">More to know</p>
          <h3 className="text-4xl text-[#000] tracking-[6px]">ABOUT US</h3>
        </div>
      </div>

      <div className="flex py-28">
        <BenefitBox icon={"/svgs/grow.svg"} name="GROWING ORGANIC" />
        <BenefitBox icon={"/svgs/grow.svg"} name="HARVEST PLAN" />
        <BenefitBox icon={"/svgs/grow.svg"} name="SEED PLANTING" />
        <BenefitBox icon={"/svgs/grow.svg"} name="VEGGIE CARE" />
      </div>

      <Section
        cate="FLAVOUR"
        title="Unlimited - Enjoy Sensory Experiences"
        desc="Co-operate with one of the leading Spanish manufacturers of flavours for the food sector, with more than half a century of experience designing and making sweet and savory flavours Natural , full certificate ,water soluble ,oil soluble, emulsion , powder form"
        urlImage="/Kimen/hinh_4.jpg"
      />

      <section className="my-20">
        <div className="flex flex-col items-center justify-center pt-12 pb-6">
          <Image
            src={"/Testimonials-Heart.png"}
            width={50}
            height={50}
            alt="about-us"
          />
          <h3 className="uppercase text-2xl pt-4">What they are saying</h3>
        </div>

        <Slider />
      </section>

      <Section2
        cate="FRAGRANCE"
        title="Innovation – subtle and elegant"
        imgUrl="/Kimen/hinh_5.jpg"
        desc="The art of fragrance composition is intimately associated with the world of luxury and sophistication. Premium fragrances move and send positive messages, delivering true olfactory experiences. Co-operate with one of big group France manufactures of fragrances for personal care, aircare and home care"
      />

      <div className="w-full h-[400px] relative mt-20">
        <Image
          src={"/About-us-img4.jpg"}
          fill
          objectFit="cover"
          alt="About-us-img4"
        />
      </div>
    </div>
  );
};

export default AboutUs;
