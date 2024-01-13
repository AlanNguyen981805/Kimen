import { Process, Section, Section2 } from "@/components";

const OurHistory = () => {
  return (
    <div className="translate-y-[100px]">
      <div className="bg-[#f3eee9] h-[270px] flex items-center flex-col justify-center ">
        <span className="text-lg">More to know now</span>
        <h6 className="text-5xl tracking-[4px] uppercase">OUR PROCESS</h6>
      </div>

      <div className="flex items-center justify-center py-20">
        <Process />
      </div>

      <Section />
      <Section2 />
      <Section />
      <Section2 />
    </div>
  );
};

export default OurHistory;
