import Image from "next/image";
import React from "react";

interface IProps {
    urlImage: string;
    cate: string;
    title: string;
    desc: string;
}

const Section = () => {
  return (
    <div className="w-full flex px-[80px]">
      <div className="w-3/5 relative">
        <Image
          src={"/products/Main-home-img1.jpg"}
          width={300}
          height={100}
          sizes="100vw"
          alt="section"
          className="w-full h-auto pr-[100px]"
        />
      </div>
      <div className="w-2/5 flex items-start gap-4 justify-center flex-col">
        <span className="text-xl text-[#4b4b4b] italic">Tasty and fresh greens</span>
        <h4 className="text-3xl tracking-[8px]">FINEST QUALITY</h4>
        <p className="text-[#6B6B6B] tracking-[1px] font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque explicabo laudantium? Amet vel sapiente consequatur ab eaque necessitatibus excepturi, error magni tempore dolores nobis, praesentium voluptates ut officia ducimus ea iste omnis natus qui mollitia id tempora. Voluptates excepturi repellendus delectus impedit nihil, sapiente dicta sit quia cum odit!</p>
      </div>
    </div>
  );
};

export default Section;
