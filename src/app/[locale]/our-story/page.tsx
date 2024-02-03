import { Section, Section2, Slider } from "@/components";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  const BenefitBox = ({ icon, name, desc }: { icon: string; name: string, desc: string }) => {
    return (
      <div className="flex justify-center px-4 items-center flex-col w-1/2 mb-6 ">
        <Image src={icon} alt="Next.js Logo" width={60} height={30} priority />
        <span className="mt-5 block tracking-[3px] uppercase">{name}</span>

        <p className="text-center text-[#6B6B6B] text-base pt-3">
          {desc}
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
          {/* <p className="text-xl text-[#737373]">More to know</p> */}
          <h3 className="text-6xl font-bold text-[#fff] tracking-[6px]">ABOUT US</h3>
        </div>
      </div>

      <div className="w-full mt-4 flex justify-center">
        <div className="w-2/3">
          <p className="text-center text-[#6B6B6B] tracking-[1px] text-lg">Our journey began in 2022, ignited by an ardent love for flavor, fragrance, and essential elements. With a wealth of experience exceeding a decade in commerce and consultancy for aromatic solutions, our founder has steadfastly guided clients in creating distinctive and successful products for both local and global markets.
          We firmly believe that triumph in the essential realm of flavors and fragrances transcends mere sales tactics; it demands an artful blend of passion and aesthetic discernment. Serving as dedicated representatives for prominent flavor and fragrance brands in Vietnam, we take pride in being dependable partners.
          Fueled by an unwavering commitment to perpetual learning and innovation, we pledge holistic solutions, addressing every need and surmounting challenges you may encounter. Join us in crafting unparalleled experiences in flavor, fragrance, and essential elements, as we champion creativity and excellence together.
          </p>
        </div>
      </div>
      <div className="flex pt-28 items-baseline">
        <BenefitBox icon={"/svgs/flavor.svg"} name="Flavour" desc="Delve into the world of flavor, a key protagonist in life's rich tapestry, especially within the vibrant Food and Beverage industry. As proud representatives of a distinguished Spanish flavor house, we bring the essence of Spain's culinary artistry to your palate. Explore the significance of taste and embark on a sensory journey with us, where every flavor becomes a cherished memory." />
        <BenefitBox icon={"/svgs/fragrance.svg"} name="Fragrance" desc="Welcome to our world of innovation, where subtlety meets elegance. The art of fragrance composition intertwines with luxury and sophistication, as premium scents convey positive messages, offering genuine olfactory experiences. Partner with a leading French manufacturer in the fragrance industry, specializing in personal care, aircare, and home care." />
        <BenefitBox icon={"/svgs/olive-oil.svg"} name="Essential Oils" desc="Unveil the essence of nature with our premium essential oils, sourced from a trusted US supplier. From soothing lavender to invigorating citrus blends, each bottle embodies the highest quality. Elevate your senses and well-being with KIMEN"/>
        <BenefitBox icon={"/svgs/herb.svg"} name="Kimen Herb" desc="Welcome to Kimen Herb, where nature's finest essences come together to create a harmonious blend of aromatherapy oils designed to rejuvenate your mind, body, and soul. Our passion for harnessing the power of herbs and botanicals has led us to craft a range of ready-to-use aromatherapy oils that promise to elevate your sensory experience." />
      </div>

      {/* <Section
        cate="FLAVOUR"
        title="Unlimited - Enjoy Sensory Experiences"
        desc="Co-operate with one of the leading Spanish manufacturers of flavours for the food sector, with more than half a century of experience designing and making sweet and savory flavours Natural , full certificate ,water soluble ,oil soluble, emulsion , powder form"
        urlImage="/Kimen/hinh_4.jpg"
      /> */}

      <section className="my-10">
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

      {/* <Section2
        cate="FRAGRANCE"
        title="Innovation – subtle and elegant"
        imgUrl="/Kimen/hinh_5.jpg"
        desc="The art of fragrance composition is intimately associated with the world of luxury and sophistication. Premium fragrances move and send positive messages, delivering true olfactory experiences. Co-operate with one of big group France manufactures of fragrances for personal care, aircare and home care"
      /> */}

      <div className="w-full h-[400px] relative mt-20">
        <Image
          src={"/Kimen/bg-huong-lieu.png"}
          fill
          objectFit="cover"
          alt="About-us-img4"
        />
      </div>
    </div>
  );
};

export default AboutUs;
