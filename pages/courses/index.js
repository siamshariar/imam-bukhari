import { getAllCourses } from "../../lib/fetch2";
import { getMenu, filterMetaInfo } from "../../lib/fetch3";
import { server } from "../../lib/config";
import Meta from "../../components/core/Meta";
import Banner from "../../components/ui/BannerPrimary";
import CoursesList from "../../components/pages/courses/CoursesList";
import CoursePageTopSection from "../../components/pages/courses/CoursePageTop";
import BannerContact from "../../components/ui/BannerContact";
import HomeSubscription from "../../components/pages/home/Subscription";

export default function MembersList({ courses, pageInfo }) {
  return (
    <>
      <Meta
        title={pageInfo?.metaInfo?.title ?? "কোর্স সমূহ"}
        description={pageInfo?.metaInfo?.description ?? "বর্তমান যুগের শ্রেষ্ঠ ইসলামী বিদ্যাপীঠ মদিনা ইসলামী বিশ্ববিদ্যালয়ের সিলেবাস ও কারিকুলাম অনুযায়ী- এর প্রাথমিক শিক্ষাক্রম ও পদ্ধতি নির্ধারিত হয়। সে আলোকে এই কুল্লিয়ায় নিম্নবর্ণিত ৬টি প্রোগ্রাম চালু করা হয়েছে।"}
        url={`${server}/organizations`}
        image={`${server}/img/logo/logo.png`}
        type="website"
      />

      <div className="page_wrapper members_page">
        <Banner
          title={pageInfo?.metaInfo?.title ?? "আমাদের কোর্স সমূহ"}
          subTitle=""
          bgImage="/img/banner/photo.jpg"
        />
        {/* <CoursePageTopSection /> */}
        <CoursesList courses={courses} />
          <HomeSubscription />
        {/* <BannerContact bgImage="/img/banner/contact.JPG" /> */}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const courses = await getAllCourses();
  const menuItems = await getMenu();
  const pageInfo = await filterMetaInfo(menuItems, 'courses');

  return {
    props: {
      courses,
      menuItems,
      pageInfo,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}
