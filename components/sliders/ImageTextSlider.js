import ButtonPrimary from "../buttons/buttonPrimary";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { apiServer } from "../../lib/config";

const ImageTextSlider = ({ data }) => {
  // Check if data is API format (array of activities) or static format (object with images/contents)
  const isApiData = Array.isArray(data);
  
  // Transform API data to match expected format
  const transformedData = isApiData 
    ? {
        images: data.map(activity => ({
          id: activity.id,
          imagePath: activity.image ? `${activity.image.url}` : '/img/placeholder.jpg',
          imageAlt: activity.image?.alt || activity.title || 'Recent Activity'
        })),
        contents: data.map(activity => ({
          id: activity.id,
          subTitle: activity.subtitle || 'সাম্প্রতিক কার্যক্রম',
          title: activity.title || 'No Title',
          para: activity.para || 'No Description',
          buttonText: "বিস্তারিত দেখুন",
          buttonLink: "/"
        }))
      }
    : data;

  const { images, contents } = transformedData || { images: [], contents: [] };

  const [currentSlide, setCurrentSlide] = useState(0);
  const firstSlider = useRef(null);
  const secondSlider = useRef(null);

  const handleBeforeChange = (index) => {
    setCurrentSlide(index);
  };

  const handleFirstSliderBeforeChange = (oldIndex, newIndex) => {
    secondSlider.current.slickGoTo(newIndex);
  };

  const handleSecondSliderBeforeChange = (oldIndex, newIndex) => {
    firstSlider.current.slickGoTo(newIndex);
    handleBeforeChange(newIndex);
  };

  const handlePrevClick = () => {
    if (secondSlider.current) {
      secondSlider.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (secondSlider.current) {
      secondSlider.current.slickNext();
    }
  };

  const firstSliderConfig = {
    beforeChange: handleFirstSliderBeforeChange,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
  };

  const secondSliderConfig = {
    beforeChange: handleSecondSliderBeforeChange,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
  };

  // Don't render if no data is available
  if (!images || !contents || images.length === 0 || contents.length === 0) {
    return null;
  }

  return (
    <div className="imageTextSlider">
      <div className="imageTextSlider__container">
        <div className="imageTextSlider__column">
          <Slider ref={firstSlider} {...firstSliderConfig}>
            {images && images.length > 0 &&
              images.map((image) => (
                <div className="imageTextSlider__img" key={image.id}>
                  <img src={image.imagePath} alt={image.imageAlt || image.imagePath} />
                </div>
              ))}
          </Slider>
        </div>
        <div className="imageTextSlider__column">
          <Slider ref={secondSlider} {...secondSliderConfig}>
            {contents && contents.length > 0 &&
              contents.map((content) => (
                <div className="imageTextSlider__text" key={content.id}>
                  <div className="imageTextSlider__text-container">
                    <p className="imageTextSlider__subTitle">
                      {content.subTitle}
                    </p>
                    <h3 className="imageTextSlider__title">{content.title}</h3>
                    <p className="imageTextSlider__para">{content.para}</p>
                    {/*<ButtonPrimary*/}
                    {/*  text={content.buttonText}*/}
                    {/*  link={content.buttonLink}*/}
                    {/*/>*/}
                  </div>
                </div>
              ))}
          </Slider>
          <div className="imageTextSlider__controls">
            <button
              className="imageTextSlider__arrow prev"
              onClick={handlePrevClick}
            ></button>

            <div className="imageTextSlider__dots">
              {[...Array(images?.length || 0)].map((_, index) => (
                <button
                  key={index}
                  className={`imageTextSlider__dot ${
                    index === currentSlide ? "active" : ""
                  }`}
                  onClick={() => secondSlider.current.slickGoTo(index)}
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
    </div>
  );
};

export default ImageTextSlider;
