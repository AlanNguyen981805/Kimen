import Image from "next/image";
import React from "react";

interface IProps {
  title: string;
  cate: string;
  desc: string;
  imgUrl: string;
}

const Section2 = ({ cate, desc, title, imgUrl }: IProps) => {
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
              <span className="mt-5 block tracking-[3px]">{name.toUpperCase()}</span>
            </div>
        )
    }
  return (
    <div className="w-full flex px-[80px] mt-16">
      <div className="w-3/5 relative mx-auto flex justify-center">
        <div className="max-w-[400px]">
          <div>
            <span className="text-xl text-[#4b4b4b] italic">
              {cate}
            </span>
            <h4 className="text-3xl">{title}</h4>
            <p className="text-[#6B6B6B] tracking-[1px] font-thin">
              {desc}
            </p>
          </div>
          <div className="flex flex-wrap mt-10">
            <BenefitBox icon={'/svgs/grow.svg'} name="Natural" />
            <BenefitBox icon={'/svgs/sodium.svg'} name="non GMO" />
            <BenefitBox icon={'/svgs/ecological.svg'} name="non Allergen" />
            <BenefitBox icon={'/svgs/friendly.svg'} name="organic" />
            <BenefitBox icon={'/svgs/water.svg'} name="function" />
            <BenefitBox icon={'/svgs/organic.svg'} name="healthy" />
          </div>
        </div>
      </div>
      <div className="w-2/5 flex items-start gap-4 justify-center flex-col">
        <Image
          src={imgUrl}
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
