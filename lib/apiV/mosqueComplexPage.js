import { apiCall, resolveMediaUrl } from './core';

const toImages = (media) =>
  media?.data?.map((img) => ({
    id: img.id,
    url: resolveMediaUrl(img.attributes.url),
    name: img.attributes.name,
    alt: img.attributes.alternativeText || img.attributes.name,
    width: img.attributes.width,
    height: img.attributes.height,
    formats: img.attributes.formats,
  })) || [];

const toProjectCard = (card) => {
  if (!card) return null;
  return {
    title: card.title || '',
    subtitle: card.subtitle || '',
    message: card.message || '',
    images: toImages(card.images),
  };
};

/**
 * Mosque Complex page-এর সব section এক API কলে — নতুন `mosque-complex-page` singleType থেকে।
 * পুরনো getImamBukhariDetailData/getMosqueProjectSummaryData/getMosqueMainActivitiesData/
 * getMosqueComplexData এই একটা ফাংশনেই প্রতিস্থাপিত হয়। রিটার্ন shape ইচ্ছাকৃতভাবে পুরনো
 * fetcher-গুলোর shape-এর সাথে হুবহু মিলিয়ে রাখা হয়েছে, যাতে UI কম্পোনেন্ট না বদলাতে হয়।
 */
export const getMosqueComplexPageData = async () => {
  try {
    const response = await apiCall(
      '/mosque-complex-page' +
        '?populate[homeCard][populate]=images' +
        '&populate[detail]=*' +
        '&populate[projectSummary][populate][content][populate]=items' +
        '&populate[projectSummary][populate]=sliderImages' +
        '&populate[mainActivities][populate][activities][populate]=image' +
        '&populate[complexInfo][populate]=items' +
        '&populate[seo]=*'
    );

    const attrs = response?.data?.attributes;
    if (!attrs) return null;

    const imamBukhariDetailData = attrs.detail
      ? { title: attrs.detail.title || '', subtitle: attrs.detail.subtitle || '' }
      : null;

    const mosqueProjectSummaryData = attrs.projectSummary
      ? {
          title: attrs.projectSummary.title || '',
          items: attrs.projectSummary.content?.items || [],
          sliderImages: toImages(attrs.projectSummary.sliderImages),
        }
      : null;

    const mosqueMainActivitiesData = attrs.mainActivities
      ? {
          title: attrs.mainActivities.title || '',
          arabicTitle: attrs.mainActivities.arbTitle || '',
          bnText: attrs.mainActivities.bnText || '',
          ref: attrs.mainActivities.ref || '',
          activities:
            attrs.mainActivities.activities?.map((activity) => ({
              id: activity.id,
              title: activity.title,
              image: activity.image?.data
                ? {
                    id: activity.image.data.id,
                    url: resolveMediaUrl(activity.image.data.attributes.url),
                    name: activity.image.data.attributes.name,
                    alt:
                      activity.image.data.attributes.alternativeText || activity.title,
                    formats: activity.image.data.attributes.formats,
                  }
                : null,
            })) || [],
        }
      : null;

    const mosqueComplexData = attrs.complexInfo
      ? {
          title: attrs.complexInfo.title || '',
          details: attrs.complexInfo.details || '',
          items: attrs.complexInfo.items?.map((item) => ({ title: item.title })) || [],
        }
      : null;

    return {
      homeCard: toProjectCard(attrs.homeCard),
      imamBukhariDetailData,
      mosqueProjectSummaryData,
      mosqueMainActivitiesData,
      mosqueComplexData,
      seo: attrs.seo
        ? { title: attrs.seo.title || '', description: attrs.seo.description || '' }
        : null,
    };
  } catch (error) {
    console.error('Error fetching mosque complex page data:', error);
    return null;
  }
};
