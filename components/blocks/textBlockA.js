import parse from "html-react-parser";

export default function TextBlock({ aboutContent, title, pera, btn, btnText, btnLink, imamBukhariDetailData }) {
  const ButtonComponent = btn;
  
  // Use API data if available, otherwise use static props
  const finalTitle = imamBukhariDetailData?.title || title;
  const apiSubtitle = imamBukhariDetailData?.subtitle;
  
  return (
    <div className="textBlock" style={{backgroundColor: `#edece9`}}>
      <h2>{finalTitle}</h2>
      
      {/* Display API subtitle if available */}
      {apiSubtitle && (
        <div className="textBlock__subtitle">
          {apiSubtitle.split('\n\n').map((paragraph, index) => 
            paragraph.trim() && (
              <p className="textBlock__para" key={`api-${index}`}>
                {paragraph.trim()}
              </p>
            )
          )}
        </div>
      )}
      
      {/* Display original aboutContent if no API data or as fallback */}

      <div className="textBlock__btn">
        {ButtonComponent && <ButtonComponent text={btnText} link={btnLink} />}
      </div>
    </div>
  );
}
