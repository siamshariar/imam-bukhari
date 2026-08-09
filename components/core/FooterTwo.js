export default function FooterTwo() {
  return (
    <>
      <section className="footerTwo">
        <div className="pre-footer">
          <div style={{gap: `40px`}} className="pre-footer__wrapper container">
            <div className="pre-footer__left">
              <div className="pre-footer__details">
                <div className="pre-footer__heading">যোগাযোগ করুন</div>
                <ul>
                  <li>
                    <a className="pre-footer__telephone" href="tel:01852808554">
                      +880 1852808554
                    </a>
                  </li>
                  <li>
                    <a
                      className="pre-footer__telephone"
                      href="mailto:bukharimasjid.bd@gmail.com"
                    >
                      bukharimasjid.bd@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pre-footer__middle">
              <div className="pre-footer__details">
                <div className="pre-footer__heading">সোস্যাল মিডিয়া</div>
                <div className="pre-footer__socials">
                  <a
                    href="https://www.facebook.com/imambukharitrustbd"
                    target="_blank"
                  >
                    <img src="/img/icons/facebook.png" alt="facebook icon" />
                  </a>

                  <a href=" https://twitter.com/ImamBukhTrust" target="_blank">
                    <img src="/img/icons/twitter.png" alt="twitter icon" />
                  </a>

                  <a
                    href="https://www.youtube.com/@ImamBukhariTrustOfficial"
                    target="_blank"
                  >
                    <img src="/img/icons/youtube.png" alt="youtube icon" />
                  </a>
                </div>

                {/*<div style={{marginTop: `20px`}}>*/}
                {/*  <li>*/}
                {/*  <span className="post-footer__copyright">*/}
                {/*    &copy; 2024 Imam Bukhari Trust{" "}*/}
                {/*  </span>*/}
                {/*  </li>*/}
                {/*  <p style={{marginBottom: `0`}} className="footer-powered-by">*/}
                {/*    Powered By - <a style={{textDecoration: `underline`}} href="http://deeniinfotech.com" target="_blank">Deeni Info Tech</a>*/}
                {/*  </p>*/}
                {/*</div>*/}
              </div>
            </div>
            <div className="pre-footer__right">
              <div className="pre-footer__details">
                <div className="pre-footer__heading">ঠিকানা</div>
                <p>
                  নিউ ঢাকা সিটি, পলাশপুর, ঢাকা-মাওয়া <br /> এক্সপ্রেস হাইওয়ে
                  সংলগ্ন, মুন্সীগঞ্জ, বাংলাদেশ।
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="post-footer">


          <div style={{padding: `20px 0`}} className="pre-footer__wrapper container">
            <div className="pre-footer__left">
              <div className="pre-footer__details">
                <li>
                  <span className="post-footer__copyright">
                    &copy; 2024 Imam Bukhari Trust{" "}
                  </span>
                </li>

              </div>
            </div>

            <div className="pre-footer__right">
              <p style={{marginBottom: `0`}} className="footer-powered-by">
                Powered By - <a style={{textDecoration: `underline`}} href="http://deeniinfotech.com" target="_blank">Deeni Info Tech</a>
              </p>
            </div>
          </div>


          {/*<div className="post-footer__wrapper">*/}
          {/*  <div className="post-footer__left">*/}
          {/*    <ul>*/}
          {/*      <li>*/}
          {/*        <a href="/">Home</a>*/}
          {/*      </li>*/}

          {/*      <li>*/}
          {/*        <a href="/about">About</a>*/}
          {/*      </li>*/}

          {/*      <li>*/}
          {/*        <a href="/bukhari-jame-masjid">Masjid</a>*/}
          {/*      </li>*/}

          {/*      <li>*/}
          {/*        <a href="/kulliyatul-quranil-kareem">Academic</a>*/}
          {/*      </li>*/}

          {/*      <li>*/}
          {/*        <a href="/darul-hadith-arabic-madrasa">Madrasa</a>*/}
          {/*      </li>*/}

          {/*      <li>*/}
          {/*        <a href="/contact">Contact</a>*/}
          {/*      </li>*/}
          {/*    </ul>*/}
          {/*  </div>*/}
          {/*  <div className="post-footer__right">*/}
          {/*    <ul>*/}
          {/*      <li>*/}
          {/*        <a href="#">Updates</a>*/}
          {/*      </li>*/}
          {/*      <li>*/}
          {/*        <a href="#">Islamic Scholars</a>*/}
          {/*      </li>*/}

          {/*      <li>*/}
          {/*        <a href="#">Islamic Universities</a>*/}
          {/*      </li>*/}

          {/*      <li>*/}
          {/*        <a href="#">Online Library</a>*/}
          {/*      </li>*/}

          {/*    </ul>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </footer>
      </section>
    </>
  );
}
