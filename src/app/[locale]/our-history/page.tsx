import { Section, Section2, Timeline } from "@/components";
import Image from "next/image";

const OurHistory = () => {
  return (
    <div>
      <div className="relative h-[500px]">
        <Image
          src={"/About-us-TA-parallax.jpg"}
          fill
          objectFit="cover"
          alt="about-us"
        />
      </div>

      <div className="flex flex-col items-center justify-center py-20 gap-4 w-1/4 mx-auto">
        <span className="text-xl text-[#4B4B4B] ">Organica Seeds Growth</span>
        <h6 className="tracking-[3px] text-3xl text-[#000] uppercase">
          A PLACE WITH HISTORY
        </h6>
        <p className="text-lg text-[#6B6B6B] text-center">
          Sed ut perspiciatis aperiam unde omnis istetus error volupta dolorem
          que laudantium, totam rem.
        </p>
      </div>

      <div className="py-10">
        <Timeline />
      </div>

      <Section />

      <Section2 />
    </div>
  );
};

export default OurHistory;
