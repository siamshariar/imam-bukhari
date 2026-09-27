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
import TextBlock from "../components/blocks/textBlockA";
import { textBlockData4 } from "../data/block";
import Features from "../components/blocks/features";
import { featureDataMasjid } from "../data/block";
import BlockA from "../components/blocks/blockD";
import { blockAData4, featureListData1 } from "../data/block";
import featureList from "../components/blocks/featureList";
import FeatureList from "../components/blocks/featureList";
import { getAboutShortContent, getImamBukhariDetailData, getMosqueProjectSummaryData, getMosqueMainActivitiesData, getMosqueComplexData, getMenu, filterMetaInfo } from "../lib/fetch3";
import { getSettings } from "../lib/apiV/settings";

export default function MasjidComplex({ aboutContent, imamBukhariDetailData, mosqueProjectSummaryData, mosqueMainActivitiesData, mosqueComplexData, logo, favicon, pageInfo }) {
  return (
    <>
      <Meta
        title={pageInfo?.metaInfo?.title ?? (imamBukhariDetailData?.title || "ইমাম বুখারী জামে মাসজিদ কমপ্লেক্সে")}
        description={pageInfo?.metaInfo?.description ?? "ইমাম বুখারী ট্রাস্ট বিশুদ্ধ ধারার একটি উচ্চতর ইসলামী শিক্ষা, প্রশিক্ষণ ও গবেষণা প্রতিষ্ঠান"}
        url={`${server}/bukhari-jame-masjid`}
        image={logo?.url ? `${apiServer}${logo.url}` : `${server}/img/logo/logo.png`}
        type="website"
        favicon={favicon}
      />

      <div className="page_wrapper home_page">
        <Banner
          title={imamBukhariDetailData?.title || "ইমাম বুখারী জামে মাসজিদ কমপ্লেক্সে"}
          subTitle=""
          bgImage="/img/banner/photo.jpg"
        />

          <TextBlock 
            aboutContent={aboutContent} 
            imamBukhariDetailData={imamBukhariDetailData} 
            {...textBlockData4} 
          />
        <BlockA 
          data={blockAData4} 
          mosqueProjectSummaryData={mosqueProjectSummaryData} 
        />

        <Features 
          data={featureDataMasjid} 
          mosqueMainActivitiesData={mosqueMainActivitiesData} 
        />
          <div style={{backgroundColor: `var(--app-background-color-secondary)`}}>
        <FeatureList {...featureListData1} mosqueComplexData={mosqueComplexData} />
          </div>
        {/* <TitleListBlock {...titleListBlockData1} /> */}

        {/* <AboutQuranAyah /> */}
        {/* <AboutText bgColor="#f8f8f8" /> */}
        {/* <AboutContent /> */}

        {/* <AboutTop /> */}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const aboutContent = await getAboutShortContent();
  const imamBukhariDetailData = await getImamBukhariDetailData();
  const mosqueProjectSummaryData = await getMosqueProjectSummaryData();
  const mosqueMainActivitiesData = await getMosqueMainActivitiesData();
  const mosqueComplexData = await getMosqueComplexData();
  const settings = await getSettings();
  const menuItems = await getMenu();
  const pageInfo = await filterMetaInfo(menuItems, 'bukhari-jame-masjid');

  return {
    props: {
      aboutContent,
      imamBukhariDetailData,
      mosqueProjectSummaryData,
      mosqueMainActivitiesData,
      mosqueComplexData,
      logo: settings?.logo || null,
      favicon: settings?.favicon || null,
      menuItems,
      pageInfo,
    },
    revalidate: 60,
  };
}
