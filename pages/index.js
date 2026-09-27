import { getHomePageData, getHomeFaqs, getMenu, filterMetaInfo } from "../lib/fetch3";
import { getSettings } from "../lib/apiV/settings";
import Meta from "../components/core/Meta";
import HomeBanner from "../components/pages/home/Banner";
import HomeQuranAyah from "../components/pages/home/QuranAyah";
import HomeAbout from "../components/pages/home/About";
import HomeQuote from "../components/pages/home/Quote";
import HomeMembers from "../components/pages/home/Members";
import HomeCourses from "../components/pages/home/Courses";
import HomeCharacteristics from "../components/pages/home/Characteristics";
import HomeFaqs from "../components/pages/home/Faqs";
import HomeSubscription from "../components/pages/home/Subscription";
import TeachersList from "../components/pages/members/Teachers";
import AboutMou from "../components/pages/home/AboutMou";
import { server, apiServer } from "../lib/config";
import BlockA from "../components/blocks/blockA";
import BlockB from "../components/blocks/blockB";
import BlockC from "../components/blocks/blockC";
import { blockAData, blockAData2, blockAData3 } from "../data/block";
import ImageTextSlider from "../components/sliders/ImageTextSlider";
import ImageTitleSlider from "../components/sliders/ImageTitleSlider";
import TextBlock from "../components/blocks/textBlock";
import TextBlockB from "../components/blocks/textBlockB";
import {
  textBlockData1,
  textBlockData2,
  imageTextSliderData1,
  imageTitleSliderData1,
  textBlockDataB,
  iframeVideoData1,
} from "../data/block";
import Newsletter from "../components/blocks/newsletter";
import IframeVideo from "../components/blocks/iframeVideo";
import parse from "html-react-parser";

export default function Home({ homePageData, faqs, logo, favicon, pageInfo }) {
  const {
    banner: bannerData,
    aboutShortText: aboutContent,
    mosqueComplexCard,
    kulliyaCard,
    darulHadithCard,
    founderMessage: chairmanMessage,
    introVideo,
    recentActivities,
    academicCommittee,
    slider: homeSliderData,
  } = homePageData || {};

  return (
    <>
      <Meta
        title={pageInfo?.metaInfo?.title ?? ""}
        description={pageInfo?.metaInfo?.description ?? "ইমাম বুখারী ট্রাস্ট বিশুদ্ধ ধারার একটি উচ্চতর ইসলামী শিক্ষা, প্রশিক্ষণ ও গবেষণা প্রতিষ্ঠান"}
        url="www.ImamBukhariTrust.com"
        image={logo?.url ? `${apiServer}${logo.url}` : `${server}/img/logo/logo.png`}
        type="website"
        favicon={favicon}
      />

      <div className="page_wrapper home_page">
        <HomeBanner bannerData={bannerData}/>
        {/* <HomeAbout /> */}

        <TextBlock aboutContent={aboutContent} {...textBlockData1} />
        {/* <HomeQuranAyah /> */}

        <div className="textBlock" style={{backgroundColor: `#edece9`}}>
          <h2 style={{marginBottom: `0px`}}>আমাদের প্রকল্পসমূহ</h2>
        </div>
        <BlockA
          imamBukhariMasjid={mosqueComplexCard}
          data={{
            ...blockAData,
            images: mosqueComplexCard?.images?.length ? mosqueComplexCard.images : blockAData.images
          }}
        />
        <BlockB
          kulliyatulIslamia={kulliyaCard}
          data={{
            ...blockAData2,
            images: kulliyaCard?.images?.length ? kulliyaCard.images : blockAData2.images
          }}
        />
        <BlockC
          darulHadis={darulHadithCard}
          data={{
            ...blockAData3,
            images: darulHadithCard?.images?.length ? darulHadithCard.images : blockAData3.images
          }}
        />
        <IframeVideo
          title={introVideo?.title || iframeVideoData1.title}
          videoId={introVideo?.videoId || iframeVideoData1.videoId}
        />

        <HomeQuote chairmanMessage={chairmanMessage}/>
        {academicCommittee?.showOnHome && (
          <HomeMembers members={academicCommittee.members} title={academicCommittee.title} />
        )}

        <ImageTextSlider data={recentActivities || imageTextSliderData1} />
        {/* <HomeCourses courses={courses} /> */}
        {/* <HomeCharacteristics /> */}
        {/* <AboutMou /> */}
        <HomeFaqs faqs={faqs} />

        {/*<TextBlock {...textBlockData2} />*/}

        {/*<Newsletter />*/}
        {/*<TextBlockB {...textBlockDataB} />*/}
        <ImageTitleSlider data={homeSliderData || imageTitleSliderData1} />
        {/* <FooterTwo /> */}

        {/* <HomeSubscription bgColor="#f8f8f8" /> */}

        {/* <QuranAyah books={posts4} /> */}
        {/* <HomeArticles articles={articles} /> */}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const homePageData = await getHomePageData();
  const faqs = await getHomeFaqs();
  const settings = await getSettings();
  const menuItems = await getMenu();
  const pageInfo = await filterMetaInfo(menuItems, 'home');

  return {
    props: {
      menuItems,
      pageInfo,
      homePageData,
      faqs,
      logo: settings?.logo || null,
      favicon: settings?.favicon || null,
    },
    revalidate: 60,
  };
}
