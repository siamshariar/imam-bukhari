import parse from "html-react-parser";

export default function TextBlockB({
  title,
  pera,
  subTitle,
  btn,
  btnLink,
  btnText,
}) {
  const ButtonComponent = btn;
  return (
    <div className="textBlockB">
      <div className="textBlockB__wrapper container">
        <h4 className="textBlockB__subTitle">{subTitle}</h4>
        <h3 className="textBlockB__title">{title}</h3>
        <p className="textBlockB__para">{parse(pera)}</p>
        {/*<div className="textBlockB__btn">*/}
        {/*  {ButtonComponent && <ButtonComponent text={btnText} link={btnLink} />}*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
