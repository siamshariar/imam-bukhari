import { server } from "../lib/config";
import Meta from "../components/core/Meta";
import Banner from "../components/ui/BannerPrimary";
import BannerContact from "../components/ui/BannerContact";
import { getChairmanMessage } from "../lib/fetch3";

export default function Message({ chairmanMessage }) {
  return (
    <>
      <Meta
        title="চেয়ারম্যান এর বানী"
        description="ইমাম বুখারী ট্রাস্ট বিশুদ্ধ ধারার একটি উচ্চতর ইসলামী শিক্ষা, প্রশিক্ষণ ও গবেষণা প্রতিষ্ঠান"
        url={`${server}/chairman-message`}
        image={`${server}/img/default_share.png`}
        type="website"
      />

      <div className="page_wrapper content_page">
        <Banner
          title="চেয়ারম্যান এর বানী"
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
                      <img src="/img/members/director.jpeg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="member-detail-right">
                  <div className="content_page_detail">
                  <div>
                      {Array.isArray(chairmanMessage?.description)
                        ? chairmanMessage.description.map((item, index) => (
                            <p key={index} className="content_page_bottom">
                              {item.children?.map((child, childIndex) => (
                                <span
                                  key={childIndex}
                                  dir={/[؀-ۿ]/.test(child.text) ? "rtl" : "ltr"} // Check if the text contains Arabic characters
                                  style={{
                                    display: "block", // Optional: Ensure block layout for text alignment
                                    textAlign: /[؀-ۿ]/.test(child.text) ? "right" : "left",
                                  }}
                                >
                                  {child.text}
                                </span>
                              ))}
                            </p>
                          ))
                        : "No description available."}
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

export async function getStaticProps() {
  const chairmanMessage = await getChairmanMessage();

  return {
    props: {
      chairmanMessage
    },
    revalidate: 60, 
  };
}