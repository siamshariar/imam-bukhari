import RichText from "./rich-text";

const DonateRichText = ({ content }) => {
  if (!content) return null;

  return (
    <div className="donate-content">
      <RichText content={content} />
    </div>
  );
};

export default DonateRichText;
