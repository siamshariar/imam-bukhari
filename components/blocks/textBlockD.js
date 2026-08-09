import parse from "html-react-parser";

export default function TextBlock({ aboutContent, title, pera, btn, btnText, btnLink, apiData }) {
  const ButtonComponent = btn;
  
  // Use API title if available, otherwise use the passed title prop
  const displayTitle = apiData?.title || title;
  
  return (
    <div className="textBlock" style={{backgroundColor: `#edece9`}}>
      <h2>{displayTitle}</h2>
      {aboutContent && aboutContent.map((item, index) => (
        <p className="textBlock__para" key={index}>
          {item.children.map((child, childIndex) =>
            child.bold ? (
              <b key={childIndex}>{child.text}</b>
            ) : (
              child.text
            )
          )}
        </p>
      ))}
    </div>
  );
}
