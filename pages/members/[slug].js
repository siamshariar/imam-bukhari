import { server } from "../../lib/config";
import { getMembers, getSingleMember, getMemberDetails } from "../../lib/fetch3";
import Link from "next/link";
import parse from "html-react-parser";
import Meta from "../../components/core/Meta";
import Banner from "../../components/ui/BannerPrimary";
import BannerContact from "../../components/ui/BannerContact";
import MemberDetail from "../../components/pages/members/Detail";

// import Share from "../../components/share";

export default function OrganizationDetail({ detail }) {
  return (
    <>
      <Meta
        title={detail.name}
        description={detail.excerpt}
        url={`${server}/members/${detail.slug}`}
        // image={`${server}${detail.imagePath}`}
        image={`${server}/img/logo/logo.png`}
        type="article"
      />

      <div className="page_wrapper member_detail_page">
        <Banner
          title={detail.name}
          subTitle=""
          bgImage="/img/banner/photo.jpg"
        />

        <MemberDetail member={detail} />

        {/* <BannerContact bgImage="/img/banner/contact.JPG" /> */}
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const detail = await getSingleMember(slug);

  return {
    props: {
      detail,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  // const members = await getAllMembers();
  const members = await getMembers();

  const paths = members.map((member) => ({
    params: { slug: member.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}
