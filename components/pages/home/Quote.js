import Link from "next/link";
import ButtonPrimary from "../../buttons/buttonPrimary";

export default function HomeQuote({ chairmanMessage }) {
  // Debug: Log the chairmanMessage data
  console.log('Quote component chairmanMessage:', chairmanMessage);
  console.log('Quote component imageUrl:', chairmanMessage?.imageUrl);

  // Handle image URL - ensure it's not localhost and is properly formatted
  const getImageUrl = (imageUrl) => {
    if (!imageUrl) {
      console.log('No image URL provided');
      return '';
    }
    
    console.log('Processing image URL:', imageUrl);
    
    // If URL contains localhost, don't use it
    if (imageUrl.includes('localhost')) {
      console.log('Localhost URL detected, skipping:', imageUrl);
      return '';
    }
    
    // If it's already a full URL, use it as is
    if (imageUrl.startsWith('http')) {
      console.log('Full URL detected:', imageUrl);
      return imageUrl;
    }
    
    // If it's a relative path, ensure it's properly formatted
    console.log('Relative path detected:', imageUrl);
    return imageUrl;
  };

  const displayImageUrl = getImageUrl(chairmanMessage?.imageUrl);
  console.log('Final display image URL:', displayImageUrl);

  return (
    <section className="quote_section" style={{backgroundColor: `#edece9`}}>
      <div className="basic_paddings">
        <div className="container">
          <div className="section_content__row reverse">
            <div className="section_content__col">
              <div className="section_content__col__img">
                {displayImageUrl ? (
                  <img
                    className="main_image"
                    src={displayImageUrl}
                    alt="Chairman message"
                    onError={(e) => {
                      console.log('Image failed to load:', displayImageUrl);
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="main_image placeholder" style={{
                    width: '100%',
                    height: '200px',
                    backgroundColor: '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#666'
                  }}>
                    No image available
                  </div>
                )}
              </div>
            </div>
            <div className="section_content__col text">
              <div className="section_content__text_wrap">
                <h2 style={{paddingTop: `25px`}}>{chairmanMessage?.title}</h2>
                <p className="section_content__text2">
                  {chairmanMessage?.excerpt || ""}
                </p>
                <ButtonPrimary
                  link={"/chairman-message"}
                  text={"বিস্তারিত দেখুন"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
