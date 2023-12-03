import { MENUS } from "@/app/constants/core";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center  px-10">
      <div>
        <Image src={"/logo.jpg"} width={100} height={50} alt="logo" />
      </div>
      <ul className="flex gap-6">
        {MENUS.map((menu) => (
          <li
            key={menu.key}
            className="relative uppercase ml-10 tracking-[1px] after:content-[''] after:bottom-[-5px] after:bg-pink-500 after:duration-300 cursor-pointer after:left-0 after:w-0 after:h-[2px] after:absolute hover:after:w-full"
          >
            {menu.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
