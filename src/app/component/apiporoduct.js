"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, Skeleton } from "@nextui-org/react";
import Product1 from "../image/product-1.jpg";
import Product2 from "../image/product-2.jpg";
import Product3 from "../image/product-3.jpg";
import Product4 from "../image/product-4.jpg";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import ProductSkeleton from "./productskeleton";

export default function ApiProductCard({ sortBy, priceRange }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products?sort=${sortBy || "aesc"}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [sortBy]);

  const filteredProducts = products.filter(pkg => {
    return pkg.price >= priceRange[0] && pkg.price <= priceRange[1];
  });

  if (loading) {
    return (
      <div>
        <ProductSkeleton />
      </div>
    );
  }

  return (
    <>
      <div className="section-title-div flex-wrap flex gap-y-12 gap-x-8 py-8 justify-center max-lg:gap-8 gap-1 items-center">
        {filteredProducts.map((pc) => (
          <Link key={pc.id}  href={`/shop/${pc.id}`} passHref>
          <div className="product-Card ">
            <div className="product-Card_img-hover-div">
              <Image
                src={pc.image}
                width={775}
                height={1103}
                alt="img"
                className="product-Card_img-hai"
              />
              <div className="product-Card_Icon-hover">
                <FaRegHeart />
                <IoEyeOutline />
              </div>
              <div className="">
                <Image
                  src={Product1}
                  width={775}
                  height={1103}
                  alt="img"
                  className="product-Card_img-hover"
                />
              </div>
              <div className="product-Card_btn-hover">
                <button className="product-Card_btn-ho">QUICK ADD</button>
              </div>
            </div>
            <h6>COLLETE</h6>
            <p>{pc.title}</p>
            <h5>
              From <span>${pc.price}</span>
            </h5>

            <div className="card-Img-selector flex">
              <Image src={pc.image} width={775} height={1103} alt="img" />
              <Image src={Product2} alt="img" />
              <Image src={Product3} alt="img" />
            </div>
          </div>
          </Link>
        ))}
      </div>
    </>
  );
}
