'use client'
import React, { useEffect, useState } from 'react';

import Image from "next/image";
import SubBanner1 from "../image/sub-banner-1.jpg";
import SubBanner2 from "../image/sub-banner-2.jpg";
import SubBanner3 from "../image/sub-banner-3.jpg";

export default function CategoriesBanner() {
  return (
    <>
      <section>
        <div className="flex justify-center flex-wrap items-center gap-8 py-14 max-lg:gap-3 max-lg:py-5 max-lg:px-2">
          <div className="feature-Img-Div">
            <Image src={SubBanner1} alt="img" />
            <h3 className=" ">EDITOR&apos;S PICK</h3>
          </div>
          <div className="feature-Img-Div">
            <Image src={SubBanner2} alt="img" />
            <h3 className=" ">SHOES</h3>
          </div>
          <div className="feature-Img-Div">
            <Image src={SubBanner3} alt="img" />
            <h3 className=" ">ACCESSORIES</h3>
          </div>
        </div>
      </section>
    </>
  );
}
