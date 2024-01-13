import { Process, Section, Section2 } from "@/components";

const OurHistory = () => {
  return (
    <div className="translate-y-[100px]">
      <div className="bg-[#f3eee9] h-[270px] flex items-center flex-col justify-center ">
        <span className="text-lg">More to know now</span>
        <h6 className="text-5xl tracking-[4px] uppercase">OUR PROCESS</h6>
      </div>

      <div className="flex items-center justify-center py-20">
        <Process />
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
