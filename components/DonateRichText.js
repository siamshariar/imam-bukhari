import RichText from "./rich-text";

const DonateRichText = ({ content }) => {
  if (!content) return null;

  // Process content to identify headers and structure
  const processedContent = content.map((block, index) => {
    if (block.type === "paragraph" && block.children) {
      const text = block.children
        .map(child => child.text || '')
        .join('')
        .trim();

      // Identify headers by content patterns
      const isMainHeader = text.includes('প্রকল্পের জন্য') || 
                          text.includes('পাঠানোর নিয়ম') ||
                          text.includes('প্রকল্পসমূহের জন্য');
      
      const isSubHeader = text.includes('একাউন্ট') && !text.includes('।');
      
      if (isMainHeader) {
        return {
          ...block,
          type: "heading",
          level: 2
        };
      } else if (isSubHeader) {
        return {
          ...block,
          type: "heading", 
          level: 3
        };
      }
    }
    return block;
  });

  return (
    <div className="donate-content">
      <style jsx>{`
        .donate-content p {
          font-size: 18px;
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        .donate-content p:empty {
          display: none;
        }
        .donate-content h1,
        .donate-content h2,
        .donate-content h3 {
          margin-top: 2rem;
          margin-bottom: 1rem;
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
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .donate-content strong,
        .donate-content b {
          color: #1a472a;
          font-weight: bold;
        }
      `}</style>
      <RichText content={processedContent} />
    </div>
  );
};

export default DonateRichText;
