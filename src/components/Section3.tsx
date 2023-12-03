import classNames from "classnames";
import Image from "next/image";
import React from "react";

interface IProps {
  reverse ?: boolean;
  image: string
}
const Section3 = ({ reverse = false }: IProps) => {
  return (
    <div
      className={classNames("w-full   flex  items-center", {
        "flex-row-reverse": reverse,
      })}
    >
      <div className="w-1/2 relative">
        <Image
          src={"/products/Main-home-img4.jpg"}
          sizes="100vw"
          width={300}
          height={100}
          alt="Main-home"
          className="w-full h-auto"
        />
      </div>
      <div className="w-1/2 flex flex-col items-center">
        <Image
          src={"/products/Main-home-img7.jpg"}
          width={300}
          height={200}
          alt="main"
        />
        <div className="max-w-[370px] flex gap-5">
          <span className="flex">
            <span>$</span> <span className="text-6xl">29</span>
          </span>
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl tracking-[2px]">MEDIUM PACKAGE</h4>
            <p className="text-[#6B6B6B] text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <ol>
              <li className="text-[#6B6B6B] text-lg">1 - Sản phẩm an toàn</li>
              <li className="text-[#6B6B6B] text-lg">
                2 - Tin cậy với khác hàng
              </li>
              <li className="text-[#6B6B6B] text-lg">3 - Chân thành</li>
              <li className="text-[#6B6B6B] text-lg">4 - sssssssssss</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
