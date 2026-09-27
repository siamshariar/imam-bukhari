import { getTeachers, getBoardOfDirectors, getMenu, filterMetaInfo } from "../../lib/fetch3";
import { server } from "../../lib/config";
import Meta from "../../components/core/Meta";
import Banner from "../../components/ui/BannerPrimary";
import BoardOfDirectorsList from "../../components/pages/members/Directors";
import TeachersList from "../../components/pages/members/Teachers";
import BannerContact from "../../components/ui/BannerContact";
import OrganizationCard from "../../components/card/post-card-organization";
import OrganizationCard2 from "../../components/card/post-card-organization2";
import HomeSubscription from "../../components/pages/home/Subscription";

export default function MembersList({ teachers, boardOfDirectors, pageInfo }) {
  return (
    <>
      <Meta
          title={pageInfo?.metaInfo?.title ?? "একাডেমিক কমিটির সদস্যবৃন্দ"}
        description={pageInfo?.metaInfo?.description ?? "একাডেমিক কমিটির সম্মানিত সদস্যবৃন্দ কুল্লিয়াতুল কুরআনিল কারীম ওয়াদ-দিরাসাতিল ইসলামিয়্যাহ"}
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
        {boardOfDirectors?.length > 0 && <BoardOfDirectorsList members={boardOfDirectors} />}
        <TeachersList members={teachers} />
        {/*<BannerContact bgImage="/img/banner/contact.JPG" />*/}
          <HomeSubscription bgColor="#f8f8f8" />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const teachers = await getTeachers();
  const boardOfDirectors = await getBoardOfDirectors();
  const menuItems = await getMenu();
  const pageInfo = await filterMetaInfo(menuItems, 'members');

  return {
    props: {
      teachers,
      boardOfDirectors,
      menuItems,
      pageInfo,
    },
    revalidate: 60,
  };
}
