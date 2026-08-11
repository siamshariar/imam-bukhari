import { server } from "../lib/config";
import Meta from "../components/core/Meta";
import Banner from "../components/ui/BannerPrimary";
import AboutContent from "../components/pages/about";
import AboutMou from "../components/pages/home/AboutMou";
import BannerContact from "../components/ui/BannerContact";
// import AboutTop from "../components/pages/home/About";
import AboutQuranAyah from "../components/pages/about/QuranAyah";
import AboutText from "../components/pages/about/About";
import AboutCharacteristics from "../components/pages/about/CharacteristicsKulliya";
import HomeSubscription from "../components/pages/home/Subscription";
import HomeCharacteristics from "../components/pages/home/Characteristics";
import TextBlock from "../components/blocks/textBlockC";
import { textBlockData3 } from "../data/block";
import Features from "../components/blocks/features";
import { featureDataAcademic } from "../data/block";
import ImageTitleTopSlider from "../components/sliders/imageTitleTopSlider";
import { imageTitleTopSliderData1 } from "../data/block";
import TitleListBlock from "../components/blocks/titleListBlock";
import { titleListBlockData1, titleListBlockData2 } from "../data/block";
import AddressDetail from "../components/blocks/address";
import HomeMembers from "../components/pages/home/Members";
import TeachersList from "../components/pages/members/Teachers";
import BlockA from "../components/blocks/blockE";
import { blockAData5 } from "../data/block";
import { getImamBukhariMasjid, getAboutShortContent, getKulliyatulQuranilKareemDetailData, getKulliaProjectSummaryData, getKulliaMainActivitiesData, getMembers, getKulliaRecommendedDepartmentData, getCharacteristicsKulliaData, getMenu, filterMetaInfo } from "../lib/fetch3";

export default function Kulliyatul({ aboutContent, members, kulliyatulQuranilKareemDetailData, kulliaProjectSummaryData, kulliaMainActivitiesData, kulliaRecommendedDepartmentData, characteristicsKulliaData, pageInfo }) {
  return (
    <>
      <Meta
        title={pageInfo?.metaInfo?.title ?? "কুল্লিয়াতুল কুরআনিল কারীম ওয়াদ-দিরাসাতিল ইসলামিয়্যাহ"}
        description={pageInfo?.metaInfo?.description ?? "কুল্লিয়াতুল কুরআনিল কারীম ওয়াদ-দিরাসাত আল-ইসলামিয়্যাহ’ উচ্চতর ইসলামী শিক্ষা ও গবেষণামূলক একটি প্রতিষ্ঠান। এটি স্থাপিত ২০২১ খ্রি./ ১৪৪২ হি. সালে। "}
        url={`${server}/about`}
        image={`${server}/img/logo/logo.png`}
        type="website"
      />

      <div className="page_wrapper home_page">
        <Banner
          title={pageInfo?.metaInfo?.title ?? "কুল্লিয়াতুল কুরআনিল কারীম ওয়াদ-দিরাসাতিল ইসলামিয়্যাহ"}
          subTitle=""
          bgImage="/img/banner/photo.jpg"
        />

          <TextBlock 
            aboutContent={aboutContent} 
            kulliyatulQuranilKareemDetailData={kulliyatulQuranilKareemDetailData} 
            {...textBlockData3} 
          />
        <BlockA 
          data={blockAData5} 
          kulliaProjectSummaryData={kulliaProjectSummaryData} 
        />

         <HomeMembers members={members} title="কুল্লিয়াতুল কুরআনের একাডেমিক কমিটির সম্মানিত সদস্যবৃন্দ" />

        <Features 
          data={featureDataAcademic} 
          kulliaMainActivitiesData={kulliaMainActivitiesData} 
        />
          <div style={{backgroundColor: `var(--app-background-color-secondary)`, padding: `20px 0 60px 0`}}>
               <TitleListBlock 
                 {...titleListBlockData1} 
                 apiData={kulliaRecommendedDepartmentData?.kulliaDepartment} 
               />
              <TitleListBlock 
                {...titleListBlockData2} 
                apiData={kulliaRecommendedDepartmentData?.progressUniversity} 
              />
          </div>


        {/* <AboutQuranAyah /> */}
        {/* <AboutText bgColor="#f8f8f8" /> */}
        {/* <AboutContent /> */}
        <AboutCharacteristics characteristicsKulliaData={characteristicsKulliaData} />
        {/* <AboutMou /> */}
        {/*<ImageTitleTopSlider {...imageTitleTopSliderData1} />*/}

        {/* <AboutTop /> */}
        {/*<AddressDetail />*/}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const aboutContent = await getAboutShortContent();
  const members = await getMembers();
  const kulliyatulQuranilKareemDetailData = await getKulliyatulQuranilKareemDetailData();
  const kulliaProjectSummaryData = await getKulliaProjectSummaryData();
  const kulliaMainActivitiesData = await getKulliaMainActivitiesData();
  const kulliaRecommendedDepartmentData = await getKulliaRecommendedDepartmentData();
  const characteristicsKulliaData = await getCharacteristicsKulliaData();
  const menuItems = await getMenu();
  const pageInfo = await filterMetaInfo(menuItems, 'kulliyatul-quranil-kareem');

  return {
    props: {
      aboutContent,
      members,
      kulliyatulQuranilKareemDetailData,
      kulliaProjectSummaryData,
      kulliaMainActivitiesData,
      kulliaRecommendedDepartmentData,
      characteristicsKulliaData,
      menuItems,
      pageInfo,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}