import { server } from "../../lib/config";
import { getAllCourses, getCourseDetails } from "../../lib/fetch2";
import Link from "next/link";
import parse from "html-react-parser";
import Meta from "../../components/core/Meta";
import Banner from "../../components/ui/BannerPrimary";
import BoardOfDirectorsList from "../../components/pages/members/Directors";
import TeachersList from "../../components/pages/members/Teachers";
import BannerContact from "../../components/ui/BannerContact";
import CharSection from "../../components/ui/CharSection";
import HomeSubscription from "../../components/pages/home/Subscription";

// import Share from "../../components/share";

export default function CourseDetail({ details }) {
  return (
    <>
      <Meta
        title={details.title}
        description={details.excerpt}
        url={`${server}/courses/${details.slug}`}
        image={`${server}/img/logo/logo.png`}
        type="article"
      />

      <div className="page_wrapper member_detail_page">
        <Banner
          title={details.title}
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
                  "কুল্লিয়া স্তরে ভর্তির জন্য আলিম/সানাবিয়্যাহ/মেশকাত/এইচএসসি পাশ হতে হবে।",
                  "শিক্ষার্থীকে অবশ্যই চরিত্রবান ও আদব-কায়দা সম্পন্ন হতে হবে।",
                  "পূর্ববর্তী সকল সনদপত্র ও নম্বরপত্র সত্যায়ন করে আবেদন পত্রের সাথে জমা দিতে হবে।",
                  "ভর্তি পরীক্ষায় উত্তীর্ণ হতে হবে।",
                  "পূর্ণকালীন শিক্ষার্থী হিসেবে ভর্তি হতে হবে।",
                  "ক্লাসে শতভাগ উপস্থিত নিশ্চিত করতে হবে।",
                  "কুল্লিয়ার নিয়ম-কানুন ও সকল নির্দেশনা মেনে চলতে হবে।",
                ]}
              />
              <CharSection
                reverse={false}
                title="প্রত্যাশিত প্রাপ্তি"
                chars={[
                  "ইসলামী শারিয়া জ্ঞান ও আরবি ভাষায় পূর্ণ দক্ষতা অর্জন।",
                  "কমপক্ষে ৫ পারা কুরআন হিফয করা।",
                  "বিষয়ভিত্তিক হাদিস হিফয করা।",
                  "বিভিন্ন সফটস্কিল শেখা এবং তা জীবনে প্রয়োগ করতে পারা ।",
                  "বহুমূখী দক্ষতা বৃদ্ধির জন্য বক্তৃতা, বিতর্ক ও লেখনীর ক্ষেত্রে প্রশিক্ষণ।",
                  "একাডেমিক ও সাংস্কৃতিক প্রতিযোগিতার মাধ্যমে শিক্ষার্থীদের সৃজনশীলতার বিকাশ।",
                  "উচ্চতর ডিগ্রি অর্জনের জন্য বিশ্বের স্বনামধন্য বিশ্ববিদ্যালয়ের সাথে ক্রেডিট ট্রান্সফার।",
                ]}
              />
            </div>
          </div>
        </section>

        <section id="qna">
          <div style={{paddingBottom:`80px`}} className="qna basic_paddings">
            <div className="container">
              <div className="qna__wrapper">
                <div id="qna__outer_row" className="content_row">
                  <div id="qna__outer_cell" className="content_cell">
                    {/*<div id="qna_header">*/}
                    {/*  <h2>Your Questions, Answered</h2>*/}
                    {/*</div>*/}
                    <div style={{fontSize:`18px`}} id="qna__inner_row" className="content_row">
                      <div className="content_cell">
                        <div>
                          <h3>
                            ভর্তি ফি ও মাসিক বেতন কাঠামো
                          </h3>
                        </div>
                        <div>
                          <p>
                            <table className="course-detail-table">
                              <tr>
                                <th>খাতসমূহ</th>
                                <th>পরিমাণ</th>
                              </tr>
                              <tr>
                                <td>ভর্তি ফি</td>
                                <td>৫০০০/</td>
                              </tr>
                              <tr>
                                <td>মাসিক বেতন</td>
                                <td>৫০০০/</td>
                              </tr>
                              <tr>
                                <td>সেশন ফি</td>
                                <td>৫০০০/</td>
                              </tr>
                              <tr>
                                <td>লাইব্রেরী ফি (প্রতি সেমিস্টার)</td>
                                <td>১০০০/</td>
                              </tr>
                              <tr>
                                <td>পরীক্ষার ফি (প্রতি সেমিস্টার)</td>
                                <td>১০০০/</td>
                              </tr>
                              <tr>
                                <td>কম্পিউটার ল্যাব ফি</td>
                                <td>৫০০/</td>
                              </tr>
                              <tr>
                                <td>উন্নয়ন ফি</td>
                                <td>১০০০/</td>
                              </tr>
                              <tr>
                                <td>পরিচয়পত্র</td>
                                <td>২০০/</td>
                              </tr>
                            </table>
                          </p>
                        </div>
                      </div>

                      <div className="content_cell">
                        <div>
                          <h3>সম্ভাব্য সময়সূচি- ভর্তি পরীক্ষা</h3>
                        </div>
                        <div>
                          <p>
                            <table className="course-detail-table">
                              <tr>
                                <th>ভর্তি পরীক্ষার ১ম পর্ব</th>
                                <th>ভর্তি পরীক্ষার ২য় পর্ব</th>
                              </tr>
                              <tr>
                                <td>ডিসেম্বর মার্চ জুলাই</td>
                                <td>জানুয়ারি এপ্রিল আগস্ট</td>
                              </tr>
                            </table>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>





        <HomeSubscription />
        {/* <BannerContact bgImage="/img/banner/photo.jpg" /> */}
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  // const slug = params.slug;
  const slug = "kulliya";
  const details = await getCourseDetails(slug);

  return {
    props: {
      details,
    },
  };
}

// export async function getStaticPaths() {
//   const courses = await getAllCourses();

//   const paths = courses.map((course) => ({
//     params: { slug: course.slug },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }
