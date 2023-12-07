import { Map, RightContact } from "@/components";
import Image from "next/image";

const ContactUs = () => {
  return (
    <>
      <div className="relative h-[500px] flex items-center justify-center">
        <Image
          src={"/About-us-TA-parallax.jpg"}
          fill
          objectFit="cover"
          alt="about-us"
        />
        <div className="z-10 text-center">
          <p className="text-xl text-[#737373]">Hello there</p>
          <h3 className="text-4xl text-[#000] tracking-[6px] uppercase">CONTACT US</h3>
        </div>
      </div>
      <div className="w-[1400px] mt-20 mx-auto flex gap-20">
        <div className="w-1/2 h-[400px]">
          <Map />
        </div>
        <div className="w-1/4">
          <RightContact />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
