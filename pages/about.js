import { server } from "../lib/config";
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
import BlockB from "../components/blocks/blockB";
import BlockC from "../components/blocks/blockC";
import { getAboutPageData, getMenu, filterMetaInfo } from "../lib/fetch3";
import {blockAData, blockAData2, blockAData3, imageTitleTopSliderData1} from "../data/block";
import ImageTitleTopSlider from "../components/sliders/imageTitleTopSlider";

export default function About({ aboutPageData, pageInfo }) {
  const {
    aboutData,
    imamBukhariMasjid,
    kulliyatulIslamia,
    darulHadis,
    characteristics,
    infrastructureModelData,
  } = aboutPageData || {};

  return (
    <>
      <Meta
				title={pageInfo?.metaInfo?.title ?? "আমাদের সম্বন্ধে"}
				description={pageInfo?.metaInfo?.description ?? ""}
        url={`${server}/about`}
        image={`${server}/img/logo/logo.png`}
        type="website"
      />

      <div className="page_wrapper home_page">
        <Banner
          title={pageInfo?.metaInfo?.title ?? "আমাদের সম্বন্ধে"}
          subTitle=""
          bgImage="/img/banner/photo.jpg"
        />

        {/*<AboutQuranAyah />*/}
        {/*<AboutText bgColor="#f8f8f8" />*/}
        <AboutContent aboutData={aboutData}/>
          <div className="textBlock" style={{backgroundColor: `#edece9`}}>
              <h2 style={{marginBottom: `0px`}}>আমাদের প্রকল্পসমূহ</h2>
          </div>
          <BlockA
            imamBukhariMasjid={imamBukhariMasjid}
            data={{
              ...blockAData,
              images: imamBukhariMasjid?.images?.length ? imamBukhariMasjid.images : blockAData.images
            }}
          />
          <BlockB
            kulliyatulIslamia={kulliyatulIslamia}
            data={{
              ...blockAData2,
              images: kulliyatulIslamia?.images?.length ? kulliyatulIslamia.images : blockAData2.images
            }}
          />
          <BlockC
            darulHadis={darulHadis}
            data={{
              ...blockAData3,
              images: darulHadis?.images?.length ? darulHadis.images : blockAData3.images
            }}
          />

        {/*<AboutMou />*/}

        <AboutCharacteristics characteristics={characteristics}/>

          <div style={{backgroundColor: `var(--app-background-color-secondary)`, padding: `80px 0px`}}>
          <ImageTitleTopSlider 
            data={infrastructureModelData} 
            {...imageTitleTopSliderData1} 
          />
          </div>

        {/* <AboutTop /> */}

        {/*<HomeSubscription bgColor="#f8f8f8" />*/}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const menuItems = await getMenu();
  const pageInfo = await filterMetaInfo(menuItems, 'about');
  const aboutPageData = await getAboutPageData();

  return {
    props: {
      menuItems,
      pageInfo,
      aboutPageData,
    },
    revalidate: 60,
  };
}
