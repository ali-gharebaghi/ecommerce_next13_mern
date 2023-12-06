"use client";
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import  {
  Navigation,
  Pagination,
  Scrollbar,
  
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

SwiperCore.use([Autoplay]);

const MainSlider = () => {

  return (
    <main>
      <section className=" container mx-auto p-4">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          pagination
          autoplay={{ delay: 3000 }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <div className=" h-[20rem] bg-yellow-500 rounded-md flex justify-center items-center">
              Slide 1
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-[20rem] bg-yellow-500 rounded-md flex justify-center items-center">
              Slide 2
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-[20rem] bg-yellow-500 rounded-md flex justify-center items-center">
              Slide 3
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-[20rem] bg-yellow-500 rounded-md flex justify-center items-center">
              Slide 4
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-[20rem] bg-yellow-500 rounded-md flex justify-center items-center">
              Slide 5
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-[20rem] bg-yellow-500 rounded-md flex justify-center items-center">
              Slide6
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-[20rem] bg-yellow-500 rounded-md flex justify-center items-center">
              Slide 7
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </main>
  );
};

export default MainSlider;
