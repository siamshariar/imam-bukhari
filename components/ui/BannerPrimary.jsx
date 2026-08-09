const Banner = ({ title, subTitle, bgImage }) => {
  const handleScroll = () => {
    window.scrollTo({
      top: 680,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="bannar"
      className="sold bannar custom_intro"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bgImage})`,
      }}
    >
      <div>
        <div className="bannar_container">
          <h1 className="bannar_title">{title}</h1>
          <p className="bannar_subtitle">{subTitle}</p>
          <a
            className="btn bannar_scrolldown btn--secondary"
            onClick={() => handleScroll()}
          >
            <i className="fas fa-chevron-down" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
