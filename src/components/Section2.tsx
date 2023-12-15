import Image from "next/image";
import React from "react";

const Section2 = () => {
    const BenefitBox = ({icon, name}: {icon: string; name: string}) => {
        return (
            <div className="flex justify-center items-center flex-col w-1/2 mb-6">
              <Image
                src={icon}
                alt="Next.js Logo"
                width={60}
                height={30}
                priority
              />
              <span className="mt-5 block tracking-[3px]">{name}</span>
            </div>
        )
    }
  return (
    <div className="w-full flex px-[80px] mt-16">
      <div className="w-3/5 relative mx-auto flex justify-center">
        <div className="max-w-[370px]">
          <div>
            <span className="text-xl text-[#4b4b4b] italic">
              Tasty and fresh greens
            </span>
            <h4 className="text-3xl tracking-[8px]">ORGANIC FOOD</h4>
            <p className="text-[#6B6B6B] tracking-[1px] font-thin">
              Sed ut perspiciati aperiam unde omnisiste voluptatem accusantium
              dolorem que ladan tiumus dolor.
            </p>
          </div>
          <div className="flex flex-wrap mt-10">
            <BenefitBox icon={'/svgs/grow.svg'} name="GROWING" />
            <BenefitBox icon={'/svgs/sodium.svg'} name="NO SODIUM" />
            <BenefitBox icon={'/svgs/ecological.svg'} name="ECOLOGICAL" />
            <BenefitBox icon={'/svgs/friendly.svg'} name="FRIENDLY" />
            <BenefitBox icon={'/svgs/water.svg'} name="WATERING" />
            <BenefitBox icon={'/svgs/organic.svg'} name="ORGANIC" />
          </div>
        </div>
      </div>
      <div className="w-2/5 flex items-start gap-4 justify-center flex-col">
        <Image
          src={"/Kimen/fragrance.jpeg"}
          width={300}
          height={100}
          sizes="100vw"
          alt="section"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Section2;
