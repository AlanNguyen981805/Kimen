import { Process, Section, Section2, Section3 } from "@/components";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex-col flex items-center justify-center h-[600px] -mb-[60px]">
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
          <p className="text-[21px] text-[#4b4b4b] w-3/5 font-thin  text-center">
            Crafting the essence of nature, Kimen stands out as the optimal
            selection for fostering happiness, vitality, and healthier
            lifestyles through premium-quality products.
          </p>
          <h1 className="text-[60px] tracking-[8px] mt-5">EXPLORING KIMEN</h1>
        </div>
      </div>

      <Section2
        cate="FRAGRANCE"
        title="Innovation"
        imgUrl="/Kimen/hinh_5.jpg"
        desc="Welcome to our world of innovation, where subtlety meets elegance. The art of fragrance composition intertwines with luxury and sophistication, as premium scents convey positive messages, offering genuine olfactory experiences. Partner with a leading French manufacturer in the fragrance industry, specializing in personal care, aircare, and home care."
      />

      <Section3
        title=""
        cate="Fragrance Certifications:"
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
      />

      <Section3
        image="/Kimen/hinh_6.jpg"
        cate="Flavor Certifications:"
        title=""
        listItem={[
          "HALAL",
          "FSSC 22000",
          "ISO 9001",
          "KOSHER",
          "VEGAN CERTIFICATE",
          "NATURAL FLAVOUR",
        ]}
        reverse
      />
      <div className="py-4">
        <Section2
          cate="FLAVOUR"
          title="Discover Flavors with Us!"
          desc="Delve into the world of flavor, a key protagonist in life's rich tapestry, especially within the vibrant Food and Beverage industry. As proud representatives of a distinguished Spanish flavor house, we bring the essence of Spain's culinary artistry to your palate. Explore the significance of taste and embark on a sensory journey with us, where every flavor becomes a cherished memory."
          imgUrl="/Kimen/hinh_4.jpg"
          isShowList={false}
        />
      </div>

      {/* <div className="mt-16">
        <Section
          cate="OTHERS"
          title="ESSENTIAL OILS"
          desc="There are numerous essential oils, each with its own unique scent and potential benefits. Examples include lavender, peppermint, eucalyptus, tea tree, chamomile, and ylang ylang..."
          urlImage="/Kimen/OTHER.webp"
        />
      </div> */}

      {/* <div className="flex flex-col justify-center items-center py-[100px] bg-[#F3EEE9] mt-20">
        <span className="text-xl">The cultivation process</span>
        <h3 className="text-[36px] tracking-[3px]">OUR GARDEN PROGRESS</h3>

        <Process />
      </div> */}

      <Section2
        title="Discover Pure Essence with Our Essential Oils"
        cate="ESSENTIAL OILS:"
        imgUrl="/Kimen/oils.jpeg"
        desc="Unveil the essence of nature with our premium essential oils, sourced from a trusted US supplier. From soothing lavender to invigorating citrus blends, each bottle embodies the highest quality. Elevate your senses and well-being with KIMEN"
        isShowList={false}
        revert
      />

      <div className="mt-10">
        <Section2
          cate="KIMEN HERB"
          title="Where Nature Meets Serenity"
          desc="Welcome to Kimen Herb, where nature's finest essences come together to create a harmonious blend of aromatherapy oils designed to rejuvenate your mind, body, and soul. Our passion for harnessing the power of herbs and botanicals has led us to craft a range of ready-to-use aromatherapy oils that promise to elevate your sensory experience."
          imgUrl="/Kimen/hurb.png"
          isShowList={false}
        />
      </div>
    </>
  );
};

export default Home;
