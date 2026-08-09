import Image from "next/image";
import { server } from "../../../lib/config";

export default function AboutMou() {
  return (
    <section id="services">
      <div className="services basic_paddings">
        <div className="container">
          <div className="services__wrapper">
            <div id="services__outer_row" className="content_row">
              <div id="services__outer_cell" className="content_cell">
                <div id="services_header">
                  <h2>কুল্লিয়াতুল কুরআন-এর সাথে আন্তর্জাতিক  বিশ্ববিদ্যালয়সমূহের অ্যাফিলিয়েশন ও এমওইউ</h2>
                </div>
                <p style={{fontSize:`18px`}}>
                  কুল্লিয়ার সাথে মুসলিম বিশ্বের বিভিন্ন বিশ্ববিদ্যালয়ের এমওইউ প্রক্রিয়াধীণ রয়েছে, যাতে এ প্রতিষ্ঠানের সাথে সেগুলোর একাডেমিক অ্যাফিলিয়েশন ও কো-অপারেশন সৃষ্টি হয় এবং শিক্ষার্থীরা সহজেই ব্যাচেলর কিংবা মাস্টার্স পর্যায়ে তাদের ক্রেডিট ট্রান্সফার করতে পারে। ফলে বিশ্বখ্যাত আরবি ও ইসলামী বিশ্ববিদ্যালয়গুলোতে এ প্রতিষ্ঠানের শিক্ষার্থীদের এডমিশন সহজ হবে। এতে আমাদের শিক্ষার্থী ও গ্র্যাজুয়েটদের মধ্যে বিভিন্ন বিষয়ে দক্ষতা অনেক বেশি বৃদ্ধি পাবে ইনশা আল্লাহ।
                </p>
                <p style={{fontSize:`18px`}}>
                  যে সকল প্রতিষ্ঠানের সাথে কুল্লিয়ার এমওইউ করা হবে,
                </p>
                <div id="services__inner_row" className="content_row">
                  <div id="" className="content_cell">
                    <div id="services__cell1">
                      <ul>
                        <li>মদীনা ইসলামী বিশ্ববিদ্যালয়, মদীনা</li>
                        <li>উম্মুল কুরা বিশ্ববিদ্যালয়, মক্কা </li>
                        <li>কিং সউদ বিশ্ববিদ্যালয়, রিয়াদ</li>
                        <li>ইমাম মুহাম্মদ বিন সউদ ইসলামী বিশ্ববিদ্যালয়, রিয়াদ</li>
                      </ul>
                    </div>
                  </div>

                  <div id="" className="content_cell">
                    <div id="services__cell2">
                      <ul>
                        <li>কিং আবদুল আযীয বিশ্ববিদ্যালয়, জেদ্দা</li>
                        <li>আল-আযহার বিশ্ববিদ্যালয়, মিশর</li>
                        <li>আইন শামস বিশ্ববিদ্যালয়, মিশর</li>
                        <li>ইউনিভার্সিটি অব মালয়, মালয়েশিয়া</li>
                      </ul>
                    </div>
                  </div>

                  <div id="" className="content_cell">
                    <div id="services__cell3">
                      <ul>
                        <li>ইন্টারন্যাশনাল ইসলামিক ইউনিভার্সিটি, মালয়েশিয়া</li>
                        <li>ইউনিভার্সিটি অব আলজিয়ার্স, আলজেরিয়া</li>
                        <li>মুহাম্মাদ আল-খামিস ইউনিভার্সিটি, মরক্কো </li>
                        <li>ইউনিভার্সিটি অব কুয়েত, কুয়েত</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
