import parse from "html-react-parser";

export default function TextBlock({ aboutContent, title, pera, btn, btnText, btnLink }) {
  const ButtonComponent = btn;
  
  // Handle cases where aboutContent might be null or empty
  if (!aboutContent || !Array.isArray(aboutContent) || aboutContent.length === 0) {
    return (
      <div className="textBlock" style={{backgroundColor: `#edece9`}}>
        <h2>{title}</h2>
        <p className="textBlock__para">
          {pera || "Content is being loaded..."}
        </p>
        <div className="textBlock__btn">
          {ButtonComponent && <ButtonComponent text={btnText} link={btnLink} />}
        </div>
      </div>
    );
  }

  return (
    <div className="textBlock" style={{backgroundColor: `#edece9`}}>
      <h2>{title}</h2>
      {aboutContent.map((item, index) => (
        <p className="textBlock__para" key={index}>
          {item.children && item.children.map((child, childIndex) =>
            child.bold ? (
              <b key={childIndex}>{child.text}</b>
            ) : (
              child.text
            )
          )}
        </p>
      ))}
      <div className="textBlock__btn">
        {ButtonComponent && <ButtonComponent text={btnText} link={btnLink} />}
      </div>
    </div>
  );
}
