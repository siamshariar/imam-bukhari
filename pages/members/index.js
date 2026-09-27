import { getTeachers, getBoardOfDirectors } from "../../lib/fetch2";
import { getMenu, filterMetaInfo } from "../../lib/fetch3";
import { server } from "../../lib/config";
import Meta from "../../components/core/Meta";
import Banner from "../../components/ui/BannerPrimary";
import BoardOfDirectorsList from "../../components/pages/members/Directors";
import TeachersList from "../../components/pages/members/Teachers";
import BannerContact from "../../components/ui/BannerContact";
import OrganizationCard from "../../components/card/post-card-organization";
import OrganizationCard2 from "../../components/card/post-card-organization2";
import HomeSubscription from "../../components/pages/home/Subscription";

export default function MembersList({ teachers, pageInfo }) {
  return (
    <>
      <Meta
          title={pageInfo?.metaInfo?.title ?? "একাডেমিক কমিটির সদস্যবৃন্দ"}
        description={pageInfo?.metaInfo?.description ?? "একাডেমিক কমিটির সম্মানিত সদস্যবৃন্দ কুল্লিয়াতুল কুরআনিল কারীম ওয়াদ-দিরাসাতিল ইসলামিয়্যাহ"}
        url={`${server}/organizations`}
          image={`${server}/img/logo/logo.png`}
        type="website"
      />

      <div className="page_wrapper members_page">
        <Banner
          title="একাডেমিক কমিটি"
          subTitle=""
          bgImage="/img/banner/photo.jpg"
        />
        {/*<BoardOfDirectorsList members={boardOfDirectors} />*/}
        <TeachersList members={teachers} />
        {/*<BannerContact bgImage="/img/banner/contact.JPG" />*/}
          <HomeSubscription bgColor="#f8f8f8" />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  // const boardOfDirectors = await getBoardOfDirectors();
  const teachers = await getTeachers();
  const menuItems = await getMenu();
  const pageInfo = await filterMetaInfo(menuItems, 'members');

  return {
    props: {
      teachers,
      menuItems,
      pageInfo,
    },
    revalidate: 60,
  };
}
