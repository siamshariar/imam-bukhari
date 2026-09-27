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
                title="কোর্স পরিচিতি"
                chars={[
                  "আরবি ভাষায় দক্ষতা অর্জনের লক্ষ্যে কুল্লিয়াতুল কুরআনিল কারীম-এর আরবি ভাষা ইনস্টিটিউট ‘দাওরাতুল লুগা আল-আরাবিয়্যাহ লিল আগরাদ আল-একাডেমিয়্যাহ' (একাডেমিক অ্যারাবিক ল্যাঙ্গুয়েজ কোর্স) অফার করেছে।",
                  "অ্যারাবিক ল্যাঙ্গুয়েজ কোর্সটি ১ বছর মেয়াদী, ৬ মাসের দুই সেমিস্টারে বিভক্ত।",
                  "প্রথম সেমিস্টারে প্রায় ৩০০ টি ক্লাস এবং দ্বিতীয় সেমিস্টারে প্রায় ৩৮০ টি ক্লাস।",
                  "প্রতিটি ক্লাসের ব্যাপ্তি ১ ঘন্টা করে সপ্তাহে ৫ দিন ক্লাস।                  ",
                  "কুল্লিয়াতুল কুরআনিল কারীম-এর ক্যাম্পাসে উপস্থিত থেকে সরাসরি ক্লাস।",
                  "কোর্সের টেক্সট বুক প্রদান।",
                  "সাফল্যের সাথে কোর্স সমাপ্তির পর সার্টিফিকেট প্রদান।",
                  "আরবি ভাষা কোর্স সমাপ্ত করার পর শিক্ষাগত যোগ্যতা অনুযায়ী সানাবিয়্যাহ কিংবা কুল্লিয়ার স্তরে ভর্তির সুযোগ রয়েছে।",
                ]}
              />
              <CharSection
                reverse={false}
                title="ভর্তির যোগ্যতা"
                chars={[
                  "একাডেমিক অ্যারাবিক ল্যাঙ্গুয়েজ কোর্সে ভর্তির জন্য দাখিল/ মুতাওয়াসসিতাহ/ কাফিয়া পর্যায়ের জ্ঞান থাকতে হবে ।",
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
                                <td>সেমিস্টার ফি</td>
                                <td>৩০,০০০/- (৫০০০ x ৬)</td>
                              </tr>
                            </table>
                            <p style={{marginTop:`10px`}}>প্রথম ৩০ জনের জন্য ৫০% ছাড়।</p>
                          </p>
                        </div>
                      </div>

                      <div className="content_cell">
                        <div>
                          <h3>ভর্তি লিংক</h3>
                        </div>
                        <div>
                          <p>
                            <a target="_blank" href="https://forms.gle/StKr9sHnQUhz2i3c6">
                              https://forms.gle/StKr9sHnQUhz2i3c6
                            </a>
                            <p style={{marginTop:`10px`}}>কুল্লিয়ার অফিস থেকেও ভর্তি ফরম সংগ্রহ করা যাবে।</p>
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
  const slug = "academic-arabic-language";
  const details = await getCourseDetails(slug);

  return {
    props: {
      details,
    },
    revalidate: 60, // Revalidate every 60 seconds
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
