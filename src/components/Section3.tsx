import classNames from "classnames";
import Image from "next/image";
import React from "react";

interface IProps {
  reverse?: boolean;
  image: string;
  title: string;
  cate: string;
  listItem: string[];
}
const Section3 = ({
  reverse = false,
  cate,
  image,
  listItem,
  title,
}: IProps) => {
  return (
    <div
      className={classNames("w-full   flex  items-center", {
        "flex-row-reverse": reverse,
      })}
    >
      <div className="w-1/2 relative">
        <Image
          src={image}
          sizes="100vw"
          width={300}
          height={100}
          alt="Main-home"
          className="w-full h-auto"
        />
      </div>
      <div className="w-1/2 flex flex-col items-center">
        {/* <Image
          src={"/products/Main-home-img7.jpg"}
          width={300}
          height={200}
          alt="main"
        /> */}
        <div className="max-w-[400px] flex gap-5">
          {/* <span className="flex">
            <span>$</span> <span className="text-6xl">29</span>
          </span> */}
          <div className="flex flex-col gap-4">
            <h4 className="text-4xl tracking-[2px]">{cate}</h4>
            <p className="text-[#6B6B6B] text-lg">{title} </p>
            <ol>
              {
                listItem.map((item, index) => {
                  return (
                    <li key={index} className="text-[#6B6B6B] text-lg">{index + 1} - {item}</li>
                  )
                })
              }
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
