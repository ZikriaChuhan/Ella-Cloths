import Image from "next/image";
import FeaturedImge1 from "../image/Featured-img-1.jpg";
import FeaturedImge2 from "../image/Featured-img-2.jpg";
import FeaturedImge3 from "../image/Featured-img-3.jpg";

export default function FeaturedOnElla() {
  return (
    <>
      <section>
        <div>
          <div className="section-title flex justify-center pt-20 items-center">
            <h2>Featured On Ella</h2>
          </div>

          <div className="section-title-div flex-wrap flex py-8 justify-center max-lg:gap-8 gap-1 items-center">
            <div className="feature-product-Card">
              <div className="overflow-hidden">
                <Image src={FeaturedImge1} alt="img" />
              </div>
              <h3>LOREM DE DORUS</h3>
              <p>
                Nullam aliquet vestibulum augue non varius. Cras cosmo congue an
                melitos. Dui del ante le maliquam. Praesent murna de tellus
                laoreet cosmopolis.
              </p>
              <button>SHOP NOW</button>
            </div>

            <div className="feature-product-Card">
              <div className="overflow-hidden">
                <Image src={FeaturedImge2} alt="img" />
              </div>
              <h3>LOREM DE DORUS</h3>
              <p>
                Nullam aliquet vestibulum augue non varius. Cras cosmo congue an
                melitos. Dui del ante le maliquam. Praesent murna de tellus
                laoreet cosmopolis.
              </p>
              <button>SHOP NOW</button>
            </div>

            <div className="feature-product-Card">
              <div className="overflow-hidden">
                <Image src={FeaturedImge3} alt="img" />
              </div>
              <h3>LOREM DE DORUS</h3>
              <p>
                Nullam aliquet vestibulum augue non varius. Cras cosmo congue an
                melitos. Dui del ante le maliquam. Praesent murna de tellus
                laoreet cosmopolis.
              </p>
              <button>SHOP NOW</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
