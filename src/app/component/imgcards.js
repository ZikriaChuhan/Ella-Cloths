import Image from "next/image";
import Product1 from "../image/product-1.jpg";
import Product2 from "../image/product-2.jpg";
import Product3 from "../image/product-3.jpg";
import Product4 from "../image/product-4.jpg";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";



export default function ImgCards() {
    return (
        <>

         <div className="section-title-div flex-wrap flex py-8 justify-center max-lg:gap-8 gap-1 items-center">
            <div className="product-Card">
              <div className="product-Card_img-hover-div">
                <div className="product-Card_Icon-hover">
                  <FaRegHeart />
                  <IoEyeOutline />
                </div>
                <Image src={Product1} alt="img" className="product-Card_img-hover" />
                <div className="product-Card_btn-hover">
                  <button className="product-Card_btn-ho">QUICK ADD</button>
                </div>
              </div>
              <h6>COLLETE</h6>
              <p>
                Sample - Clothing And Accessory Boutiques For Sale
              </p>
              <h5>
                From <span>$48.99</span>
              </h5>
              <div className="card-Img-selector flex">
                <Image src={Product1} alt="img" />
                <Image src={Product2} alt="img" />
                <Image src={Product3} alt="img" />
              </div>
            </div>

            <div className="product-Card">
              <div className="product-Card_img-hover-div">
                <div className="product-Card_Icon-hover">
                  <FaRegHeart />
                  <IoEyeOutline />
                </div>
                <Image src={Product2} alt="img" className="product-Card_img-hover" />
                <div className="product-Card_btn-hover">
                  <button className="product-Card_btn-ho">QUICK ADD</button>
                </div>
              </div>
              <h6>COLLETE</h6>
              <p>
                Sample - Clothing And Accessory Boutiques For Sale
              </p>
              <h5>
                From <span>$48.99</span>
              </h5>
              <div className="card-Img-selector flex">
                <Image src={Product1} alt="img" />
                <Image src={Product2} alt="img" />
                <Image src={Product3} alt="img" />
              </div>
            </div>

            <div className="product-Card">
              <div className="product-Card_img-hover-div">
                <div className="product-Card_Icon-hover">
                  <FaRegHeart />
                  <IoEyeOutline />
                </div>
                <Image src={Product3} alt="img" className="product-Card_img-hover" />
                <div className="product-Card_btn-hover">
                  <button className="product-Card_btn-ho">QUICK ADD</button>
                </div>
              </div>
              <h6>COLLETE</h6>
              <p>
                Sample - Clothing And Accessory Boutiques For Sale
              </p>
              <h5>
                From <span>$48.99</span>
              </h5>
              <div className="card-Img-selector flex justify-center gap-2">
                <Image src={Product1} alt="img" />
                <Image src={Product2} alt="img" />
                <Image src={Product3} alt="img" />
              </div>
            </div>

            <div className="product-Card">
              <div className="product-Card_img-hover-div">
                <div className="product-Card_Icon-hover">
                  <FaRegHeart />
                  <IoEyeOutline />
                </div>
                <Image src={Product4} alt="img" className="product-Card_img-hover" />
                <div className="product-Card_btn-hover">
                  <button className="product-Card_btn-ho">QUICK ADD</button>
                </div>
              </div>
              <h6>COLLETE</h6>
              <p>
                Sample - Clothing And Accessory Boutiques For Sale
              </p>
              <h5>
                From <span>$48.99</span>
              </h5>
              <div className="card-Img-selector flex justify-center gap-2">
                <Image src={Product1} alt="img" />
                <Image src={Product2} alt="img" />
                <Image src={Product3} alt="img" />
              </div>
            </div>
          </div>
        
        </>
    );
}