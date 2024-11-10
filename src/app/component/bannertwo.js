import Image from "next/image";
import BannerTwoImg from "../image/banner-1-compressor.jpg";

export default function BannerTwo() {
  return (
    <>
      <section className="slider-Section-two">
        <div className="slider-bg-img-two">
          <Image src={BannerTwoImg} alt="slider1" className="slider0021" />
        </div>

        <div className="slider-content-two gap-6 flex flex-col justify-center items-center">
          <h3 className="flex flex-col items-center">
            Metropólis
            <div className="slider-content-div-two"></div>
          </h3>

          <p>
            Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo
            lacus meleifend menean diverra loremous.
          </p>

          <button>SHOP NOW</button>
        </div>
      </section>
    </>
  );
}
