"use client";
import "../shop.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "@/app/store/cartSlice";
import { usePathname } from "next/navigation";
import { Tabs, Tab } from "@nextui-org/react";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import Product1 from "../../image/product-1.jpg";
import Product2 from "../../image/product-2.jpg";
import Product3 from "../../image/product-3.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { FaParachuteBox } from "react-icons/fa6";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import ImgCards from "@/app/component/imgcards";
import { Card, Skeleton } from "@nextui-org/react";

export default function SingalProductPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [selectedTab, setSelectedTab] = useState("sm");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const pathname = usePathname();
  const singalproduct = pathname.replace("/shop/", "");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${singalproduct}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError("Error fetching product data.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [singalproduct]);

  const plusQuantity = () => {
    setQuantity(qty => qty + 1);
  };

  const minusQuantity = () => {
    if (quantity > 1) {
      setQuantity(qty => qty - 1);
    }
  };

  const handleClick = () => {
    setClicked(true);
    const addQuantity = { ...product, quantity}
    dispatch(addToCart(addQuantity));
    setTimeout(() => {
      setClicked(false);
    }, 4500); 
  };

  return (
    <>
      <Header />
      {loading ? (
        <div className="flex justify-center py-20 items-center">
      <Card className="w-[800px] space-y-5 px-4 " radius="lg" >
      <Skeleton className="rounded-lg">
        <div className="h-32 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
    </div>
    ) : (
      <section className="product-detail-page  grid py-20 grid-cols-2 gap-14 justify-center items-center">
        <div className="product-card-detail flex justify-self-end">
          <div className=" flex flex-col gap-2 justify-center">
            <Image
              src={Product1}
              alt={product.title}
              width={500}
              height={500}
              className="singal-pdt-img-side"
            />
            <Image
              src={Product2}
              alt={product.title}
              width={500}
              height={500}
              className="singal-pdt-img-side"
            />
            <Image
              src={Product3}
              alt={product.title}
              width={500}
              height={500}
              className="singal-pdt-img-side"
            />
          </div>
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="product-image"
          />
        </div>
        <div className=" flex flex-col gap-10 justify-self-start self-start">
          <Breadcrumbs>
            <BreadcrumbItem>
              <Link href="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href="/shop">Shop</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>product</BreadcrumbItem>
          </Breadcrumbs>
          <div className=" flex flex-col gap-6">
            <h1 className=" text-4xl max-w-xl">{product.title}</h1>
            <p className=" max-w-lg ">{product.description}</p>
            <h2>Price: ${product.price}</h2>
            <div className=" flex  flex-wrap gap-4">
              <Tabs
                classNames={{
                  cursor: "w-full bg-[#000000]",
                  tabContent: "group-data-[selected=true]:text-[#ffffff]",
                }}
                selectedKey={selectedTab}
                key="light"
                color="warning"
                variant="light"
                aria-label="Tabs variants"
                onSelectionChange={setSelectedTab}
              >
                <Tab key="sm" title="Small" />
                <Tab key="md" title="Medium" />
                <Tab key="lg" title="Large" />
              </Tabs>
            </div>
            <div className="quantity-update flex">
              <button onClick={minusQuantity}>-</button>
              <p>{quantity}</p>
              <button onClick={plusQuantity}>+</button>
            </div>
            <button className={`cartButton ${clicked ? "clicked" : ""}`} onClick={handleClick}>
              <span className="add-to-cart">Add to cart</span>
              <span className="added">Added</span>
              <FaShoppingCart className="shoppingCartIcon" />
              <FaParachuteBox className="boxIcon" />
            </button>
          </div>
        </div>
      </section>
    )}

      <section className=" py-14">
        <h1 className=" text-center text-4xl"> Related Product</h1>
        <div>
          <ImgCards />
        </div>
      </section>

      <Footer />
    </>
  );
}
