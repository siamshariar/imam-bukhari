import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider({ images }) {
  const settings = {
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  // Handle different image data formats
  const processedImages = images?.map((img) => {
    // If it's from API (has url property)
    if (img.url) {
      // Don't add localhost base URL - use the URL as is
      return {
        id: img.id,
        src: img.url,
        alt: img.alt || img.name
      };
    }
    // If it's from static data (has src property)
    return img;
  }) || [];

  if (processedImages.length === 0) {
    return <div className="image-slider">No images available</div>;
  }

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {processedImages.map((img) => (
          <div className="slider-image-wrapper" key={img.id}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

const CustomNextArrow = (props) => {
  return (
    <div className="slider-arrow-1 next-arrow-1" onClick={props.onClick}></div>
  );
};

const CustomPrevArrow = (props) => {
  return (
    <div className="slider-arrow-1 prev-arrow-1" onClick={props.onClick}></div>
  );
};
