import { server } from "../lib/config";
import Meta from "../components/core/Meta";
import Banner from "../components/ui/BannerPrimary";
import TextBlock from "../components/blocks/textBlockD";
import {blockAData6, textBlockData5, textBlockData6} from "../data/block";
import TitleListBlock from "../components/blocks/titleListBlockA";
import {
  titleListBlockData3,
  titleListBlockData4,
  titleListBlockData5,
} from "../data/block";

import featureList from "../components/blocks/featureList";
import { featureListData2 } from "../data/block";
import FeatureList from "../components/blocks/featureListA";
import BlockA from "../components/blocks/blockA";
import { getAboutShortContent, getDarulHadithMadrasaData, getDarulHadithSummaryData } from "../lib/fetch3";
import { getDarulHadithCurriculumData, getDarulHadithCharacteristicsData } from "../lib/apiV/aboutmou";

export default function MadrasaComplex({ aboutContent, darulHadithData, darulHadithSummaryData, darulHadithCurriculumData, darulHadithCharacteristicsData }) {
  // Transform API data to expected format for textBlockD
  const transformedAboutContent = darulHadithData ? [
    {
      children: [
        {
          text: darulHadithData.description,
          title: darulHadithData.title,
          bold: false
        }
      ]
    }
  ] : aboutContent;

  return (
    <>
      <Meta
        title={darulHadithData?.title || "দারুল হাদীস অ্যারাবিক মাদরাসা প্রকল্প"}
        description={darulHadithData?.description || "ইমাম বুখারী ট্রাস্ট -এর অন্যতম একটি প্রকল্প হচ্ছে দারুল হাদীস অ্যারাবিক মাদরাসা"}
        url={`${server}/about`}
        image={`${server}/img/logo/logo.png`}
        type="website"
      />

      <div className="page_wrapper home_page">
        <Banner
          title="দারুল হাদীস অ্যারাবিক মাদরাসা প্রকল্প"
          subTitle=""
          bgImage="/img/banner/photo.jpg"
        />
      </div>

        <TextBlock 
          aboutContent={transformedAboutContent} 
          apiData={darulHadithData}
          {...textBlockData5} 
        />
        <BlockA 
          data={blockAData6} 
          darulHadithSummaryData={darulHadithSummaryData} 
        />

      <TitleListBlock 
        {...titleListBlockData4} 
        apiData={darulHadithCurriculumData?.curriculum}
      />
      {/*<TitleListBlock {...titleListBlockData5} />*/}
      <FeatureList 
        {...featureListData2} 
        apiData={darulHadithCharacteristicsData?.characteristics}
      />
      <div style={{ paddingTop: "3rem" }}></div>
    </>
  );
}

export async function getStaticProps(context) {
  const aboutContent = await getAboutShortContent();
  const darulHadithData = await getDarulHadithMadrasaData();
  const darulHadithSummaryData = await getDarulHadithSummaryData();
  const darulHadithCurriculumData = await getDarulHadithCurriculumData();
  const darulHadithCharacteristicsData = await getDarulHadithCharacteristicsData();

  return {
    props: {
      aboutContent,
      darulHadithData,
      darulHadithSummaryData,
      darulHadithCurriculumData,
      darulHadithCharacteristicsData
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}
