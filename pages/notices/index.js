import { getNotices, getMenu, filterMetaInfo, getSubscription } from "../../lib/fetch3";
import Link from "next/link";
// import { format } from "date-fns";
import Banner from "../../components/ui/BannerPrimary";
import HomeSubscription from "../../components/pages/home/Subscription";
import Meta from "../../components/core/Meta";
import { apiServer } from "../../lib/config";

export default function NoticesPage({ notices, subscriptionData, pageInfo }) {
  return (
    <>
      <Meta
				title={pageInfo?.metaInfo?.title ?? "Notices"}
				description={pageInfo?.metaInfo?.description ?? ""}
        url={`${apiServer}/notices`}
        image={`${apiServer}/img/logo/logo.png`}
        type="website"
      />
      <Banner title={pageInfo?.pageInfo?.title || "Notices"} subTitle="" bgImage="/img/banner/photo.jpg" />
      <section className="notices basic_paddings">
        <div className="noticecontainer container">
          <ul className="noticelist">
            {notices.map((notice) => (
              <li key={notice.id} className="noticeitem">
                <Link href={`/notices/${notice.slug}`} legacyBehavior>
                  <a className="noticeLink">
                    <h2>{notice.title}</h2>
                    <p className="noticedate">
                      {/* {format(new Date(notice.publishedAt), "MMMM d, yyyy")} */}
                    </p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <HomeSubscription subscriptionData={subscriptionData}/>
    </>
  );
}

export async function getStaticProps() {
  const notices = await getNotices();
  const menuItems = await getMenu();
  const pageInfo = await filterMetaInfo(menuItems, 'notices');
  const subscriptionData = await getSubscription();

  return {
    props: {
      notices,
      subscriptionData,
      menuItems,
      pageInfo,
    },
    revalidate: 60, 
  };
}