import Link from "next/link";
import Image from "next/image";
import { resolveMediaUrl } from "../../../lib/apiV/core";

export default function HomeBanner({ bannerData }) {
  // Get the banner image URL from the API data
  const bannerImageUrl = resolveMediaUrl(bannerData?.HomeBanner?.image?.data?.attributes?.url);

  // Create dynamic styles for the background image
  const bannerStyles = bannerImageUrl ? {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bannerImageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  } : {};

  return (
    <div 
      id="bannar" 
      className={`sold bannar homepage_banner custom_intro ${bannerImageUrl ? 'banner-api-image has-api-image' : ''}`}
      style={bannerStyles}
    >
      <div id="baseFollower" className="follower"></div>

      <div>
        <div className="bannar_container home_bannar_container">
          {/* <h1 className="bannar_title">Past Transactions</h1>
          <p className="bannar_subtitle"></p>
          <a className="btn bannar_scrolldown btn--secondary">
            <i className="fas fa-chevron-down" aria-hidden="true"></i>
          </a>  */}
          <div className="home_heading">
            <div className="home_heading_inner">
              <div className="container home_heading__container">
                <p className="home_heading__title1">
                  <span>
                  {bannerData?.HomeBanner?.title || bannerData?.title}
                  </span>
                </p>
                <h1 className="home_heading__lgtitle">{bannerData?.HomeBanner?.subtitle || bannerData?.subtitle}</h1>
                <p className="home_heading__title3">
                  {bannerData?.HomeBanner?.message || bannerData?.message}
                </p>
                {/*<Link href="/contact">*/}
                {/*  <a className="btn btn--secondary contact_us__btn">*/}
                {/*    যোগাযোগ করুন*/}
                {/*  </a>*/}
                {/*</Link>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
