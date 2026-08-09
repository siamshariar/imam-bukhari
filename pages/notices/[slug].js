import { useRouter } from "next/router";
import { getNoticeDetails, getSubscription } from "../../lib/fetch3";
import Banner from "../../components/ui/BannerPrimary";
import HomeSubscription from "../../components/pages/home/Subscription";
import Meta from "../../components/core/Meta";
import { apiServer } from "../../lib/config";
import RichText from "../../components/rich-text";

export async function getStaticProps({ params }) {
  const notice = await getNoticeDetails(params.slug);
  const subscriptionData = await getSubscription();

  if (!notice) {
    return {
      notFound: true,
    };
  }

  return {
    props: { notice, subscriptionData },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export default function NoticeDetails({ notice, subscriptionData }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>

      <Meta
        title={notice.title}
        description={notice.excerpt}
        url={`${apiServer}/notices/${notice.slug}`}
        image={`${apiServer}/img/logo/logo.png`}
        type="website"
      />
      <Banner title="Notices" subTitle="" bgImage="/img/banner/photo.jpg" />
      <section className="notices container basic_paddings">
        <div className="noticeslugContainer">
          <h1 className="noticeslugtitle">{notice.title}</h1>
          <div className="noticeslugdescription">
            <RichText content={notice.description} />
        </div>
        </div>
      </section>
      <HomeSubscription subscriptionData={subscriptionData} />
    </>
  );
}