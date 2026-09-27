import classNames from "classnames";
import parse from "html-react-parser";

const CharSection = ({ reverse, title, chars }) => {
  return (
    <div
      className={classNames(
        "section_content__row",
        reverse ? "reverse" : "straight"
      )}
    >
      <span className="center-dot"></span>
      <div className="section_content__col">
        <div className="section_content__col__img">
          <div className="section_content__col__img__text">
            <ul className="home_characteristics">
              {chars && chars.map((char, index) => (
                char ? <li key={index}>{typeof char === 'string' ? char : (char.listItem || char.text || '')}</li> : null
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="section_content__col text">
        <div className="section_content__text_wrap des-title-sec">
          <p className="section_content__text1">{parse(title)}</p>
          {/* <p className="section_content__text2">
                  শিক্ষাবিহীন জাতি অনুন্নত এবং অবিকশিত। তাই কোন জাতির বিকাশ ও উন্নয়নের জন্য শিক্ষার ভূমিকা অপরিহার্য। ফলে যে শিক্ষা-আদর্শে মানবজাতির সর্বাঙ্গীণ কল্যাণ রয়েছে মূলত সেটিই সর্বকালের সর্বশ্রেষ্ঠমানব মুহাম্মদ (সল্লাল্লাহ আলাইহি ওয়া সাল্লাম) সমগ্র বিশ্ববাসীর জন্য উপহার দিয়ে গেছেন; যা সর্বজন স্বীকৃত।
                </p>  */}
          {/* <a className="link" href="">বিস্তারিত দেখুন</a>  */}
        </div>
      </div>
    </div>
  );
};

export default CharSection;
