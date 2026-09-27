import { server } from "../lib/config";
import Meta from "../components/core/Meta";
import Banner from "../components/ui/BannerPrimary";
import BannerContact from "../components/ui/BannerContact";
import { getAcademicHeadMessage } from "../lib/fetch3";

export default function Message({ academicHeadMessage }) {
  return (
    <>
      <Meta
        title={academicHeadMessage?.title || "একাডেমিক প্রধানের বাণী"}
        description={academicHeadMessage?.excerpt || "ইমাম বুখারী ট্রাস্ট বিশুদ্ধ ধারার একটি উচ্চতর ইসলামী শিক্ষা, প্রশিক্ষণ ও গবেষণা প্রতিষ্ঠান"}
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
                      <img src={academicHeadMessage?.imageUrl || "/img/members/academic-head.JPG"} alt="" />
                    </div>
                  </div>
                </div>
                <div className="member-detail-right">
                  <div className="content_page_detail">
                    <div>
                      {(() => {
                        let inSignature = false;
                        return Array.isArray(academicHeadMessage?.description)
                          ? academicHeadMessage.description.map((item, index) => {
                              const isBlank = item.children?.every(
                                (child) => !child.text?.trim()
                              );
                              if (isBlank) {
                                return (
                                  <div key={index} style={{ height: "1rem" }} />
                                );
                              }
                              const isRtl = item.children?.some((child) =>
                                /[؀-ۿ]/.test(child.text)
                              );
                              const text = item.children
                                ?.map((child) => child.text)
                                .join("")
                                .trim();
                              const isSignatureStart = text === "বিনীত";
                              const wasAlreadyInSignature = inSignature;
                              if (isSignatureStart) inSignature = true;
                              const isSignatureLine = inSignature;
                              return (
                                <p
                                  key={index}
                                  className="content_page_bottom"
                                  dir={isRtl ? "rtl" : "ltr"}
                                  style={{
                                    textAlign: isRtl ? "right" : "left",
                                    marginTop: isSignatureStart
                                      ? "0.6rem"
                                      : wasAlreadyInSignature
                                      ? "-2px"
                                      : 0,
                                    lineHeight: isSignatureLine ? 1.75 : undefined,
                                  }}
                                >
                                  {item.children?.map((child, childIndex) => (
                                    <span key={childIndex}>{child.text}</span>
                                  ))}
                                </p>
                              );
                            })
                          : "No description available.";
                      })()}
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

export async function getStaticProps(context) {
  const academicHeadMessage = await getAcademicHeadMessage();

  return {
    props: {
      academicHeadMessage,
    },
    revalidate: 60,
  };
}
