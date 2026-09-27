import { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import parse from "html-react-parser";

export default function HomeFaqs({ faqs }) {
  const [activeTab, setActiveTab] = useState(0);

  const activateTab = (index) => {
    setActiveTab(activeTab === index ? -1 : index);
  };

  return (
    <div className="faqs_root">
      <div className="container">
        <div className="basic_paddings">
          <h2>প্রায়শই জিজ্ঞাসিত প্রশ্ন</h2>
          <div className="faqs_inner">
            {faqs &&
              faqs.map((faq, index) => (
                <div className="faqs_item" key={faq.id}>
                  <Panel
                    {...faq.attributes}
                    activeTab={activeTab}
                    index={index}
                    activateTab={activateTab}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Panel = ({ question, answer, activeTab, index, activateTab, detail }) => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.scrollHeight);
  }, []);

  return (
    <div
      className={classNames(
        "faqs_panel",
        activeTab === index ? "faqs_active" : ""
      )}
    >
      <button className="faqs_label" onClick={() => activateTab(index)}>
        {question}
      </button>
      <div
        className="faqs_desc"
        style={{ height: activeTab === index ? height : 0 }}
        ref={ref}
      >
      <p className="faqs_text">
        {parse(answer)}
        {detail?.postContent && <RichText content={detail.postContent} />}
      </p>
      </div>
    </div>
  );
};
