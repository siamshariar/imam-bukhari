import React from "react";
import { getGalleryData, getMenu, filterMetaInfo, getSubscription } from "../../lib/fetch3";
import Banner from "../../components/ui/BannerPrimary";
import HomeSubscription from "../../components/pages/home/Subscription";
import { apiServer } from "../../lib/config";
import Meta from "../../components/core/Meta";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = ({ galleryData, subscriptionData, pageInfo }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <>
      <Meta
        title={pageInfo?.metaInfo?.title ?? "Gallery"}
        description={pageInfo?.metaInfo?.description ?? ""}
        url={`${apiServer}/gallery`}
        image={`${apiServer}/img/logo/logo.png`}
        type="website"
      />
      <Banner
        title={pageInfo?.pageInfo?.title ?? "Gallery"}
        subTitle=""
        bgImage="/img/banner/photo.jpg"
      />
      <section className="gallery basic_paddings">
        <div className="container ">
          {galleryData.length === 0 ? (
            <p className="noData">No gallery items available.</p>
          ) : (
            <div className="galleryGrid">
              {galleryData.map((item) => (
                <div key={item.id} className="galleryItem">
                  <h1 className="itemTitle">{item.title}</h1>
                  <Slider {...sliderSettings}>
                    {item.images.map((image, index) => (
                      <div key={index} className="imageWrapper">
                        <img
                          src={`${apiServer}${image.thumbnail}`}
                          alt={image.name}
                          className="image"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <HomeSubscription subscriptionData={subscriptionData} />
    </>
  );
};

export const getStaticProps = async () => {
  const galleryData = await getGalleryData();
  const menuItems = await getMenu();
  const pageInfo = await filterMetaInfo(menuItems, "gallery");
  const subscriptionData = await getSubscription();

  return {
    props: {
      galleryData,
      subscriptionData,
      menuItems,
      pageInfo,
    },
    revalidate: 60,
  };
};

export default Gallery;