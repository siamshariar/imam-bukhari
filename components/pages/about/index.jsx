import { apiServer } from "../../../lib/config";

const AboutContent = ({ aboutData }) => {
  return (
      <>
        <section style={{backgroundColor: `#f3f4f4`}} id="how_it_works">
          <div className="section basic_paddings">
            <div className="container">
              <div className="section_content__row straight">
                <div className="section_content__col">
                  <div className="section_content__col__img">
                    <img src={`${aboutData.image.url}`} alt="Members" />
                  </div>
                </div>

                <div className="section_content__col text">
              <div className="section_content__text_wrap">
                {aboutData.content.map((section, index) => (
                  <div key={index}>
                    {section.children.map((child, childIndex) => (
                      <div
                        key={childIndex}
                        style={{
                          fontWeight: child.bold ? 'bold' : 'normal',
                          fontSize: '19px',
                        }}
                      >
                        {child.text}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default AboutContent;









