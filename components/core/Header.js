import { useState, useEffect, useRef } from "react";
import Link from "next/link";
// import Image from "next/image";
import MobileNav from "./MobileNav";
import ButtonSecondary from "../buttons/buttonSecondary";
import { server, apiServer } from "../../lib/config";

export default function Header({ menuItems = [], logo }) {
  // const header = useRef(null);
  // const [scrollTop, setScrollTop] = useState(0);
  // const [didMount, setDidMount] = useState(false);

  // const num = Math.ceil(playlists.length / 3);
  // const firstList = playlists.slice(0, num);
  // const secondList = playlists.slice(num, num * 2);
  // const thirdList = playlists.slice(num * 2, playlists.length);

  // useEffect(() => {
  //   setDidMount(true);

  //   window.onscroll = () => {
  //     setScrollTop(window.pageYOffset);
  //   };
  //   if (scrollTop > 20) {
  //     header.current.classList.add("scroll_up");
  //   } else {
  //     header.current.classList.remove("scroll_up");
  //   }
  //   //setLastScrollTop(scrollTop);

  //   return () => setDidMount(false);
  // }, [scrollTop]);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const toggleMobileNav = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMobileNavOpen(open);
  };

  const handleMobileNav = (e) => {
    e.preventDefault();
    toggleMobileNav(true)(e);
  };

  const headerRef = useRef(null);
  const [prevScrollTop, setPrevScrollTop] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    // const header = document.getElementById("header");
    const header = headerRef.current;
    const handleScroll = () => {
      setScrollTop(window.pageYOffset);
      // console.log(scrollTop);

      if (scrollTop > 20) {
        // header.classList.add("scroll");
      }
      // scroll up and down effect
      if (scrollTop > 103) {
        if (scrollTop > prevScrollTop) {
          header.classList.remove("scroll_up");
          header.classList.add("scroll_down");
        } else {
          header.classList.remove("scroll_down");
          header.classList.add("scroll_up");
        }
      }
      if (scrollTop <= 20) {
        // header.classList.remove("scroll");
        header.classList.remove("scroll_down");
        header.classList.remove("scroll_up");
      }
      // console.log(scrollTop);
      setPrevScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollTop]);

  return (
    <>
      {/* follower  */}
      <div id="follower" className="follower"></div>

      {/* navbar */}
      <nav id="navbar">
        <div id="header" className="header" ref={headerRef}>
          {/*<div id="topbar" className="topbar">*/}
          {/*  <div className="container">*/}
          {/*    <div className="topbar_container">*/}
          {/*      <div className="topbar_left">*/}
          {/*        <ul className="top_menu">*/}
          {/*          <li>*/}
          {/*            <li>*/}
          {/*              <a*/}
          {/*                href="mailto:kulliyatulquran.ac@gmail.com"*/}
          {/*                className="topbar-tel"*/}
          {/*              >*/}
          {/*                kulliyatulquran.ac@gmail.com*/}
          {/*              </a>*/}
          {/*            </li>*/}
          {/*          </li>*/}
          {/*        </ul>*/}
          {/*      </div>*/}
          {/*      <div className="topbar_right">*/}
          {/*        <ul className="top_menu top_social_menu">*/}
          {/*          <li>*/}
          {/*            <a href="tel:+8801834177765" className="topbar-tel">*/}
          {/*              +৮৮০ ১৮৩৪ ১৭৭৭৬৫*/}
          {/*            </a>*/}
          {/*          </li>*/}
          {/*          <li>*/}
          {/*            <a*/}
          {/*              target="_blank"*/}
          {/*              href="https://www.facebook.com/kulliyatulquran"*/}
          {/*            >*/}
          {/*              <i className="fab fa-facebook-f"></i>*/}
          {/*            </a>*/}
          {/*          </li>*/}
          {/*          <li>*/}
          {/*            <a*/}
          {/*              target="_blank"*/}
          {/*              href="https://www.youtube.com/@kulliyatulquranbd9275"*/}
          {/*            >*/}
          {/*              <i className="fab fa-youtube"></i>*/}
          {/*            </a>*/}
          {/*          </li>*/}
          {/*        </ul>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className="main_header">
            <div className="container">
              <div className="header_left">
                <div
                  id="hamburger"
                  className="hamburger"
                  onClick={(e) => handleMobileNav(e)}
                >
                  <div></div>

                  <a className="link">
                     মেনু
                  </a>
                </div>
                <div className="nav nav_hide">
                  <ul>
                    {menuItems.map((item) => (
                      <li className="nav_item" key={item.key}>
                        <Link href={`/${item.key}`} legacyBehavior>
                          <a className="link">
                            {item.displayName}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="header_logo">
                <Link href="/" legacyBehavior>
                  <a>
                    <img 
                      src={logo?.url ? `${apiServer}${logo.url}` : "/img/logo/logo-white.png"} 
                      alt={logo?.alternativeText || "Brand logo"} 
                    />
                  </a>
                </Link>
              </div>
              <div className="header_right">
                <div className="nav">
                  <ul>
                    {/* <li className="nav_item">
                      <Link href="/courses">
                        <a className="link">কোর্স সমূহ</a>
                      </Link>
                    </li>
                    <li className="nav_item">
                      <Link href="/videos">
                        <a className="link">ভিডিও সমূহ</a>
                      </Link>
                    </li>*/}
                    {/*<li className="nav_item">*/}
                    {/*  <Link href="/contact">*/}
                    {/*    <a className="link">যোগাযোগ</a>*/}
                    {/*  </Link>*/}
                    {/*</li>*/}
                    <li className="nav_item">
                      <ButtonSecondary
                        text={"ডোনেট"}
                        link={"/donate"}
                        size="sm"
                      />
                    </li>
                    {/* <li className="nav_item nav_hide contact_us__btn">
                <a href="#" className="link">Let's Connect</a>
                </li>
                <li className="nav_item tel_item">
                <a href="tel:(925) 999-5599" className="link tel">(925) 999-5599</a>
                </li>  */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* mobile contact */}
      {/* <div className="floating_contact">
        <div className="wrapper">
          <a className="item" href="mailto:realty@ivanestates.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="18"
              fill="none"
              viewBox="0 0 26 18"
            >
              <path
                fillRule="evenodd"
                d="M1.273 18l7.734-7.735c.395.352.838.647 1.32.87.592.275 1.233.44 1.885.488.779.055 1.567-.059 2.297-.334.62-.235 1.189-.584 1.684-1.023L23.927 18H1.273zm6.454-9L0 16.727V1.273L7.727 9zM25.2 1.3v15.427l-7.71-7.71c2.603-2.54 5.154-5.13 7.71-7.717zM23.927 0l-8.78 8.78c-.343.339-.744.61-1.192.792-.903.367-1.942.349-2.831-.05-.37-.167-.707-.398-1.003-.675l-.403-.389c-.01-.014-.021-.029-.034-.042-.049-.058-.104-.109-.166-.152-2.8-2.714-5.54-5.49-8.28-8.264h22.69z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a className="item" href="tel:(925) 999-5599">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="none"
              viewBox="0 0 25 25"
            >
              <path d="M24.1 18.172l-5.109-2.635c-.71-.369-1.606-.185-2.106.448l-1.87 2.397c-1.817-.974-3.213-1.923-4.82-3.53-1.71-1.713-2.633-3.136-3.58-4.9l2.37-1.845c.631-.5.842-1.397.447-2.108L6.8.914C6.325.018 5.192-.272 4.376.28l-3.24 2.16C.374 2.944-.047 3.813.005 4.709.057 5.63.19 6.789.4 7.606c.948 3.636 3.213 7.404 6.4 10.592 3.186 3.188 6.952 5.454 10.586 6.403.816.21 1.975.316 2.923.395.922.053 1.79-.395 2.291-1.16l2.107-3.293c.58-.817.263-1.923-.606-2.371z" />
            </svg>
          </a>
        </div>
      </div> */}

      <MobileNav navOpen={mobileNavOpen} navControl={toggleMobileNav} menuItems={menuItems}/>
    </>
  );
}
