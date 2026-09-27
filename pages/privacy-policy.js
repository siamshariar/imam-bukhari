import { server } from "../lib/config";
import Meta from "../components/core/Meta";
import Banner from "../components/ui/BannerPrimary";
import BannerContact from "../components/ui/BannerContact";

export default function PrivacyPolicy() {
  return (
    <>
      <Meta
        title=""
        description=""
        url={`${server}/privacy-policy`}
        image={`${server}/img/default_share.png`}
        type="website"
      />

      <div className="page_wrapper policy_page">
        <Banner
          title="গোপনীয়তা বিবৃতি"
          subTitle=""
          bgImage="/img/banner/photo.jpg"
        />
        <div
          style={{
            height: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "50px",
          }}
        >
          গোপনীয়তা বিবৃতি
        </div>

        {/* <BannerContact bgImage="/img/banner/contact.JPG" /> */}
      </div>
    </>
  );
}

// export async function getStaticProps(context) {
//   const playlists = await getAllPlaylists2();

//   return {
//     props: {
//       playlists: playlists.playlists,
//     },
//   };
// }
