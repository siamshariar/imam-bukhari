import ImageSlider from "../sliders/ImageSlider";
import ButtonPrimary from "../buttons/buttonPrimary";
import parse from "html-react-parser";

export default function BlockC({ data, darulHadis }) {
  const { images, btnLink, btnText, text, order, fullWidth, btn = true } = data;
  
  // Use API data if available, otherwise fallback to static data
  const title = darulHadis?.title || text?.title;
  const subtitle = darulHadis?.subtitle || text?.subTitle;
  const message = darulHadis?.message || darulHadis?.excerpt || "";
  
  // Prioritize API images over static fallback images
  const apiImages = darulHadis?.sliderImages || [];
  const staticImages = images || [];

  // Filter out localhost URLs from all images
  const filterLocalhost = (imageArray) => {
    return imageArray.filter(img => {
      const imageUrl = img.src || img.url || '';
      return !imageUrl.includes('localhost');
    });
  };

  const filteredStaticImages = filterLocalhost(staticImages);
  const filteredApiImages = filterLocalhost(apiImages);

  const blockImages = filteredApiImages.length > 0 ? filteredApiImages : filteredStaticImages;
  
  const styles = {
    maxWidth: fullWidth ? "100%" : "1216px",
  };
  return (
    <div className="blockA">
      <div className={"blockA__wrapper"} style={styles}>
        <div className={`blockA__image ${order === "switch" ? "switch" : ""}`}>
          <ImageSlider images={blockImages} />
        </div>
        <div className={`blockA-text ${order === "switch" ? "switch" : ""}`}>
          <h3 className="blockA-text__subTitle">{subtitle}</h3>
          <h2 className="blockA-text__title">{title}</h2>
          <p className="blockA-text__para">{message}</p>
          {btn && <ButtonPrimary link={btnLink} text={btnText} />}
        </div>
      </div>
    </div>
  );
}
