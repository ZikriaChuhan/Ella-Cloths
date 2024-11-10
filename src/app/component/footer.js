import Image from "next/image";
import LogoWhite from "../image/ella-logo-white.png";
import Pay from "../image/pay.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="section-p1">
        <div className="col">
          <Image className="logo" src={LogoWhite} alt="img" />

          <div className="follow ">
            <h6>Follow us</h6>
            <div className="icon flex gap-2">
              <FaFacebook className="i" />
              <FaTwitter className="i" />
              <FaInstagram className="i" />
              <FaPinterest className="i" />
              <FaYoutube className="i" />
            </div>

            <p>Secured Payment Gateway</p>
            <Image src={Pay} alt="pay" />
          </div>
        </div>
        <div className="col">
          <h4>SHOP</h4>
          <a href="#">New In</a>
          <a href="#">Women</a>
          <a href="#">Men</a>
          <a href="#">Shoes</a>
          <a href="#">Top Brands</a>
        </div>
        <div className="col">
          <h4>Information</h4>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Orders and Returns</a>
          <a href="#">Contact Us</a>
          <a href="#">FAQs</a>
        </div>
        <div className="col">
          <h4>Contact</h4>
          <p>
            <strong>Address:</strong> Washington DC, USA - 54840
          </p>
          <p>
            <strong>Phone:</strong> +1-234-5678910
          </p>
          <p>
            <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
          </p>
        </div>

        <div className="copyright">
          <p>All Rights Reserved | &#169; 2024</p>
        </div>
      </footer>
    </>
  );
}
