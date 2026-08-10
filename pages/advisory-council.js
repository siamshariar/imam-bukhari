import { getAdvisoryCouncils } from "../lib/fetch2";
import { getMenu, filterMetaInfo } from "../lib/fetch3";
import { server } from "../lib/config";
import Meta from "../components/core/Meta";
import Banner from "../components/ui/BannerPrimary";
import HomeSubscription from "../components/pages/home/Subscription";

export default function advisoryCouncilList({advisoryCouncils = [], pageInfo}) {
  return (
    <>
      <Meta
          title={pageInfo?.metaInfo?.title ?? "উপদেষ্টামন্ডলি"}
        description={pageInfo?.metaInfo?.description ?? "উপদেষ্টামন্ডলির সম্মানিত সদস্যবৃন্দ কুল্লিয়াতুল কুরআনিল কারীম ওয়াদ-দিরাসাতিল ইসলামিয়্যাহ"}
        url={`${server}/organizations`}
          image={`${server}/img/logo/logo.png`}
        type="website"
      />

      <div className="page_wrapper members_page">
        <Banner
          title={pageInfo?.metaInfo?.title ?? "উপদেষ্টামন্ডলি"}
          subTitle=""
          bgImage="/img/banner/photo.jpg"
        />
        <section id="members" className="properties">
          <div className="container">
            {advisoryCouncils &&
            advisoryCouncils.map(({ name, excerpt }) => (
              <div className="properties_wrapper col12">
                  <div className="ex-com-item_full">
                      <h3 class="m0">{name}</h3>
                      <h4>{excerpt}</h4>
                    
                  </div>
              </div>
            ))}
          </div>
        </section>
        <HomeSubscription bgColor="#f8f8f8" />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const advisoryCouncils = await getAdvisoryCouncils();
  const menuItems = await getMenu();
  const pageInfo = await filterMetaInfo(menuItems, 'advisors');

  return {
    props: {
      advisoryCouncils,
      menuItems,
      pageInfo,
    },
    revalidate: 60,
  };
}
