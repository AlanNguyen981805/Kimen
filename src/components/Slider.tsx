"use client";

import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderSlick from "react-slick";

const Slider = () => {
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const CommetGuest = () => {
    return (
      <div className="w-4/6 flex flex-col items-center justify-center">
        <p className="text-lg font-thin text-center text-[#6B6B6B] tracking-[1px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo.
        </p>

        <p className="mt-8 text-xl tracking-[3px]">MACCO RIOC</p>
        <span className="mt-4 text-[#4b4b4b] text-xl">Director</span>
      </div>
    );
  };
  return (
    <div>
      <div className="w-3/5 mx-auto relative">
        <button
          onClick={() => sliderRef?.current?.slickPrev()}
          className="absolute -left-6 z-10 top-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M21 12H3.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M3 12L10 19M3 12L10 5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="12;0"/></path></g></svg>

        </button>
        <button
          onClick={() => sliderRef?.current?.slickNext()}
          className="absolute -right-6 z-10 top-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M21 12H3.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M3 12L10 19M3 12L10 5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="12;0"/></path></g></g></svg>

        </button>
        <SliderSlick {...settings} ref={sliderRef}>
          <div className="!flex items-center justify-center">
            <CommetGuest />
          </div>

          <div className="!flex items-center justify-center">
            <CommetGuest />
          </div>

          <div className="!flex items-center justify-center">
            <CommetGuest />
          </div>

          <div className="!flex items-center justify-center">
            <CommetGuest />
          </div>
        </SliderSlick>
      </div>
    </div>
  );
};

export default Slider;
