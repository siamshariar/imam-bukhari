import parse from "html-react-parser";
import { server } from "../lib/config";
import Meta from "../components/core/Meta";
import Banner from "../components/ui/BannerPrimary";
import BannerContact from "../components/ui/BannerContact";
import CharSection from "../components/ui/CharSection";
import HomeSubscription from "../components/pages/home/Subscription";

export default function AdmissionPage() {
  return (
    <>
      <Meta
        title="ভর্তি তথ্য"
        description="ভর্তির শর্তাবলী কুল্লিয়াতুল কুরআনিল কারীম ওয়াদ-দিরাসাতিল ইসলামিয়্যাহ"
        url={`${server}/admission`}
        image={`${server}/img/logo/logo.png`}
        type="website"
      />

      <div className="page_wrapper admission_page">
        <Banner
          title="ভর্তি তথ্য"
          subTitle=""
          bgImage="/img/banner/photo.jpg"
        />

          <section className="home_char_section">
              <div className="center-line"></div>
              <div className="basic_paddings">
                  <div className="container">
                      <CharSection
                          reverse={true}
                          title="ভর্তির শর্তাবলী"
                          chars={[
                              "শিক্ষার্থীকে অবশ্যই চরিত্রবান ও আদবকায়দা সম্পন্ন হতে হবে।",
                              "কুল্লিয়ার নিয়ম-কানুন ও সকল নির্দেশনা মেনে চলতে হবে।",
                              "পূর্ণকালীন শিক্ষার্থী হিসেবে ভর্তি চলতে হবে।",
                              "ভর্তি পরীক্ষায় উত্তীর্ণ হতে হবে।",
                              "ক্লাসে শতভাগ উপস্থিত নিশ্চিত করতে হবে।",
                              "পূর্ববর্তী সকল সনদপত্র ও নম্বরপত্র সত্যায়ন করে আবেদন পত্রের সাথে জমা দিতে হবে।",
                              "সনদসহ সকল কাগজপত্র অন-লাইন আবেদনের সাথে সংযুক্ত করে পাঠাতে হবে।",
                              "সানাবিয়্যাহ বিভাগে ভর্তির জন্য দাখিল/মেশকাত/এসএসসি পাশ হতে হবে।",
                              "কুল্লিয়া স্তরে ভর্তির জন্য সানাবিয়্যাহ/আলিম/এইচএসসি পাশ হতে হবে।",
                              "আরবি ভাষায় যথেষ্ট দক্ষতা না থাকলে প্রয়োজনানুযায়ী আরবি ভাষা কোর্স করা বাধ্যতামূলক।",
                              "কুল্লিয়া কর্তৃক নির্ধারিত সকল শর্ত মেনে চলতে হবে।",
                          ]}
                      />

                  </div>
              </div>
          </section>

          <HomeSubscription bgColor="#f8f8f8" />
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
