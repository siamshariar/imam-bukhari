import { server } from "../lib/config";
import Meta from "../components/core/Meta";
import Banner from "../components/ui/BannerPrimary";
import BannerContact from "../components/ui/BannerContact";

export default function Message() {
  return (
    <>
      <Meta
        title=""
        description=""
        url={`${server}/academic-head-message`}
        image={`${server}/img/default_share.png`}
        type="website"
      />

      <div className="page_wrapper content_page">
        <Banner
          title="একাডেমিক প্রধানের বাণী"
          subTitle=""
          bgImage="/img/banner/photo.jpg"
        />

        <section className="member-detail">
          <div className="basic_paddings">
            <div className="container">
              <div className="member-detail-content">
                <div className="member-detail-left">
                  <div className="content_page_top_image">
                    <div className="content_page_top_image_inner">
                      <img src="/img/members/academic-head.JPG" alt="" />
                    </div>
                  </div>
                </div>
                <div className="member-detail-right">
                  <div className="content_page_detail">
                    <p>
                      শিক্ষাবিহীন জাতি অনুন্নত এবং অবিকশিত। তাই কোন জাতির বিকাশ
                      ও উন্নয়নের জন্য শিক্ষার ভূমিকা অপরিহার্য। ফলে যে
                      শিক্ষা-আদর্শে মানবজাতির সর্বাঙ্গীণ কল্যাণ রয়েছে মূলত
                      সেটিই সর্বকালের সর্বশ্রেষ্ঠমানব মুহাম্মদ (সল্লাল্লাহ
                      আলাইহি ওয়া সাল্লাম) সমগ্র বিশ্ববাসীর জন্য উপহার দিয়ে
                      গেছেন; যা সর্বজন স্বীকৃত। এ মর্মে আল্লাহ বলেন, “যিনি
                      তোমাদের কাছে আমার আয়াতসমূহ পাঠ করেন, তোমাদেরকে পরিশুদ্ধ
                      করেন এবং কিতাব ও হেকমত শিক্ষা দেন। আর তা শিক্ষা দেন যা
                      তোমরা জানতে না” [সূরা বাকারাহ্: ১৫১]।
                    </p>

                    <p>
                      সুশিক্ষায় শিক্ষিত; আদর্শ জাতি গঠনের জন্য দেশের বিভিন্ন
                      প্রতিষ্ঠান, সংশ্লিষ্ট বোর্ড ও শিক্ষাবিদগণ তাদের সাধ্যমত
                      বিভিন্ন শিক্ষা কারিকুলাম প্রণয়ন করেছেন। কিন্তু হতাশাজনক
                      হলেও সত্য যে জাতির সামনে এখনো সন্তোষজনক কোন শিক্ষা
                      কারিকুলাম প্রতিষ্ঠিত হয়নি; যাদ্বারা ইসলামের প্রকৃত
                      বার্তাবাহক হিসেবে জাতির সামনে উপস্থাপিত হবে, চিন্তা-মনন ও
                      কর্মে বহন করবে পুরোপুরি সালাফে সালেহীনের আদর্শ এবং
                      সাফল্যমণ্ডিত হবে ইহ-পরকালের উভয় জগতে। এ ক্ষেত্রে বলা যায়
                      ওহীর অবতরণ কেন্দ্রে অবস্থিত ‘মদিনা ইসলামী বিশ্ববিদ্যালয়'
                      হলো নবী (সল্লাল্লাহ আলাইহি ওয়া সাল্লাম) এর রেখে যাওয়া
                      শিক্ষা-আদর্শের এক অনন্য ও উজ্জ্বল নমুনা।
                    </p>

                    <p>
                      আলহামদুলিল্লাহ! অত্যন্ত আনন্দদায়ক খবর হলো যে, ‘মদিনা
                      ইসলামী বিশ্ববিদ্যালয়'-এর সম্পূর্ণ মানহাজ ও কারিকুলাম
                      অনুকরণে ঢাকায় প্রতিষ্ঠিত হয়েছে ‘কুল্লিয়াতুল কুরআনিল
                      কারীম ওয়াদ-দিরাসাত আল-ইসলামিয়াহ’ নামক উচ্চতর শিক্ষা
                      প্রতিষ্ঠান; যা আগামী দিনে বিশুদ্ধ ইলম ও মানহাজ
                      প্রচার-প্রসারে অগ্রণী ভূমিকা রাখবে এবং দক্ষিণ এশিয়ার
                      অন্যতম ইসলামী বিদ্যাপীঠে রূপান্তরিত হবে ইন-শা আল্লাহ।
                    </p>

                    <p>
                      পরিশেষে, মহান আল্লাহর কাছে অত্র প্রতিষ্ঠানের সর্বাঙ্গীণ
                      সফলতা কামনা করছি, যেন দক্ষ মুখলিস আলেম গড়ার মাধ্যম হিসেবে
                      কবুল করেন- আমীন।
                    </p>

                    <div className="content_page_bottom">
                      <p>বিনীত</p>
                      <p>ড. আব্দুল বাসির বিন নওশাদ</p>
                      <p>পিএইচডি, মদিনা ইসলামী বিশ্ববিদ্যালয়, সৌদী আরব।</p>
                      <p>সহকারী অধ্যাপক ও একাডেমিক প্রধান, কুল্লিয়াতুল কুরআনিল কারীম ওয়াদ-দিরাসাতিল ইসলামিয়্যাহ, উত্তরা, ঢাকা।</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <BannerContact bgImage="/img/banner/contact.JPG" /> */}
      </div>
    </>
  );
}

// export async function getStaticProps(context) {
//   const courses = await getAllCourses();

//   return {
//     props: {
//       courses,
//     },
//   };
// }
