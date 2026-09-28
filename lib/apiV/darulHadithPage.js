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
 * Darul Hadith page-এর সব section এক API কলে — নতুন `darul-hadith-page` singleType থেকে।
 * পুরনো getDarulHadithMadrasaData/getDarulHadithSummaryData/getDarulHadithCurriculumData/
 * getDarulHadithCharacteristicsData এই একটা ফাংশনেই প্রতিস্থাপিত হয়। রিটার্ন shape
 * পুরনো fetcher-গুলোর shape-এর সাথে হুবহু মিলিয়ে রাখা হয়েছে, যাতে UI না বদলাতে হয়।
 */
export const getDarulHadithPageData = async () => {
  try {
    const response = await apiCall(
      '/darul-hadith-page' +
        '?populate[homeCard][populate]=images' +
        '&populate[detail]=*' +
        '&populate[summary][populate][items][populate]=items' +
        '&populate[summary][populate]=sliderImages' +
        '&populate[curriculum][populate][darulHadithCurriculum][populate]=items' +
        '&populate[characteristics][populate]=items'
    );

    const attrs = response?.data?.attributes;
    if (!attrs) return null;

    const darulHadithData = attrs.detail
      ? { title: attrs.detail.title || '', description: attrs.detail.description || '' }
      : null;

    const darulHadithSummaryData = attrs.summary
      ? {
          title: attrs.summary.title || '',
          items: attrs.summary.items?.items || [],
          sliderImages: toImages(attrs.summary.sliderImages),
        }
      : null;

    const darulHadithCurriculumData = attrs.curriculum?.darulHadithCurriculum
      ? {
          curriculum: {
            title: attrs.curriculum.darulHadithCurriculum.title || '',
            items: attrs.curriculum.darulHadithCurriculum.items || [],
          },
        }
      : null;

    const darulHadithCharacteristicsData = attrs.characteristics
      ? {
          characteristics: {
            title: '',
            items:
              attrs.characteristics.map((item) => ({
                id: item.id,
                title: item.title,
              })) || [],
          },
        }
      : null;

    return {
      homeCard: toProjectCard(attrs.homeCard),
      darulHadithData,
      darulHadithSummaryData,
      darulHadithCurriculumData,
      darulHadithCharacteristicsData,
    };
  } catch (error) {
    console.error('Error fetching darul hadith page data:', error);
    return null;
  }
};
