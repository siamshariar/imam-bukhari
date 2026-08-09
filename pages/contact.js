import { server } from "../lib/config";
import Meta from "../components/core/Meta";
import Banner from "../components/ui/BannerPrimary";
import ContactMap from "../components/pages/contact/Map";
import ContactForm from "../components/pages/contact/Form";
import { getContactInfo, getMenu, filterMetaInfo } from "../lib/fetch3";

export default function Contact({ contactInfo, pageInfo }) {
  return (
    <>
      <Meta
				title={pageInfo?.metaInfo?.title ?? "যোগাযোগ"}
				description={pageInfo?.metaInfo?.description ?? ""}
        url={`${server}/contact`}
        image={`${server}/img/logo/logo.png`}
        type="website"
      />

      <div className="page_wrapper contact_page">
        <Banner
          title={pageInfo?.metaInfo?.title ?? "যোগাযোগ"}
          subTitle=""
          bgImage="/img/banner/photo.jpg"
        />

        <div id="modal_contact_us" className="modal visible">
          <div className="modal-content">
            <div className="container contact_us__container">
              <div className="first_container">
                <ContactMap googleMapUrl={contactInfo.googleMapUrl}/>
              </div>

              <div className="second_container">
                <h2 className="mob">যোগাযোগ করুন</h2>
                <ul className="agent">
                  <li>
                    <p className="feature">ঠিকানা</p>
                    <div className="contact_us__address">
                      <p>
                        {contactInfo.house}
                        <br />
                        {contactInfo.road}
                        <br />
                        {contactInfo.district}
                      </p>
                    </div>
                  </li>

                  <li>
                    <p className="feature">ইমাম বুখারী ট্রাস্ট</p>
                    <p>
                      <a className="link" href="tel:+8801852808554">
                        +880 1852808554
                      </a>
                    </p>
                    <p>
                      <a
                        className="link"
                        href="mailto:bukharimasjid.bd@gmail.com"
                      >
                        bukharimasjid.bd@gmail.com
                      </a>
                    </p>
                  </li>
                </ul>

                <div>
                  <h2 className="desk">যোগাযোগ করুন</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const contactInfo = await getContactInfo();
  const menuItems = await getMenu();
  const pageInfo = await filterMetaInfo(menuItems, 'contact');

  return {
    props: {
      contactInfo,
      menuItems,
      pageInfo
    },
    revalidate: 60,
  };
}