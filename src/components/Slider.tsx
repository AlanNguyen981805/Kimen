"use client";

import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderSlick from "react-slick";

interface ICommentGuest {
  title: string;
  name: string;
  answer: string;
}

const Slider = () => {
  const sliderRef = useRef<any>(null);

  const comments = [
    {
      name: "Samantha Turner, CEO",
      title: "Exceptional Scents",
      answer: "Samantha Turner, our visionary CEO, leads us in curating exceptional scents sourced globally. Each fragrance is meticulously crafted to perfection, reflecting the essence of your brand and providing a sensory journey that transcends borders."
    },
    {
      name: "David Chen, Sales Manager",
      title: "Fragrance Journey",
      answer: "Embark on a captivating fragrance journey with David Chen, our Sales Manager. At the intersection of quality and customization, we offer a unique experience where your individuality meets our commitment to excellence. Your fragrance story begins here."
    },
    {
      name: "Alexandra Rodriguez, Head Perfumer",
      title: "Crafting Scents",
      answer: "Crafting scents that tell compelling stories is the expertise of Alexandra Rodriguez, our Head Perfumer. Each fragrance is an artful expression, embodying the heart of our commitment to excellence. Join us in experiencing the extraordinary world of fragrance."
    },
    {
      name: "Michael Patel, Customer Relations",
      title: "Global Community",
      answer: "As the bridge connecting us with a global community, Michael Patel, our Customer Relations expert, emphasizes the power of testimonials. Join this trusting community and experience aromatic brilliance firsthand. Your trust speaks volumes, inviting you to explore the unparalleled world of fragrance."
    },
  ];
  

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const CommetGuest = ({ answer, name, title }: ICommentGuest) => {
    return (
      <div className="w-4/6 flex flex-col items-center justify-center">
        <p className="text-lg font-thin text-center text-[#6B6B6B] tracking-[1px]">
          {answer}
        </p>

        <p className="mt-8 text-xl tracking-[3px]">{name}</p>
        <span className="mt-4 text-[#4b4b4b] text-xl">{title}</span>
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
        {comments.map((comment, index) => (
          <div className="!flex items-center justify-center" key={index}>
            <CommetGuest answer={comment.answer} name={comment.name} title={comment.title} />
          </div>
        ))}
        </SliderSlick>
      </div>
    </div>
  );
};

export default Slider;
