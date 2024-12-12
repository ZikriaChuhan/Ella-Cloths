"use client";
import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { Slider } from "@nextui-org/react";
import { Tabs, Tab } from "@nextui-org/react";
import {Listbox, ListboxItem} from "@nextui-org/react";



export default function SideFilter({ onSortChange, onPriceChange, onTabChange}) {
  const [selectedKey, setSelectedKey] = useState("");
  const [sortvalue, setSortValue] = useState("");
  const [minPrice, setMinPrice] = useState([0, 1000]);


  const sortBy = (e) => {
    const newSortValue = e.target.value;
    setSortValue(newSortValue);
    onSortChange(newSortValue);
  };

  const handlePriceChange = (value) => {
    setMinPrice(value);
    onPriceChange(value);
  };

  const handleTabChange = (keys) => {
    const newTabValue = keys.size > 0 ? keys.values().next().value : ""
    setSelectedKey(newTabValue);
    onTabChange(newTabValue);

  };

  

 
  return (
    <>
      <section className="side-filter-section  w-max px-10 py-8">
        <div className="filter-div  flex flex-col gap-5">
          <div>
            <Select
              label="Sort by products"
              selectedKeys={[sortvalue]}
              onChange={sortBy}
              className="max-w-xs min-w-60"
            >
              <SelectItem key="aesc">Alphabetically, A-Z</SelectItem>
              <SelectItem key="desc">Alphabetically, Z-A</SelectItem>
              {/* <SelectItem key="Price-LtoH">Price, low to high</SelectItem>
              <SelectItem key="Price-HtoL">Price, high to low</SelectItem> */}
            </Select>
          </div>
          <div className="categories-filter flex flex-col gap-4">
            <h2>Categories</h2>
            <div className="flex flex-col gap-2">
      <Listbox
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={new Set([selectedKey])}
        onSelectionChange={handleTabChange}
      >
        <ListboxItem key="men's clothing">Men&apos;s Clothing</ListboxItem>
        <ListboxItem key="women's clothing">Women&apos;s clothing</ListboxItem>
        <ListboxItem key="jewelery">Jewelery</ListboxItem>
        <ListboxItem key="electronics">Electronics</ListboxItem>
      </Listbox>
      
    </div>

          </div>
          <div className="price-filter">
            <h2>Price</h2>
            <Slider
              label=" "
              step={20}
              minValue={0}
              maxValue={1000}
              value={minPrice}
              onChange={handlePriceChange}
              defaultValue={[0, 1000]}
              formatOptions={{ style: "currency", currency: "USD" }}
              classNames={{
                track: "border-0  border-slate-300",
                thumb: "h-6 w-7 border-0 bg-slate-100",
                filler: "bg-slate-800 h-2",
              }}
            />
          </div>
          <div className="color-filter flex flex-col gap-4">
            <h2>Color</h2>
            <div className="color-btn flex flex-wrap gap-x-3 gap-y-2">
              <button className="filter-btn-color-1 "> </button>
              <button className="filter-btn-color-2 "> </button>
              <button className="filter-btn-color-3 "> </button>
              <button className="filter-btn-color-4 "> </button>
              <button className="filter-btn-color-5 "> </button>
            </div>
          </div>
          <div className="size-filter flex flex-col gap-4 ">
            <h2>Size</h2>
            <div className=" flex max-w-48  flex-wrap gap-4">
              <Tabs 
                classNames={{
                 
                  cursor: "w-full bg-[#000000]",
                  tabContent: "group-data-[selected=true]:text-[#ffffff] ",
                }}
                key="light"
                color="warning"
                variant="light"
                aria-label="Tabs variants"
              >
                
                <Tab key="Small" title="Small" />
                <Tab key="Medium" title="Medium" />
                <Tab key="Large" title="Large" />
                
              </Tabs>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
