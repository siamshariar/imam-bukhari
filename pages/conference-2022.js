import { server } from "../lib/config";
import Meta from "../components/core/Meta";
import Banner from "../components/ui/BannerPrimary";
import ConferenceContent from "../components/pages/conference/conference-2022";
import BannerContact from "../components/ui/BannerContact";
import { getMenu, filterMetaInfo } from "../lib/apiV/pageinfo";

export default function Conference({ pageInfo }) {
  return (
    <>
      <Meta
        title={pageInfo?.metaInfo?.title ?? "কনফারেন্স | প্রফেসর ডক্টর আবু বকর মুহাম্মাদ যাকারিয়া অফিসিয়াল ওয়েবসাইট - Official website of Dr. Abubakar Muhammad Zakaria"}
        description={pageInfo?.metaInfo?.description ?? ""}
        url={`${server}/about`}
        image={`${server}/img/logo/logo.png`}
        type="website"
      />

      <div className="page_wrapper conference_page">
        <Banner
          title={pageInfo?.metaInfo?.title ?? "কনফারেন্স"}
          subTitle="সুন্নাহর প্রামাণিকতা ও এ সংক্রান্ত সংশয়ের অপনোদন : প্রেক্ষাপট বাংলাদেশ"
          bgImage="/img/banner/photo.jpg"
        />
        {/* <AboutTop /> */}

        <ConferenceContent />
        <BannerContact bgImage="/img/banner/contact.JPG" />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const menuItems = await getMenu();
  const pageInfo = await filterMetaInfo(menuItems, 'conference-2022');

  return {
    props: {
      menuItems,
      pageInfo,
    },
    revalidate: 60,
  };
}
