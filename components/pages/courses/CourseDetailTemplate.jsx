import { server } from "../../../lib/config";
import Meta from "../../core/Meta";
import Banner from "../../ui/BannerPrimary";
import CharSection from "../../ui/CharSection";
import HomeSubscription from "../home/Subscription";

/**
 * সব /courses/* detail page-এর জন্য একটাই shared template। CMS-এর `course`
 * content-type (courseDetail/courseFee/examSchedule) থেকে data এলে সেটাই
 * দেখাবে, না থাকলে page নিজে যে fallbackSections/fallbackFee/fallbackSchedule
 * পাঠায় (আগের hardcoded content) সেটা দেখাবে — UI অপরিবর্তিত থাকে, শুধু
 * data-এর উৎস CMS-driven হয়ে যায়।
 */
export default function CourseDetailTemplate({
  details,
  fallbackTitle,
  fallbackSections = [],
  fallbackFee = [],
  fallbackSchedule = [],
  admissionLink,
  feeNote,
  admissionNote,
  extraNote,
}) {
  const sections = details?.courseDetail?.length > 0 ? details.courseDetail : fallbackSections;
  const fee = details?.courseFee?.length > 0 ? details.courseFee : fallbackFee;
  const schedule = details?.examSchedule?.length > 0 ? details.examSchedule : fallbackSchedule;
  const title = details?.title || fallbackTitle;

  return (
    <>
      <Meta
        title={title}
        description={details?.excerpt || ""}
        url={`${server}/courses/${details?.slug || ""}`}
        image={`${server}/img/logo/logo.png`}
        type="article"
      />

      <div className="page_wrapper member_detail_page">
        <Banner title={title} subTitle="" bgImage="/img/banner/photo.jpg" />

        <section className="home_char_section">
          <div className="center-line"></div>
          <div className="basic_paddings">
            <div className="container">
              {sections.map((section, index) => (
                <CharSection
                  key={section.id ?? index}
                  reverse={index % 2 === 0}
                  title={section.title}
                  chars={section.listItem || section.chars}
                />
              ))}
            </div>
          </div>
        </section>

        {(fee.length > 0 || schedule.length > 0 || admissionLink) && (
          <section id="qna">
            <div style={{ paddingBottom: `80px` }} className="qna basic_paddings">
              <div className="container">
                <div className="qna__wrapper">
                  <div id="qna__outer_row" className="content_row">
                    <div id="qna__outer_cell" className="content_cell">
                      <div
                        style={{ fontSize: `18px` }}
                        id="qna__inner_row"
                        className="content_row"
                      >
                        {fee.length > 0 && (
                          <div className="content_cell">
                            <div>
                              <h3>ভর্তি ফি ও মাসিক বেতন কাঠামো</h3>
                            </div>
                            <div>
                              <table className="course-detail-table">
                                <tbody>
                                  <tr>
                                    <th>খাতসমূহ</th>
                                    <th>পরিমাণ</th>
                                  </tr>
                                  {fee.map((row, index) => (
                                    <tr key={row.id ?? index}>
                                      <td>{row.title}</td>
                                      <td>{row.amount}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                              {feeNote && <p style={{ marginTop: `10px` }}>{feeNote}</p>}
                            </div>
                          </div>
                        )}

                        {schedule.length > 0 && (
                          <div className="content_cell">
                            <div>
                              <h3>সম্ভাব্য সময়সূচি- ভর্তি পরীক্ষা</h3>
                            </div>
                            <div>
                              <table className="course-detail-table">
                                <tbody>
                                  <tr>
                                    <th>বিবরণ</th>
                                    <th>সময়</th>
                                  </tr>
                                  {schedule.map((row, index) => (
                                    <tr key={row.id ?? index}>
                                      <td>{row.title}</td>
                                      <td>{row.time}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {admissionLink && (
                          <div className="content_cell">
                            <div>
                              <h3>ভর্তি লিংক</h3>
                            </div>
                            <div>
                              <a target="_blank" rel="noreferrer" href={admissionLink}>
                                {admissionLink}
                              </a>
                              {admissionNote && <p style={{ marginTop: `10px` }}>{admissionNote}</p>}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {extraNote && (
          <section className="home_char_section">
            <div className="basic_paddings">
              <div className="container">
                <div className="section_content__text1">{extraNote.title}</div>
                <div className="section_content__text2">{extraNote.text}</div>
              </div>
            </div>
          </section>
        )}

        <HomeSubscription />
      </div>
    </>
  );
}
