const Section = () => {
  return (
    <section id="section">
      <div className="section basic_paddings">
        <div className="container">
          <div className="section_content__row reverse">
            <div className="section_content__col">
              <div className="section_content__col__img">
                <img
                  className="main_image"
                  src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/igbhueky0jn6egrr0ey0/compass-concierge-1"
                  alt="main image"
                />
              </div>
            </div>

            <div className="section_content__col text">
              <div className="section_content__text_wrap">
                <p>
                  <img
                    src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/mwuzusvuirrrmztphw3q/concierge"
                    alt=""
                  />
                </p>
                <p className="section_content__text1">
                  Get fronted for the cost of home improvement services with no
                  interest &mdash; ever.
                </p>
                <p className="section_content__text2">
                  Compass Concierge is the hassle-free way to sell your home
                  faster and for a higher price with services like staging,
                  flooring, painting, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
