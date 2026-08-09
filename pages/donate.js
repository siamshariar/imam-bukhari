import { server, apiServer } from "../lib/config";
import Meta from "../components/core/Meta";
import Banner from "../components/ui/BannerPrimary";
import AboutContent from "../components/pages/about";
import AboutMou from "../components/pages/home/AboutMou";
import BannerContact from "../components/ui/BannerContact";
// import AboutTop from "../components/pages/home/About";
import AboutQuranAyah from "../components/pages/about/QuranAyah";
import AboutText from "../components/pages/about/About";
import AboutCharacteristics from "../components/pages/about/Characteristics";
import HomeSubscription from "../components/pages/home/Subscription";
import HomeCharacteristics from "../components/pages/home/Characteristics";
import BlockA from "../components/blocks/blockA";
import {blockAData, blockAData2, blockAData3, imageTitleTopSliderData1} from "../data/block";
import ImageTitleTopSlider from "../components/sliders/imageTitleTopSlider";
import RichText from "../components/rich-text";
import DonateRichText from "../components/DonateRichText";
import { getDonateData } from "../lib/apiV/aboutmou";
import { getSettings } from "../lib/apiV/settings";

export default function About({ donateData, logo, favicon }) {
  return (
    <>
      <Meta
        title="দান করুন"
        description="ইমাম বুখারী ট্রাস্ট বিশুদ্ধ ধারার একটি উচ্চতর ইসলামী শিক্ষা, প্রশিক্ষণ ও গবেষণা প্রতিষ্ঠান"
        url={`${server}/about`}
        image={logo?.url ? `${apiServer}${logo.url}` : `${server}/img/logo/logo.png`}
        type="website"
        favicon={favicon}
      />

      <div className="page_wrapper home_page">
        <Banner
          title="দান করুন"
          subTitle=""
          bgImage="/img/banner/photo.jpg"
        />

          <section id="services">
              <div className="services basic_paddings">
                  <div className="container">
                      <div className="services__wrapper">
                          {donateData?.description ? (
                              <div className="api-content" style={{ padding: '0' }}>
                                  <DonateRichText content={donateData.description} />
                              </div>
                          ) : (
                              <>

                              </>
                          )}
                      </div>
                  </div>
              </div>
          </section>


      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const donateData = await getDonateData();
  const settings = await getSettings();

  return {
    props: {
      donateData,
      logo: settings?.logo || null,
      favicon: settings?.favicon || null,
    },
    revalidate: 60, // Revalidate every minute for ISR
  };
}

// export async function getStaticProps(context) {
//   const playlists = await getAllPlaylists2();

//   return {
//     props: {
//       playlists: playlists.playlists,
//     },
//   };
// }
