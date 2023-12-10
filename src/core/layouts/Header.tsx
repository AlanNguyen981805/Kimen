import { Menu, WrapMenu } from "@/components";
import Image from "next/image";

const Header = () => {
  return (
    <WrapMenu>
      <div>
        <Image src={"/logo.jpg"} width={100} height={50} alt="logo" />
      </div>

      <Menu />
    </WrapMenu>
  );
};

export default Header;
