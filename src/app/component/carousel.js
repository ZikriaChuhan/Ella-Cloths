"use client";
import React from "react";
import Image from "next/image";
import CarouselImg1 from "../image/carousel-1.jpg";
import CarouselImg2 from "../image/carousel-2.jpg";
import CarouselImg3 from "../image/carousel-3.jpg";
import CarouselImg4 from "../image/carousel-4.jpg";
import CarouselImg5 from "../image/carousel-5.jpg";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


export default function CarouselSection() {
  return (
    <>
      <section className="carousel-Section py-14">
        <div className="flex justify-center items-center relative gap-2 px-2">

          <button className="carousel-btn swiper-bttn-prev">
          <IoIosArrowBack />
          </button>

          <div className="carousel-hid-control">
            <Swiper
            slidesPerView={1}
            spaceBetween={6}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 6,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 7,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 8,
              },
            }}
            mousewheel={true}
            keyboard={true}
            navigation={{
              nextEl: '.swiper-bttn-next',
              prevEl: '.swiper-bttn-prev',
            }}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="mySwiper swiper"
          >
            <SwiperSlide>
              <div >
                <Image src={CarouselImg1} alt="Partner 1" />
              </div>
              </SwiperSlide>
              
              <SwiperSlide>
              <div >
                <Image src={CarouselImg2} alt="Partner 1" />
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div >
                <Image src={CarouselImg3} alt="Partner 1" />
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div >
                <Image src={CarouselImg4} alt="Partner 1" />
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div >
                <Image src={CarouselImg5} alt="Partner 1" />
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div >
                <Image src={CarouselImg2} alt="Partner 1" />
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div >
                <Image src={CarouselImg4} alt="Partner 1" />
              </div>
              </SwiperSlide>
            </Swiper>
       
          </div>

          <button className="carousel-btn swiper-bttn-next">
          <IoIosArrowForward />
          </button>

        </div>
      </section>
    </>
  );
}
