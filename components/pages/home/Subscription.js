import Link from "next/link";

export default function HomeSubscription({ bgColor }) {
  return (
    <section id="get_touch" style={{ backgroundColor: bgColor }} className="home_get_touch">
      <div className="vertical_paddings">
        <div className="container">
          <div className="section_content__col text">
            <div className="section_content__text_wrap">
              <h2 className="home_section__title1 get_touch_title">
                আমাদের সাথে থাকুন
              </h2>
              <p>
                ‘কুল্লিয়াতুল কুরআনিল কারীম ওয়াদ-দিরাসাতিল ইসলামিয়্যাহ’ বিশুদ্ধ
                ধারার একটি উচ্চতর ইসলামী শিক্ষা, প্রশিক্ষণ ও গবেষণা প্রতিষ্ঠান।
                এতে থাকছে সানাবিয়্যাহ (হায়ার সেকেন্ডারি) ও কুল্লিয়া
                (ব্যাচেলর) পর্যায়ের শিক্ষা ব্যবস্থা। আরো রয়েছে শিক্ষক
                প্রশিক্ষণ কোর্স এবং বিভিন্ন শ্রেণী-পেশার লোকদের জন্য আরবি ভাষা
                কোর্স। এবং গুরুত্বপূর্ণ একাধিক বিষয়ের ওপর ডিপ্লোমা ও
                সার্টিফিকেট কোর্স।
              </p>
              <div className="get_touch_btn">
                <Link href="/contact">
                  <a className="btn btn--primary">যোগাযোগ করুন</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
