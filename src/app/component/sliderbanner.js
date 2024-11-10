import Image from "next/image";
import Slideshow1 from "../image/slideshow-1.jpg";

export default function SliderBanner() {
  return (
    <>
      <section className="slider-Section">
        <div className="slider-bg-img">
          <Image src={Slideshow1} className="slideshow-IMG" alt="slider1" />
        </div>

        <div className="slider-content gap-6 flex flex-col justify-center items-center">
          <h3 className="flex flex-col items-center">
            COSMOPOLIS
            <div className="slider-content-div"></div>
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
