import ImageSlider from "./ImageSlider";
import { apiServer } from "../../lib/config";

export default function ImageTitleTopSlider({ images, title, para, data }) {
  // Check if we have API data or static data
  const isApiData = data && data.images;
  
  // Use API data if available, otherwise use static props
  const finalImages = isApiData 
    ? data.images.map(img => ({
        id: img.id,
        src: `${img.url}`,
        alt: img.alt || img.name || title || 'Infrastructure Model'
      }))
    : images;
  
  const finalTitle = isApiData ? data.title : title;
  const finalPara = isApiData ? data.para : para;

  return (
    <div className="imageTitleTopSlider">
      {finalTitle && <h2 className="imageTitleTopSlider__title">{finalTitle}</h2>}
      {finalPara && <p className="ImageTitleTopSlider__para">{finalPara}</p>}

      <div className="imageTitleTopSlider__slider container">
        <ImageSlider images={finalImages} />
      </div>
    </div>
  );
}
