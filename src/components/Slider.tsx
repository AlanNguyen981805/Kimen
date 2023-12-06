"use client"

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderSlick from "react-slick";
import Section from "./Section";

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red", width: 50 }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green",  width: 50 }}
        onClick={onClick}
      />
    );
  }
  

const Slider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    const CommetGuest = () => {
        return (
            <div className="w-1/2 flex flex-col items-center justify-center">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum debitis reiciendis inventore aliquam repellat obcaecati id voluptates modi illo aspernatur!</p>

                <span>MACCO RIOC</span>
                <span>Director</span>
            </div>
        )
    }
  return (
    <div>
      <div className="px-36">
        <SliderSlick {...settings}>
          <div>
            <CommetGuest />
          </div>
          <div>
          <CommetGuest />
          </div>
          <div>
          <CommetGuest />
          </div>
          <div>
          <CommetGuest />
          </div>
        </SliderSlick>
      </div>
    </div>
  );
};

export default Slider;
