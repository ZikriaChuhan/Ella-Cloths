'use client'
import './shop.css'
import Header from "../component/header";

import React, { useState } from "react";
import ImgCards from "../component/imgcards";
import SideFilter from "../component/sidefilter";
import Footer from '../component/footer';
import { ApiError } from 'next/dist/server/api-utils';
import ApiProductCard from '../component/apiporoduct';
import ProductSkeleton from '../component/productskeleton';

export default function Shop() {

  const [sortValue, setSortValue] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSortChange = (newSortValue) => {
    setSortValue(newSortValue);
  };

  const handlePriceRangeChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };


  return (
    <>
      <Header />

      <section className=" flex ">
        <SideFilter onSortChange={handleSortChange} onPriceChange={handlePriceRangeChange}  />
        <div className=" flex flex-col justify-start items-center w-full">
          <ApiProductCard sortBy={sortValue} priceRange={priceRange} />
        </div>
      </section>

      <Footer />
    </>
  );
}
