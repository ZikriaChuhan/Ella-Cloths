"use client";

import { useState, useEffect } from "react";
import { useSelector  } from "react-redux";
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
import { Modal, ModalContent, ModalBody, Button, useDisclosure, } from "@nextui-org/react";
import { Tabs, Tab, Input, Card, CardBody } from "@nextui-org/react";
import Marquee from "react-fast-marquee";

export default function Header({ searchText, setSearchText }) {
  

  const [selected, setSelected] = useState("login");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const items = useSelector((state) => state.cart.items);
  const itemsTotalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };



  const handlechangeSigin = () => {
    onOpen();
    setSelected("sign-up");
  };
  const handlechangeSigup = () => {
    onOpen();
    setSelected("login");
  };

  return (
    <>
      <header className="flex flex-col gap-3 max-lg:gap-0">
        <Marquee className="marquee" autoFill={true} pauseOnClick={true}>
          <div className="flex mx-10 gap-32">
            <p className="flex gap-2">
              <Image alt="img" src={ElectricIcon} className="ElectricIcon" />
              Summer sale: Up to 70% off selected items
            </p>
          </div>
        </Marquee>

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
                    value={searchText}
                    onChange={handleSearchChange}
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
              <Link href="/cart">
              <div className="soping-card flex justify-center items-center gap-2 cursor-pointer">
                <Image src={Basket} alt="basket" className="basket" />
                <p>Shopping cart</p>
                <span>{itemsTotalQuantity}</span>
              </div>
              </Link>

              <div className="flex justify-center items-center gap-2 cursor-pointer">
                <Image
                  src={WishlishHeart}
                  className="wishlishHeart"
                  alt="basket"
                />
                <p>My wish list</p>
              </div>

              <div className="signORcreat flex justify-center items-center gap-2">
                <button
                  onClick={handlechangeSigup}
                  className=" text-sm cursor-pointer"
                >
                  Sign in
                </button>
                <span>/</span>
                <button
                  onClick={handlechangeSigin}
                  className=" text-sm cursor-pointer"
                >
                  Create an account
                </button>
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
                <label
                  htmlFor="checkmobile"
                  className=" absolute right-5 top-5"
                >
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
        <Modal
          backdrop="blur"
          className=" bg-transparent shadow-none"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                {/* <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader> */}
                <ModalBody>
                  <div className="flex  flex-col justify-center items-center w-full">
                    <Card className="  max-w-full w-[340px] ">
                      <CardBody className="bg-transparent overflow-hidden">
                        <Tabs
                          fullWidth
                          size="md"
                          aria-label="Tabs form"
                          selectedKey={selected}
                          onSelectionChange={setSelected}
                          className=" bg-transparent "
                        >
                          <Tab
                            key="login"
                            title="Login"
                            className=" bg-transparent mb-7"
                          >
                            <form className="flex bg-transparent flex-col gap-4">
                              <Input
                                isRequired
                                placeholder="Enter your email"
                                type="email"
                              />
                              <Input
                                isRequired
                                className=" bg-transparent"
                                placeholder="Enter your password"
                                type="password"
                              />
                              <p className="text-center text-small">
                                Need to create an account?{" "}
                                <Link
                                  size="sm"
                                  href="/"
                                  onClick={() => setSelected("sign-up")}
                                >
                                  Sign up
                                </Link>
                              </p>
                              <div className="flex gap-2 justify-end">
                                <Button fullWidth color="primary">
                                  Login
                                </Button>
                              </div>
                            </form>
                          </Tab>
                          <Tab key="sign-up" title="Sign up" className=" mb-7">
                            <form className="flex flex-col gap-4 ">
                              <Input
                                isRequired
                                placeholder="Enter your name"
                                type="password"
                              />
                              <Input
                                isRequired
                                placeholder="Enter your email"
                                type="email"
                              />
                              <Input
                                isRequired
                                placeholder="Enter your password"
                                type="password"
                              />
                              <p className="text-center text-small">
                                Already have an account?{" "}
                                <Link
                                  size="sm"
                                  href="/"
                                  onClick={() => setSelected("login")}
                                >
                                  Login
                                </Link>
                              </p>
                              <div className="flex gap-2 justify-end">
                                <Button fullWidth color="primary">
                                  Sign up
                                </Button>
                              </div>
                            </form>
                          </Tab>
                        </Tabs>
                      </CardBody>
                    </Card>
                  </div>
                </ModalBody>
                {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter> */}
              </>
            )}
          </ModalContent>
        </Modal>
      </header>
    </>
  );
}
