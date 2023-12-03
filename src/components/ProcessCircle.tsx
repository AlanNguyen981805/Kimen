import React from "react";

const ProcessCircle = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="relative w-60 h-60">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-200 stroke-current"
            stroke-width="1"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
          ></circle>
          <circle
            className="text-indigo-500  progress-ring__circle stroke-current"
            stroke-width="1"
            stroke-linecap="round"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke-dashoffset="calc(400 - (400 * 45) / 100)"
          ></circle>

          <text
            x="50"
            y="50"
            font-family="Verdana"
            font-size="12"
            text-anchor="middle"
            alignment-baseline="middle"
          >
            70%
          </text>
        </svg>
      </div>
      <div className="text-center">
        <h5 className="tracking-[3px] text-xl ">GROW ORGANIC</h5>
        <p className="text-[#6B6B6B] font-thin">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </div>
  );
};

export default ProcessCircle;
