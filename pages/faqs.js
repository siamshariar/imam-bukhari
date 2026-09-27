import { server } from "../lib/config";
import { getAllFaqs, getMenu, filterMetaInfo } from "../lib/fetch3";
import Meta from "../components/core/Meta";
import Banner from "../components/ui/BannerPrimary";
import BannerContact from "../components/ui/BannerContact";
import HomeFaqs from "../components/pages/home/Faqs";
import HomeSubscription from "../components/pages/home/Subscription";

export default function Faqs({ faqs, pageInfo }) {
  return (
    <>
      <Meta
				title={pageInfo?.metaInfo?.title ?? "প্রায়শই জিজ্ঞাসিত প্রশ্ন"}
				description={pageInfo?.metaInfo?.description ?? "ইমাম বুখারী ট্রাস্ট বিশুদ্ধ ধারার একটি উচ্চতর ইসলামী শিক্ষা, প্রশিক্ষণ ও গবেষণা প্রতিষ্ঠান"}
        url={`${server}/faqs`}
        image={`${server}/img/default_share.png`}
        type="website"
      />

      <div className="page_wrapper faqs_page">
        <Banner
          title={pageInfo?.metaInfo?.title ?? "প্রায়শই জিজ্ঞাসিত প্রশ্ন"}
          subTitle=""
          bgImage="/img/banner/photo.jpg"
        />
        {/* <div
          style={{
            height: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "50px",
          }}
        >
          প্রায়শই জিজ্ঞাসিত প্রশ্ন
        </div> */}

        <HomeFaqs faqs={faqs} />
          {/*<HomeSubscription bgColor="#f8f8f8" />*/}

        {/* <BannerContact bgImage="/img/banner/contact.JPG" /> */}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const faqs = await getAllFaqs();
  const menuItems = await getMenu();
  const pageInfo = await filterMetaInfo(menuItems, 'faqs');

  return {
    props: {
      faqs,
      menuItems,
      pageInfo
    },
    revalidate: 60,
  };
}
