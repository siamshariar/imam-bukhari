import Link from "next/link";

const Banner = ({ bgImage }) => {
  return (
    <section className="image_section">
      <div
        className="work_with_us"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${bgImage})`,
        }}
      >
        <div className="work_with_us__content">
          <h2>কুল্লিয়াতুলের সাথে কাজ করুন</h2>
          <p className="text_content">
            রিয়েল এস্টেট বিক্রির বিষয়ে ইভান যা পছন্দ করেন তা হল অন্যদের বাড়ির
            মালিকানা অর্জনে সহায়তা করা, কারণ অন্যদের সাহায্য করার জন্য তার আবেগ
            রয়েছে।
          </p>

          <Link href="/contact" legacyBehavior>
            <a className="btn btn--secondary contact_us__btn">যোগাযোগ করুন</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
