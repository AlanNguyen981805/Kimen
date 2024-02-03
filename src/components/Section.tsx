import classNames from "classnames";
import Image from "next/image";
import React from "react";

interface IProps {
    urlImage: string;
    cate: string;
    title: string;
    desc: string;
    reverse?: boolean
}

const Section = ({ cate, desc, title, urlImage, reverse = false }: IProps) => {
  return (
    <div className={classNames("w-full flex px-[80px]", {
      "flex-row-reverse": reverse
    })}>
      <div className="w-3/5 relative">
        <Image
          src={urlImage}
          width={300}
          height={100}
          sizes="100vw"
          alt="section"
          className="w-full h-auto pr-[100px]"
        />
      </div>
      <div className="w-2/5 flex items-start gap-4 justify-center flex-col">
        <span className="text-xl text-[#4b4b4b] italic">{cate}</span>
        <h4 className="text-3xl">{title}</h4>
        <p className="text-[#6B6B6B] tracking-[1px] font-thin">{desc}</p>
      </div>
    </div>
  );
};

export default Section;
