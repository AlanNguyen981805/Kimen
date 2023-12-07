import { Menu } from "@/components";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between items-center  px-10">
      <div>
        <Image src={"/logo.jpg"} width={100} height={50} alt="logo" />
      </div>
      
      <Menu />
    </div>
  );
};

export default Header;
