import BannerTwo from "./component/bannertwo";
import CarouselSection from "./component/carousel";
import CategoriesBanner from "./component/categoriesbanner";
import FeaturedOnElla from "./component/featuredonella";
import Footer from "./component/footer";
import Header from "./component/header";
import InstaSection from "./component/instasection";
import NewArrivalProd from "./component/newarrival";
import SliderBanner from "./component/sliderbanner";
import TrendingNow from "./component/trendingnow";

export default function Home() {
  return (
    <>

    <Header />

    <SliderBanner />

    <CategoriesBanner />

    <NewArrivalProd />

    <BannerTwo />

    <TrendingNow />

    <FeaturedOnElla />

    <CarouselSection />

    <InstaSection />

    <Footer />

  
    </>
  );
}



