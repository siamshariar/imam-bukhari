import classNames from "classnames";
import parse from "html-react-parser";
import RichText from "../../rich-text";
import { apiServer } from "../../../lib/config";

const MemberDetail = ({ member }) => {
  return (
    <section className="member-detail">
      <div className="basic_paddings">
        <div className="container">
          <div className="member-detail-content">
            <div className="member-detail-left">
              <div className="content_page_top_image">
                <div className="content_page_top_image_inner">
                  <img src={`${member.imagePath}`} alt="" />
                </div>
              </div>
              {/*<ul className="ex-com-social">*/}
              {/*  <li>*/}
              {/*    <a className="facebook" href="#">*/}
              {/*      <i className="fab fa-facebook-f"></i>*/}
              {/*    </a>*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    <a className="twitter" href="#">*/}
              {/*      <i className="fab fa-twitter"></i>*/}
              {/*    </a>*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    <a className="linkedin" href="#">*/}
              {/*      <i className="fab fa-linkedin-in"></i>*/}
              {/*    </a>*/}
              {/*  </li>*/}
              {/*</ul>*/}
            </div>
            <div className="member-detail-right">
              {/* <div className="content_page_top_name">{member.name}</div> */}
              <div className="content_page_detail">
                {/* <h2>পরিচিতি</h2>
                <p>
                  ড. মোহাম্মদ মানজুরে ইলাহী একাধারে একজন গবেষক, শিক্ষাবিদ,
                  ইসলামিক স্কলার ও লেখক, অন্যদিকে তিনি একজন দা‘ঈ ইলাল্লাহ ও
                  স্বনামধন্য মিডিয়া ব্যক্তিত্ব। ইসলামী গবেষণা, ইসলাম প্রচার ও
                  টিভি/ইউটিউব চ্যানেলে আলোচনার মাধ্যমে তিনি জাতীয় ও
                  আন্তর্জাতিকভাবে পরিচিত। তিনি জাতীয় বিশ্ববিদ্যালয়ের ইসলামিক
                  স্টাডিজ বিভাগের সহযোগী অধ্যাপক হিসাবে কর্মরত রয়েছেন।
                </p>

                <h2>শিক্ষা জীবন</h2>

                <p>
                  ড. মোহাম্মদ মানজুরে ইলাহী ১৯৮৮ সালে মদীনা ইসলামী
                  বিশ্ববিদ্যালয়ের শরী‘আহ অনুষদে ভর্তি হন এবং অত্যন্ত কৃতিত্বের
                  সাথে সেখান থেকে ব্যাচেলর, মাস্টার্স ও পিএইচডি ডিগ্রি অর্জন
                  করেন। তিনি মদীনা ইসলামী বিশ্ববিদ্যালয় থেকে পিএইচডি ডিগ্রি
                  অর্জনকারী প্রথম বাংলাদেশী।
                </p> */}

                <RichText content={member.description} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberDetail;
