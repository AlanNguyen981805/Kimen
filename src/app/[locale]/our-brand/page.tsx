import { Section, Section2, Timeline } from "@/components";
import Image from "next/image";

const OurHistory = () => {
  return (
    <div>
      <div className="relative h-[500px] translate-y-[100px]">
        <Image
          src={"/About-us-TA-parallax.jpg"}
          fill
          objectFit="cover"
          alt="about-us"
        />
      </div>

      <div className="flex flex-col items-center justify-center py-20 gap-4 w-1/3 mt-10 mx-auto">
        <span className="text-xl text-[#4B4B4B] ">Organica Seeds Growth</span>
        <h6 className="tracking-[3px] text-3xl text-[#000] uppercase">
          A PLACE WITH HISTORY
        </h6>
        <p className="text-lg text-[#6B6B6B] text-center">
          Sed ut perspiciatis aperiam unde omnis istetus error volupta dolorem
          que laudantium, totam rem.
        </p>
      </div>

      <div className="py-10">
        <Timeline />
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
    </div>
  );
};

export default OurHistory;
