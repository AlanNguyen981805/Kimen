import { INFO_WEBSITE } from "@/app/constants/core";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#f3eee9] mt-24 ">
      <div className="flex w-full justify-center py-24">
        <div className="w-1/5">
          <h4 className="text-2xl tracking-[3px]">Energy & Growth</h4>
          <p className="text-[#2b2b2b] font-thin">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            corporis rem inventore sint.
          </p>
        </div>
        <div className="w-1/5">
          <h4 className="text-xl tracking-[2px]">READ MORE</h4>
          <ul className="flex flex-col gap-2 mt-2">
            <li className="text-[#2b2b2b] font-thin">Vietnam Airlines Training</li>
            <li className="text-[#2b2b2b] font-thin">Grass Perfume</li>
            <li className="text-[#2b2b2b] font-thin">KIMEN Recruitment</li>
          </ul>
        </div>
        <div className="w-1/5">
          <h4 className="text-xl tracking-[2px]">CONTACT US</h4>
          <ul className="flex flex-col gap-2 mt-2">
            <li className="text-[#2b2b2b] font-thin">{INFO_WEBSITE.email}</li>
            <li className="text-[#2b2b2b] font-thin">{INFO_WEBSITE.emaily}</li>
            <li className="text-[#2b2b2b] font-thin">{INFO_WEBSITE.phone}</li>
            <li className="text-[#2b2b2b] font-thin">{INFO_WEBSITE.address}</li>
          </ul>
        </div>
        <div className="w-1/5 relative">
          <Image src={"/Footer-map.png"} objectFit="contain" fill alt="footer map" />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col py-4 border-t border-2 border-t-[#898989]">
        <span >© 2021 Qode Interactive, All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
