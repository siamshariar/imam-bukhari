import RichText from "./rich-text";

const DonateRichText = ({ content }) => {
  if (!content) return null;

  return (
    <div className="donate-content">
      <style jsx>{`
        .donate-content p {
          font-size: 18px;
          margin: 0 0 0.75rem;
          line-height: 1.6;
        }
        .donate-content p:empty {
          display: none;
        }
        .donate-content h1,
        .donate-content h2,
        .donate-content h3 {
          margin: 1rem 0 0.5rem;
          font-weight: bold;
          color: #2c5530;
        }
        .donate-content h2 {
          font-size: 24px;
          border-bottom: 2px solid #e0e0e0;
          padding-bottom: 0.5rem;
        }
        .donate-content h3 {
          font-size: 20px;
        }
        .donate-content strong,
        .donate-content b {
          color: #1a472a;
          font-weight: bold;
        }
      `}</style>
      <RichText content={content} />
    </div>
  );
};

export default DonateRichText;
