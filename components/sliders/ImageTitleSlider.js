import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { apiServer } from "../../lib/config";

export default function ImageTitleSlider({ data }) {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Helper function to get the correct image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return '/img/placeholder.jpg';
    // If it starts with http or /, it's already a complete URL or local path
    if (imagePath.startsWith('http') || imagePath.startsWith('/')) {
      return imagePath.startsWith('/uploads/') ? `${apiServer}${imagePath}` : imagePath;
    }
    // Otherwise, assume it's an API path that needs the server URL
    return `${apiServer}${imagePath}`;
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const settings = {
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    variableWidth: true,
    adaptiveHeight: true,
    // centerMode: true,
    dots: false,
    arrows: false,
    beforeChange: (index, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  // Return early if no data
  if (!data || data.length === 0) {
    return <div className="imageTitleSlider">No slider images available</div>;
  }

  return (
    <div className="imageTitleSlider">
      <div className="imageTitleSlider__wrapper">
        <Slider ref={sliderRef} {...settings}>
          {/* <div className="imageTitleSlider__content">
            <div className="imageTitleSlider__img" style={{ width: 300 }}>
              <img src="/img/slider/01.jpg" alt="images" />
            </div>
            <h3 className="imageTitleSlider__title">overlooking the hudson</h3>
          </div> */}

          {data &&
            data.map((item) => (
              <div className="imageTitleSlider__content" key={item.id}>
                <div
                  className="imageTitleSlider__img"
                  style={{ width: item.imageWidth }}
                >
                  <img src={getImageUrl(item.imagePath)} alt={item.imageAlt} />
                </div>
                <h3 className="imageTitleSlider__title">{item.title}</h3>
              </div>
            ))}

          {/* <div className="imageTitleSlider__content">
            <div className="imageTitleSlider__img" style={{ width: 400 }}>
              <img src="/img/slider/01.jpg" alt="images" />
            </div>
            <h3 className="imageTitleSlider__title">overlooking the hudson</h3>
          </div> */}
        </Slider>
        <div className="imageTextSlider__controls">
          <button
            className="imageTextSlider__arrow prev"
            onClick={handlePrevClick}
          ></button>

          <div className="imageTextSlider__dots">
            {data && [...Array(data.length)].map((_, index) => (
              <button
                key={index}
                className={`imageTextSlider__dot ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => sliderRef.current.slickGoTo(index)}
              ></button>
            ))}
          </div>

          <button
            className="imageTextSlider__arrow next"
            onClick={handleNextClick}
          ></button>
        </div>
      </div>
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
