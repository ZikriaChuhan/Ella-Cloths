import ImgCards from "./imgcards";

export default function TrendingNow() {
  return (
    <>
      <section>
        <div>
          <div className="section-title flex justify-center pt-20 items-center">
            <h2>Trending Now</h2>
          </div>
          <div className="section-title-div flex justify-center items-center">
            <p className="section-title-div-para">View All</p>
          </div>

          <ImgCards />

        </div>
      </section>
    </>
  );
}
