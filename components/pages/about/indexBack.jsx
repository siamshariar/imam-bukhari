const AboutContent = () => {
  return (
      <>
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
                      Get fronted for the cost of home improvement services with
                      no interest &mdash; ever.
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

        <section id="agent">
          <div className="section basic_paddings">
            <div className="container">
              <div className="section_content__row straight">
                <div className="section_content__col">
                  <div className="section_content__col__img">
                    <img
                        src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/vhicjgpohrsvav1uxm6p/screen-shot-2020-01-14-at-14044-pm"
                        alt="main image"
                    />
                  </div>
                </div>

                <div className="section_content__col text">
                  <div className="section_content__text_wrap">
                    <p className="section_content__text1">
                      Learn how Ivan can help sell your home faster and for a
                      higher price with Concierge.
                    </p>
                    <p className="section_content__text2">Ivan Santacruz</p>

                    <p style={{ fontFamily: "CompassSans" }}>
                      Real Estate Agent
                      <br />
                      <a className="link" href="mailto:realty@ivanestates.com">
                        realty@ivanestates.com
                      </a>
                      <br />
                      M:{" "}
                      <a className="link" href="tel:(925) 999-5599">
                        (925) 999-5599
                      </a>
                    </p>
                    <div className="buttons-wrapper">
                      <a
                          role="button"
                          className="btn btn--primary contact_us__btn"
                      >
                        Work With Ivan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="feature">
          <div className="feature basic_paddings">
            <div className="container">
              <div className="feature_list">
                <div className="feature_list__wrapper">
                  <div className="feature_content">
                    <h3>Smart</h3>
                    <p>
                      Your Compass agent will help you determine which services
                      can deliver the greatest return on your investment.
                    </p>
                  </div>

                  <div className="feature_content">
                    <h3>Fast</h3>
                    <p>
                      The entire process is designed for speed, so that work can
                      begin — and your home can sell — as quickly as possible.
                    </p>
                  </div>

                  <div className="feature_content">
                    <h3>Transparent</h3>
                    <p>
                      You'll never have to worry about upfront costs or interest.
                    </p>
                  </div>

                  <div className="feature_content">
                    <h3>Easy</h3>
                    <p>
                      Your Compass agent will be by your side throughout the
                      process, advising you along the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="success_stories" className="spiral_bg">
          <div className="video">
            <div className="container basic_paddings">
              <div className="content">
                <h2 className="title">Success Stories</h2>
                <div>
                  <div id="success_stories__p1">
                    <p>
                      "The thing that was the most daunting for me about selling
                      the home was how would I get it to market, based on being
                      retired and have limited income. And that's where the
                      Compass Concierge service was absolutely remarkable.
                      <br /> Seller | Oakland
                      <br />
                    </p>
                  </div>
                  <div id="success_stories__d_p" className="content_row">
                    <div id="success_stories__days_wrap" className="content_cell">
                      <div id="success_stories__days_n">
                        <p>12</p>
                      </div>
                      <div id="success_stories__days_m">
                        <p>days on market</p>
                      </div>
                    </div>

                    <div
                        id="success_stories__price_wrap"
                        className="content_cell"
                    >
                      <div id="success_stories__price">
                        <p>
                          47%
                          <br />
                        </p>
                      </div>
                      <div id="success_stories__price_text">
                        <p>over ask</p>
                      </div>
                    </div>
                  </div>

                  <div id="success_stories__footer">
                    <p>
                      Individual results may vary. Testimonials are not intended
                      to guarantee the same or similar results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="poster">
                <div className="poster-bgr poster_container">
                  <button
                      id="success_stories__play"
                      className="btn-play"
                      data-type="VIDEO"
                      data-src="https://www.youtube.com/embed/4hd018raScA?autoplay&#x3D;1"
                  >
                    <span className="visually-hidden">Play video</span>
                    <i className="fas fa-play" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section id="company_stats">
          <div className="company_stats basic_paddings">
            <div className="container">
              <div className="company_stats__row ">
                <div className="company_stats__col">
                  <div className="stat_card">
                    <h3 className="stat_card__value">
                    <span className="counter" data-target="54">
                      0
                    </span>
                      %
                    </h3>
                    <p className="stat_card__title">
                      The percentage of homebuyers willing to pay more for
                      hardwood floors
                    </p>
                  </div>
                </div>

                <div className="company_stats__col">
                  <div className="stat_card">
                    <h3 className="stat_card__value">
                      $
                      <span className="counter" data-target="400">
                      0
                    </span>
                    </h3>
                    <p className="stat_card__title">
                      The potential return of every $100 you invest in staging
                      your home
                    </p>
                  </div>
                </div>

                <div className="company_stats__col">
                  <div className="stat_card">
                    <h3 className="stat_card__value">
                    <span className="counter" data-target="53">
                      0
                    </span>
                      %
                    </h3>
                    <p className="stat_card__title">
                      The percentage of sellers&#x27; agents who say staging
                      decreases a property&#x27;s time on market
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how_it_works">
          <div className="section basic_paddings">
            <div className="container">
              <div className="section_content__row straight">
                <div className="section_content__col">
                  <div className="section_content__col__img">
                    <img src="/img/banner/members.jpg" alt="main image" />
                  </div>
                </div>

                <div style={{paddingLeft:`50px`}} className="section_content__col text">
                  <div className="section_content__text_wrap">
                    {/*<h2>How it Works</h2>*/}
                    <div>
                      <p style={{fontSize:`19px`}}>
                        <b>
                          ‘কুল্লিয়াতুল কুরআনিল কারীম ওয়াদ-দিরাসাত আল-ইসলামিয়্যাহ’
                        </b>{" "}
                        উচ্চতর ইসলামী শিক্ষা ও গবেষণামূলক একটি প্রতিষ্ঠান। এটি স্থাপিত
                        ২০২১ খ্রি./ ১৪৪২ হি. সালে। এখানে সানাবিয়্যাহ (উচ্চ মাধ্যমিক)
                        ও কুল্লিয়া (উচ্চতর) পর্যায়ে শিক্ষার ব্যবস্থা রয়েছে। রয়েছে
                        শিক্ষক প্রশিক্ষণ কোর্স, বিভিন্ন স্তরের মানুষের জন্য আরবি ভাষা
                        কোর্স এবং বিভিন্ন বিষয়ের উপর ডিপ্লোমা কোর্স। প্রতিষ্ঠানে
                        দেশ-বিদেশে মাস্টার্স ও ডক্টরেট ডিগ্রিপ্রাপ্ত শিক্ষকবৃন্দ পূর্ণ
                        ও খন্ডকালীন শিক্ষক হিসেবে নিয়োজিত আছেন। সর্বোপরি বিশুদ্ধ
                        ধারার ইসলামী শিক্ষার আধুনিক ব্যবস্থা সম্বলিত একটি অনন্য
                        প্রতিষ্ঠান ‘কুল্লিয়াতুল কুরআনিল কারীম ওয়াদ-দিরাসাত
                        আল-ইসলামিয়্যাহ’।
                      </p>
                      {/*<ol>*/}
                      {/*  <li>*/}
                      {/*    You and your agent work together to decide which*/}
                      {/*    services can increase your home&rsquo;s value the most*/}
                      {/*    and set an estimated budget for the work.*/}
                      {/*  </li>*/}
                      {/*  <li>*/}
                      {/*    When you're ready to start, your Compass agent will be*/}
                      {/*    by your side as you engage vendors and commission work.*/}
                      {/*  </li>*/}
                      {/*  <li>*/}
                      {/*    Once the transformation is complete, your home will go*/}
                      {/*    on the market.*/}
                      {/*  </li>*/}
                      {/*  <li>*/}
                      {/*    You'll pay for the services when one of the following*/}
                      {/*    happens &mdash; your home sells, you terminate your*/}
                      {/*    listing agreement with Compass, or 12 months pass from*/}
                      {/*    your Concierge start date.*/}
                      {/*  </li>*/}
                      {/*</ol>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sale_transform" className="spiral_bg">
          <div className="video">
            <div className="container basic_paddings">
              <div className="content">
                <h2 className="title">
                  Curious How Compass Concierge Can Transform Your Sale?
                </h2>

                <div id="sale_transform__p1">
                  <p>
                    See what a difference this program makes for yourself right
                    here.
                  </p>
                </div>
              </div>

              <div className="poster">
                <div className="poster-bgr poster_container">
                  <button
                      id="sale_transform__play"
                      className="btn-play"
                      data-type="VIDEO"
                      data-src="https://www.youtube.com/embed/MSXEuRVBlyE?autoplay&#x3D;1"
                  >
                    <span className="visually-hidden">Play video</span>
                    <i className="fas fa-play" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>


      </>
  );
};

export default AboutContent;
