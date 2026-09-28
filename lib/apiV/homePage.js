import { apiCall, resolveMediaUrl } from './core';
import { apiServer } from '../config';

const toBanner = (banner) =>
  banner
    ? {
        title: banner.title || '',
        subtitle: banner.subtitle || '',
        message: banner.message || '',
        image: banner.image?.data?.attributes?.url
          ? resolveMediaUrl(banner.image.data.attributes.url)
          : '',
      }
    : null;

const toProjectCard = (card) => {
  if (!card) return null;
  const images =
    card.images?.data?.map((img) => ({
      id: img.id,
      url: resolveMediaUrl(img.attributes.url),
      name: img.attributes.name,
      alt: img.attributes.alternativeText || img.attributes.name,
      formats: img.attributes.formats,
    })) || [];

  return {
    title: card.title || '',
    subtitle: card.subtitle || '',
    message: card.message || '',
    images,
  };
};

const toFounderMessage = (founderMessage) => {
  const attrs = founderMessage?.data?.attributes;
  if (!attrs) return null;

  let imageUrl = '';
  if (attrs.image?.data?.attributes?.url) {
    imageUrl = resolveMediaUrl(attrs.image.data.attributes.url);
    if (imageUrl.includes('localhost')) imageUrl = '';
  }

  return {
    id: founderMessage.data.id,
    title: attrs.title ?? '',
    excerpt: attrs.excerpt ?? '',
    description: attrs.description ?? [],
    imageUrl,
    createdAt: attrs.createdAt ?? '',
    updatedAt: attrs.updatedAt ?? '',
    publishedAt: attrs.publishedAt ?? '',
  };
};

const toRecentActivities = (activities) => {
  if (!Array.isArray(activities) || activities.length === 0) return null;
  return activities.map((activity, index) => ({
    id: index,
    title: activity.title || '',
    subtitle: activity.subtitle || '',
    para: activity.para || '',
    image: activity.sliderImage?.data
      ? {
          url: resolveMediaUrl(activity.sliderImage.data.attributes.url),
          alt:
            activity.sliderImage.data.attributes.alternativeText ||
            activity.sliderImage.data.attributes.name,
        }
      : null,
  }));
};

const toSlider = (slider) => {
  const images = slider?.data;
  if (!Array.isArray(images) || images.length === 0) return null;
  return images.map((img, index) => ({
    id: img.id,
    imagePath: resolveMediaUrl(img.attributes.url),
    imageAlt: img.attributes.alternativeText || img.attributes.name || `Slider Image ${index + 1}`,
    imageWidth: 400,
    title: (img.attributes.name || '').replace(/\.(jpg|jpeg|png|gif)$/i, ''),
  }));
};

/**
 * Home page-এর সব section এক API কলে — নতুন `home-page` singleType থেকে।
 * পুরনো getHomeBannerData/getOurProjectsData/getChairmanMessage/getRecentActivitiesData/
 * getHomeSliderData এই একটা ফাংশনেই প্রতিস্থাপিত হয়। SEO/menu meta page-information
 * থেকেই আসে (getMenu/filterMetaInfo), তাই এখানে আলাদা seo field নেই।
 */
export const getHomePageData = async () => {
  try {
    const response = await apiCall(
      '/home-page?populate[banner][populate]=image' +
        '&populate[mosqueComplexCard][populate]=images' +
        '&populate[kulliyaCard][populate]=images' +
        '&populate[darulHadithCard][populate]=images' +
        '&populate[founderMessage][populate]=image' +
        '&populate[introVideo]=*' +
        '&populate[recentActivities][populate]=sliderImage' +
        '&populate[slider]=*'
    );

    const attrs = response?.data?.attributes;
    if (!attrs) return null;

    return {
      banner: toBanner(attrs.banner),
      aboutShortText: attrs.aboutShortText || '',
      projectsSectionTitle: attrs.projectsSectionTitle || 'আমাদের প্রকল্পসমূহ',
      mosqueComplexCard: toProjectCard(attrs.mosqueComplexCard),
      kulliyaCard: toProjectCard(attrs.kulliyaCard),
      darulHadithCard: toProjectCard(attrs.darulHadithCard),
      founderMessage: toFounderMessage(attrs.founderMessage),
      introVideo: attrs.introVideo
        ? {
            title: attrs.introVideo.title || 'এক নজরে ইমাম বুখারী ট্রাস্ট',
            videoId: attrs.introVideo.videoId || '',
          }
        : null,
      recentActivities: toRecentActivities(attrs.recentActivities),
      slider: toSlider(attrs.slider),
    };
  } catch (error) {
    console.error('Error fetching home page data:', error);
    return null;
  }
};
