import React from "react";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import { useSwiper } from "swiper/react";

const SlideButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-between items-center gap-[10PX] mb-3 mt-3 absolute inset-0 xl:inset-auto xl:justify-none xl:bottom-14 xl:right-0 z-20 ">
      <button 
        className="bg-third w-10 h-10 flex justify-center items-center"
        onClick={() => swiper.slidePrev()}
    >
        <GrFormPreviousLink size={32} color="#fefae0" />
      </button>
      <button 
        className="bg-third w-10 h-10 flex justify-center items-center"
        onClick={() => swiper.slideNext()}
      >
        <GrFormNextLink size={32} color="#fefae0" />
      </button>
    </div>
  );
};

export default SlideButton;
