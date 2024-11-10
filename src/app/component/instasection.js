"use client";
import React from "react";
import Image from "next/image";
import InstaImg1 from "../image/insta-1.jpg";
import InstaImg2 from "../image/insta-2.jpg";
import InstaImg3 from "../image/insta-3.jpg";
import InstaImg4 from "../image/insta-4.jpg";
import InstaImg5 from "../image/insta-5.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function InstaSection() {
  return (
    <>
      <section className="flex flex-col gap-8 justify-center items-center pb-14 px-2">
        <div className="Insta-Heading-Div flex flex-col gap-2 justify-center items-center">
          <h2>
            <i className="fa-brands fa-instagram"></i> #ELLA ON INSTAGRAM
          </h2>
          <p>Phasellus lorem malesuada ligula pulvinar commodo maecenas</p>
        </div>
        <div className="flex justify-center overflow-hidden items-center gap-2 ">
          <button className="carousel-btn-2  swiper-btn-prev">
            <IoIosArrowBack />
          </button>

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
              nextEl: '.swiper-btn-next',
              prevEl: '.swiper-btn-prev',
            }}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="mySwiper swiper"
          >
            <SwiperSlide>
              <div className="swiper-slide overflow-hidden">
                <Image src={InstaImg1} alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide overflow-hidden">
                <Image src={InstaImg2} alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide overflow-hidden">
                <Image src={InstaImg3} alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide overflow-hidden">
                <Image src={InstaImg4} alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide overflow-hidden">
                <Image src={InstaImg5} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide overflow-hidden">
                <Image src={InstaImg3} alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide overflow-hidden">
                <Image src={InstaImg2} alt="img" />
              </div>
            </SwiperSlide>
          </Swiper>

          <button className="carousel-btn-2 swiper-btn-next">
            <IoIosArrowForward />
          </button>
        </div>

        <button className="insta-btn">View Gallery</button>
      </section>
    </>
  );
}

