"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "@/app/store/cartSlice";
import Product1 from "../image/product-1.jpg";
import Product2 from "../image/product-2.jpg";
import Product3 from "../image/product-3.jpg";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaParachuteBox } from "react-icons/fa6";
import ProductSkeleton from "./productskeleton";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";


export default function ApiProductCard({ searchText, sortBy, priceRange, onTabChange }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const category = onTabChange || ""; 
        const sort = sortBy || ""; 
        let url = `https://fakestoreapi.com/products/`; 
        if (category) {
          url = `https://fakestoreapi.com/products/category/${category}`; 
        }

        if (sort) {
          url += `?sort=${sort}`; 
        }
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [onTabChange, sortBy]);



  const filteredProducts = products.filter(pkg => {
    return pkg.price >= priceRange[0] && pkg.price <= priceRange[1];
  });

  const handleClick = (product) => {
    setClicked(true);
    const addQuantity = { ...product, quantity: 1}
    dispatch(addToCart(addQuantity));
    setTimeout(() => {
      setClicked(false);
    }, 4500); 
  };


  const handleViewProduct = (product) => {
    setSelectedProduct(product);  
    onOpen();  
  };

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
          
          <div key={pc.id} className="product-Card ">
            <div  className="product-Card_img-hover-div">
            <Link  href={`/shop/${pc.id}`} passHref>
              <Image
                src={pc.image}
                width={775}
                height={1103}
                alt="img"
                className="product-Card_img-hai"
              />
              </Link>
              <div className="product-Card_Icon-hover">
                <FaRegHeart className=" cursor-pointer"  />
                <IoEyeOutline title="Quick View" onClick={() => handleViewProduct(pc)} className="  cursor-pointer" />
              </div>
              <Link  href={`/shop/${pc.id}`} passHref>
              <div className="">
                <Image
                  src={Product1}
                  width={775}
                  height={1103}
                  alt="img"
                  className="product-Card_img-hover"
                />
              </div>
              </Link>
              <div className="product-Card_btn-hover">
                <button onClick={() => handleClick(pc)} className="product-Card_btn-ho">QUICK ADD</button>
              </div>

            </div>
            <Link  href={`/shop/${pc.id}`} passHref>
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
          </Link>
          </div>
        ))}
      </div>

      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className=" flex max-w-max">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-center gap-1"></ModalHeader>
              <ModalBody>
                <h1 className=" text-2xl font-bold">{selectedProduct.title}</h1>
                <div className=" flex gap-4 items-center">
                <Image
                  src={selectedProduct.image}
                  width={775}
                  height={1103}
                  alt="img"
                  className="product-Card_img-hover"
                />
                <p className="max-w-52 text-sm">
                {selectedProduct.description}
                </p>
                </div>
                <button className={`cartButton ${clicked ? "clicked" : ""}`} onClick={() => handleClick(selectedProduct)} >
              <span className="add-to-cart">Add to cart</span>
              <span className="added">Added</span>
              <FaShoppingCart className="shoppingCartIcon" />
              <FaParachuteBox className="boxIcon" />
            </button>
              </ModalBody>
              <ModalFooter className=" bg-white ">
              
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
