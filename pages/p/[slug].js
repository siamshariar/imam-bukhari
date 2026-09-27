import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Slider from "react-slick";
import { filterMetaInfo, getMenu, getNewpage, getNewPages, getSubscription } from '../../lib/fetch3';
import styles from './newpage.module.css';
import RichText from '../../components/rich-text';
import Meta from '../../components/core/Meta';
// Import CSS files for Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { apiServer } from '../../lib/config';
import Banner from '../../components/ui/BannerPrimary';
import HomeSubscription from "../../components/pages/home/Subscription";

export default function NewsPage({subscriptionData, newsData, pageInfo }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className={styles.loading}>
      <div className={styles.loadingSpinner}></div>
    </div>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
	    <Meta
        title={newsData.title}
        description={pageInfo?.metaInfo?.description ?? ""}
        url={`/p/${newsData?.slug}`}
        image={newsData?.coverImage || ''}
        type="article"
      />
      <Banner
        title={newsData.title}
        subTitle=""
        bgImage="/img/banner/photo.jpg"
      />
      <article className={styles.newpageArticle}>
      <div className="container">
        <div className="page-width">
          <div className="box">
          <h1 className={styles.newpageTitle}>{newsData.title}</h1>
          {newsData.coverImage && (
            <div className={styles.coverImage}>
              <img
                src={`${apiServer}${newsData.coverImage}`}
                alt={newsData.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
          <div className={styles.content}>
            <RichText content={newsData.content} />
          </div>
          {newsData.sliderImages && newsData.sliderImages.length > 0 && (
            <div className={styles.gallery}>
              <Slider {...sliderSettings} className={styles.slickSlider}>
                {newsData.sliderImages.map((image, index) => (
                  <div key={index} className={styles.sliderImageWrapper}>
                    <img
                      src={`${apiServer}${image}`}
                      alt={`Gallery image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </div>
      </div>
      </div>
      </article>
      <HomeSubscription subscriptionData={subscriptionData} bgColor="#f8f8f8" />
    </>
  );
}

export async function getStaticProps({ params }) {
	const slug = params.slug;
	const newsData = await getNewpage(slug);
	const menuItems = await getMenu();
	const pageInfo = await filterMetaInfo(menuItems, slug);
  const subscriptionData = await getSubscription();

	return {
		props: {
			newsData,
			menuItems,
			pageInfo,
      subscriptionData,
		},
		revalidate: 60,
	};
}

export async function getStaticPaths() {
	const newPages = await getNewPages();

	const paths = newPages.map(page => ({
		params: { slug: page?.slug },
	}));

	return { paths, fallback: 'blocking' };
}