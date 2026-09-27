import parse from "html-react-parser";

export default function TextBlock({ aboutContent, title, pera, btn, btnText, btnLink, kulliyatulQuranilKareemDetailData }) {
  const ButtonComponent = btn;
  
  // Use API data if available, otherwise use static props
  const apiData = kulliyatulQuranilKareemDetailData;
  
  const finalTitle = apiData?.title || title;
  const finalContent = apiData?.description || null;
  
  return (
    <div className="textBlock" style={{backgroundColor: `#edece9`}}>
      <h2>{finalTitle}</h2>
      
      {/* If API data is available, use it; otherwise use aboutContent */}
      {finalContent ? (
        <p className="textBlock__para">{finalContent}</p>
      ) : (
        aboutContent?.map((item, index) => (
          <p className="textBlock__para" key={index}>
            {item.children.map((child, childIndex) =>
              child.bold ? (
                <b key={childIndex}>{child.text}</b>
              ) : (
                child.text
              )
            )}
          </p>
        ))
      )}
      
      <div className="textBlock__btn">
        {ButtonComponent && <ButtonComponent text={btnText} link={btnLink} />}
      </div>
    </div>
  );
}
