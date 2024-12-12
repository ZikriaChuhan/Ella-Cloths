'use client'
import './shop.css'
import Header from "../component/header";
import Image from 'next/image';
import ShopBannerImg from '../image/shop-page-img.jpg';
import React, { useState } from "react";
import SideFilter from "../component/sidefilter";
import Footer from '../component/footer';
import ApiProductCard from '../component/apiporoduct';


export default function Shop() {
  const [selectedKey, setSelectedKey] = useState("");
  const [searchText, setSearchText] = useState('');
  const [sortValue, setSortValue] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
 

  const handleTabChange = (newTabValue) => {
    setSelectedKey(newTabValue);
  };

  const handleSortChange = (newSortValue) => {
    setSortValue(newSortValue);
  };

  const handlePriceRangeChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };


  return (
    <>
    
      <Header searchText={searchText} setSearchText={setSearchText} />

      <section className=" flex px-32">
        <SideFilter onSortChange={handleSortChange} onPriceChange={handlePriceRangeChange}  onTabChange={handleTabChange} />
        <div className=" flex flex-col justify-start items-center w-full">
          <div className=' my-5'>
            <div className="section-title flex justify-center items-center">
              <h2>SHOP</h2>
            </div>
            <div className="relative h-52 object-cover object-center rounded-xl overflow-hidden">
             <Image src={ShopBannerImg} alt="Shop Banner Img" className=" h-full object-cover" />
             <div className="absolute flex justify-center items-center inset-0 bg-black bg-opacity-50">
             <h2 className=' text-white text-4xl'>New Arrival</h2>
             </div>
            </div>
          </div>
          <ApiProductCard onTabChange={selectedKey} sortBy={sortValue} priceRange={priceRange} searchText={searchText}  />
        </div>
      </section>

      <Footer />
     
    </>
  );
}









