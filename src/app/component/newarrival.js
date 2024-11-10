import ImgCards from "./imgcards";

export default function NewArrivalProd() {
  return (
    <>
      <section>
        <div>
          <div className="section-title flex justify-center items-center">
            <h2>NEW ARRIVALS</h2>
          </div>
          <div className="section-title-div flex justify-center items-center">
            <p className="section-title-div-para">View All</p>
          </div>

          <ImgCards />

          <ImgCards />

        </div>
      </section>
    </>
  );
}
