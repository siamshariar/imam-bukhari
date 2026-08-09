import Link from "next/link";
// import Image from "next/image";
// import { server } from "../../lib/config";

export default function Footer() {
  return (
    <footer className="footer footer_primary">
      <div className="container">
        <div className="footer_row footer_row_primary">
          <div className="footer_menu_col">
            {/*<h2 className="footer_menu_heading">নিরাপত্তা এবং ব্র্যান্ড</h2>*/}
            <nav className="footer_nav">
              <ul className="footer_nav_list">
                <li className="footer_nav_item">
                  <Link href="/academic-head-message" legacyBehavior>
                    <a>একাডেমিক প্রধানের বাণী</a>
                  </Link>
                </li>
                <li className="footer_nav_item">
                  <Link href="/chairman-message" legacyBehavior>
                    <a>প্রতিষ্ঠাতার বাণী</a>
                  </Link>
                </li>
                <li className="footer_nav_item">
                  <Link href="/faqs" legacyBehavior>
                    <a>প্রায়শই জিজ্ঞাসিত প্রশ্ন</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer_menu_col">
            {/*<h2 className="footer_menu_heading">ওয়েবসাইট</h2>*/}
            <nav className="footer_nav">
              <ul className="footer_nav_list">
                <li className="footer_nav_item">
                  <Link href="/courses" legacyBehavior>
                    <a>কোর্স সমূহ</a>
                  </Link>
                </li>
                <li className="footer_nav_item">
                  <Link href="/admission" legacyBehavior>
                    <a>ভর্তি তথ্য</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer_menu_col">
            {/*<h2 className="footer_menu_heading">যোগাযোগ</h2>*/}
            <nav className="footer_nav">
              <ul className="footer_nav_list">
                <li className="footer_nav_item">
                  <Link href="/about" legacyBehavior>
                    <a>আমাদের সম্বন্ধে</a>
                  </Link>
                </li>
                <li className="footer_nav_item">
                  <Link href="/members" legacyBehavior>
                    <a>সদস্যবৃন্দ</a>
                  </Link>
                </li>
                <li className="footer_nav_item">
                  <Link href="/contact" legacyBehavior>
                    <a>যোগাযোগ করুন</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer_row footer_row_secondary">
          <div className="footer_copyright">
            <p>&copy; ২০২৩ সর্বস্বত্ব সংরক্ষিত</p>
          </div>
          <div className="footer_logo">
            <Link href="/" legacyBehavior>
              <a>
                <img src="/img/logo/logo.png" alt="" />
              </a>
            </Link>
          </div>
          <div className="footer_social">
            <div className="social_follow">
              <ul className="social_follow_list">
                <li className="social_follow_item">
                  <a
                    href="https://www.facebook.com/kulliyatulquran"
                    className="social_follow_anchor"
                    rel="me noopener"
                    title="Facebook"
                    target="_blank"
                  >
                    <span>ফেসবুক</span>
                  </a>
                </li>
                <li className="social_follow_item">
                  <a
                    href="#"
                    className="social_follow_anchor"
                    rel="me noopener"
                    title="Twitter"
                    target="_blank"
                  >
                    <span>টুইটার</span>
                  </a>
                </li>
                {/* <li className="social_follow_item">
                  <a
                    href="#"
                    className="social_follow_anchor"
                    rel="me noopener"
                    title="Instagram"
                    target="_blank"
                  >
                    <span>ইন্সটাগ্রাম</span>
                  </a>
                </li> */}
                <li className="social_follow_item">
                  <a
                    href="https://www.youtube.com/@kulliyatulquranbd9275"
                    className="social_follow_anchor"
                    rel="me noopener"
                    title="YouTube"
                    target="_blank"
                  >
                    <span>ইউটিউব</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className="footer_row footer_row_secondary">
          <div style={{ marginTop: `20px` }} className="footer_logo">
            <p className="footer-powered-by">
              Powered By - <a style={{textDecoration: `underline`}} href="http://deeniinfotech.com" target="_blank">Deeni Info Tech</a>
            </p>
          </div>
        </div>


      </div>
    </footer>
  );
}
