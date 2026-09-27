import {
  getHomeCourses,
  getAdvisoryCouncils,
} from "../lib/fetch2";
import { getHomeBannerData, getAboutShortContent, getImamBukhariMasjid, getKulliyatulIslamia, getDarulHadis, getChairmanMessage, getMembers, getHomeFaqs, getOurProjectsData, getRecentActivitiesData, getHomeSliderData, getMenu, filterMetaInfo } from "../lib/fetch3";
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

export default function Home({ bannerData, aboutContent, imamBukhariMasjid, kulliyatulIslamia, darulHadis, chairmanMessage, members, courses, faqs, advisoryCouncils, ourProjectsData, recentActivitiesData, homeSliderData, logo, favicon, pageInfo }) {
  // Extract individual projects from the API data
  const project1 = ourProjectsData?.find(p => p.id === 1);
  const project2 = ourProjectsData?.find(p => p.id === 2);
  const project3 = ourProjectsData?.find(p => p.id === 3);
  
  // Debug logo and favicon
  console.log('Home page - Logo:', logo);
  console.log('Home page - Favicon:', favicon);
  
  // Debug FAQs
  console.log('Home page - FAQs received:', faqs);
  console.log('Home page - Number of FAQs:', faqs?.length);
  
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
          imamBukhariMasjid={project1 || imamBukhariMasjid} 
          data={{
            ...blockAData,
            images: project1?.images || blockAData.images
          }} 
        />
        <BlockB 
          kulliyatulIslamia={project2 || kulliyatulIslamia} 
          data={{
            ...blockAData2,
            images: project2?.images || blockAData2.images
          }} 
        />
        <BlockC 
          darulHadis={project3 || darulHadis} 
          data={{
            ...blockAData3,
            images: project3?.images || blockAData3.images
          }} 
        />
        <IframeVideo {...iframeVideoData1} />

        <HomeQuote chairmanMessage={chairmanMessage}/>
        {/* <HomeMembers members={members} title="একাডেমিক কমিটির সম্মানিত সদস্যবৃন্দ" /> */}

        <ImageTextSlider data={recentActivitiesData || imageTextSliderData1} />
        {/* <TeachersList members={members} title="একাডেমিক কমিটি" /> */}
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
  // const images = await getOptHomeImages();
  // // const blogs = await getOptHomeBlogs();
  // const lectures = await getHomeLectures();
  // const quotes = await getOptHomeQuotes();
  // // const books = await getOptHomeBooks();
  // const organizations = await getHomeOrganizations();
  // const articles = await getHomeArticles();
  // // const articles = await getArticles()
  // const papers = await getHomePapers();
  // const playlists = await getAllPlaylists2();
  // const posts4 = await getHome3Posts4();
  // const organizations2 = await getHomeOrganizations();
  // const books = await getHomeBooks();
  const bannerData = await getHomeBannerData();
  const aboutContent = await getAboutShortContent();
  const imamBukhariMasjid = await getImamBukhariMasjid();
  const kulliyatulIslamia = await getKulliyatulIslamia();
  const darulHadis = await getDarulHadis();
  const chairmanMessage = await getChairmanMessage();
  const members = await getMembers();
  const advisoryCouncils = await getAdvisoryCouncils();
  const courses = await getHomeCourses();
  const faqs = await getHomeFaqs();
  const ourProjectsData = await getOurProjectsData();
  const recentActivitiesData = await getRecentActivitiesData();
  const homeSliderData = await getHomeSliderData();
  const settings = await getSettings();
  const menuItems = await getMenu();
  const pageInfo = await filterMetaInfo(menuItems, 'home');

  return {
    props: {
      menuItems,
      pageInfo,
      // images,
      // lectures,
      // quotes,
      // organizations,
      // articles,
      // papers,
      // playlists: playlists.playlists,
      // organizations2,
      // posts4,
      // books,
      bannerData,
      aboutContent,
      imamBukhariMasjid,
      kulliyatulIslamia,
      darulHadis,
      chairmanMessage,
      members,
      courses,
      faqs,
      advisoryCouncils,
      ourProjectsData,
      recentActivitiesData,
      homeSliderData,
      logo: settings?.logo || null,
      favicon: settings?.favicon || null,
    },
    revalidate: 60,
  };
}
