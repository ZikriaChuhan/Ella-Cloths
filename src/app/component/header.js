'use client'
import Image from "next/image";
import Link from "next/link";
import Logo from "../image/ella-logo.png";
import ElectricIcon from "../image/electricIcon.png";
import EngIcon from "../image/engIcon.png";
import DeIcon from "../image/deIcon.png";
import USAIcon from "../image/USA-Icon.png";
import EURIcon from "../image/EUR-Icon.png";
import Basket from "../image/basket.png";
import WishlishHeart from "../image/wishlishHeart.png";
import { FaSearch, FaUser } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { useState, useEffect } from "react";

export default function Header({ cartupdateNum = 0 }) {
  const [cartNum, setCartNum] = useState(0);

  useEffect(() => {
    const storedCartNum = localStorage.getItem('cartNum');
    if (storedCartNum) {
      setCartNum(Number(storedCartNum));
    }
  }, []);

  useEffect(() => {
    if (cartNum > 0) {
      localStorage.setItem('cartNum', cartNum);
    }
  }, [cartNum]);

  useEffect(() => {

    if (typeof cartupdateNum === 'number' && cartupdateNum > 0) {
      setCartNum((prevCartNum) => prevCartNum + cartupdateNum);
    }
  }, [cartupdateNum]);


  
  return (
    <>
      <header className="flex flex-col gap-3 max-lg:gap-0">
        <marquee className="marquee" behavior="loop" direction="left">
          <div className="flex gap-32">
            <p className="flex gap-2">
              <Image alt="img" src={ElectricIcon} className="ElectricIcon" />
              Summer sale: Up to 70% off selected items
            </p>
          </div>
        </marquee>

     {/* Main Logo plus side detail */}
        <div className="flex justify-center flex-wrap max-lg:gap-3  items-end max-lg:hidden">
          <div className="w-1/2">
            <Image alt="img" src={Logo} className="Logomain" />
          </div>

          <div className="header-detail flex flex-col justify-end text-left gap-3">
            <div className="flex justify-center items-center gap-4">
              <p className="cust-serv">Customer Service 091 234-ELLA</p>
              <div className="dropdown">
                <span className="flex justify-center items-center gap-2">
                  <Image alt="img" src={EngIcon} className="Eng-icon" />
                  EN
                </span>
                <div className="dropdown-content">
                  <span className="flex justify-center items-center gap-3">
                    <Image alt="img" src={EngIcon} className="Eng-icon-2" />
                    EN
                  </span>
                  <span className="flex justify-center items-center gap-3">
                    <Image alt="img" src={DeIcon} className="De-icon" />
                    DE
                  </span>
                </div>
              </div>
              <div className="dropdown">
                <span className="flex justify-center items-center gap-2">
                  <Image alt="img" src={USAIcon} className="Usa-icon" />
                  USD
                </span>
                <div className="dropdown-content">
                  <span className="flex justify-center items-center gap-3">
                    <Image alt="img" src={USAIcon} className="Usa-icon-2" />
                    USD
                  </span>
                  <span className="flex justify-center items-center gap-3">
                    <Image alt="img" src={EURIcon} className="Eur-icon" />
                    EUR
                  </span>
                  <span className="flex justify-center items-center gap-3">
                    <Image alt="img" src={EngIcon} className="Eng-icon-2" />
                    GBP
                  </span>
                </div>
              </div>

              <div>
                <div className="search-box">
                  <button className="btn-search">
                  <FaSearch className="fasearch" />
                  </button>
                  <input
                    type="text"
                    className="input-search"
                    placeholder="Type to Search..."
                  />
                </div>
              </div>
            </div>

            {/* <!-- <div className="text-right">
            <p className="free-ship-para uppercase cursor-pointer font-bold">
              Free shipping on All Orders. No Minimum Purchase
            </p>
          </div> --> */}

            <div className="flex justify-end gap-3">
                <Link href="/cart" >
              <div className="soping-card flex justify-center items-center gap-2 cursor-pointer">
                <Image src={Basket} alt="basket" className="basket" />
                <p>Shopping cart</p>
                <span>{cartNum}</span>
              </div>
                </Link>

              <div className="flex justify-center items-center gap-2 cursor-pointer">
                <Image src={WishlishHeart} className="wishlishHeart" alt="basket" />
                <p>My wish list</p>
              </div>

              <div className="signORcreat flex justify-center items-center gap-2">
                <p className="cursor-pointer">Sign in</p>
                <span>/</span>
                <p className="cursor-pointer">Create an account</p>
              </div>
            </div>
          </div>
        </div>


   {/* Main menu */}
        <nav>

            {/* Web Main menu */}
          <div className="flex justify-center gap-5 max-lg:hidden bg-black text-white">
            <div className="nav-links">
              <ul className="flex flex-wrap gap-8">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/shop">SHOP</Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/">Category 1</Link>
                    </li>
                    <li>
                      <Link href="/">Category 2</Link>
                    </li>
                    <li>
                      <Link href="/">Category 3</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/">PRODUCT</Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/">Category 1</Link>
                    </li>
                    <li>
                      <Link href="/">Category 2</Link>
                    </li>
                    <li>
                      <Link href="/">Category 3</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/">BLOG</Link>
                </li>
                <li>
                  <Link href="/">New ARRIVAL</Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/">Category 1</Link>
                    </li>
                    <li>
                      <Link href="/">Category 2</Link>
                    </li>
                    <li>
                      <Link href="/">Category 3</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/">TREND</Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/">Category 1</Link>
                    </li>
                    <li>
                      <Link href="/">Category 2</Link>
                    </li>
                    <li>
                      <Link href="/">Category 3</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/">COLLECTIONS</Link>
                </li>
                <li>
                  <Link href="/">MAN</Link>
                </li>
                <li>
                  <Link href="/">WOMEN</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- mobile-navigation --> */}
          <div className=" lg:hidden flex justify-between items-center px-3 py-3">
            <div className=" flex items-center gap-5">
              <input type="checkbox" id="checkmobile" className="hidden" />
              <label htmlFor="checkmobile">
                <FaBarsStaggered />
              </label>
              <FaSearch className="fasearch" />
              <ul className="moblieNav-ul lg:hidden flex flex-col pl-5 pt-5 justify-center flex-wrap gap-8">
                <label htmlFor="checkmobile" className=" absolute right-5 top-5">
                <IoMdCloseCircle className="close-icon" />
                </label>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/shop">SHOP</Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/">Category 1</Link>
                    </li>
                    <li>
                      <Link href="/">Category 2</Link>
                    </li>
                    <li>
                      <Link href="/">Category 3</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/">PRODUCT</Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/">Category 1</Link>
                    </li>
                    <li>
                      <Link href="/">Category 2</Link>
                    </li>
                    <li>
                      <Link href="/">Category 3</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/">BLOG</Link>
                </li>
                <li>
                  <Link href="/">New ARRIVAL</Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/">Category 1</Link>
                    </li>
                    <li>
                      <Link href="/">Category 2</Link>
                    </li>
                    <li>
                      <Link href="/">Category 3</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/">TREND</Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/">Category 1</Link>
                    </li>
                    <li>
                      <Link href="/">Category 2</Link>
                    </li>
                    <li>
                      <Link href="/">Category 3</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/">COLLECTIONS</Link>
                </li>
                <li>
                  <Link href="/">MAN</Link>
                </li>
                <li>
                  <Link href="/">WOMEN</Link>
                </li>
              </ul>
            </div>

            <div>
              <Image alt="img" src={Logo} className="logo-mobile" />
            </div>

            <div className="items-center flex gap-5">
            <FaUser />
              <Image src={Basket} alt="basket" className="basket" />
            </div>
          </div>
          {/* <!-- mobile-navigation ul --> */}

          {/* mobile-navigation end  */}
        </nav>
      </header>
    </>
  );
}
