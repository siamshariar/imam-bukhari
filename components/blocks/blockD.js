import ImageSlider from "../sliders/ImageSlider";
import ButtonPrimary from "../buttons/buttonPrimary";
import parse from "html-react-parser";

export default function BlockA({ data, imamBukhariMasjid, mosqueProjectSummaryData }) {
  const { images, btnLink, btnText, text, order, fullWidth, btn = true } = data;
  
  // Use API data if available, otherwise fall back to props or static text
  const projectData = imamBukhariMasjid || {};
  const summaryData = mosqueProjectSummaryData || {};
  
  // Priority: API title > project title > static title
  const displayTitle = summaryData.title || projectData.title || text?.title || "";
  const displaySubtitle = projectData.subtitle || text?.subTitle || "";
  
  // For message/para, use API items if available, otherwise use static para
  let displayMessage = "";
  if (summaryData.items && summaryData.items.length > 0) {
    // Convert API items to HTML list format to match existing style
    const listItems = summaryData.items.map(item => `<li>${item.title}</li>`).join('');
    displayMessage = `<ul class="home_characteristics">${listItems}</ul>`;
  } else {
    displayMessage = projectData.message || projectData.excerpt || text?.para || "";
  }
  
  const styles = {
    maxWidth: fullWidth ? "100%" : "1216px",
  };

  // Ensure we have images to display - prioritize API images over static images
  const apiImages = summaryData.sliderImages || [];
  const displayImages = apiImages.length > 0 ? apiImages : (images && images.length > 0 ? images : []);

  return (
    <div className="blockA">
      <div className={"blockA__wrapper"} style={styles}>
        <div className={`blockA__image ${order === "switch" ? "switch" : ""}`}>
          {displayImages.length > 0 && <ImageSlider images={displayImages} />}
        </div>
        <div className={`blockA-text ${order === "switch" ? "switch" : ""}`}>
          {displaySubtitle && <h3 className="blockA-text__subTitle">{displaySubtitle}</h3>}
          {displayTitle && <h2 className="blockA-text__title">{displayTitle}</h2>}
          {displayMessage && <div className="blockA-text__para">{parse(displayMessage)}</div>}
          {btn && btnLink && btnText && <ButtonPrimary link={btnLink} text={btnText} />}
        </div>
      </div>
    </div>
  );
}
