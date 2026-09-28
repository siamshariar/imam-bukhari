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
 * Kulliya page-এর সব section এক API কলে — নতুন `kulliya-page` singleType থেকে।
 * পুরনো getKulliyatulQuranilKareemDetailData/getKulliaProjectSummaryData/
 * getKulliaMainActivitiesData/getMembers/getKulliaRecommendedDepartmentData/
 * getCharacteristicsKulliaData এই একটা ফাংশনেই প্রতিস্থাপিত হয়। রিটার্ন shape
 * পুরনো fetcher-গুলোর shape-এর সাথে হুবহু মিলিয়ে রাখা হয়েছে, যাতে UI না বদলাতে হয়।
 */
export const getKulliyaPageData = async () => {
  try {
    const response = await apiCall(
      '/kulliya-page' +
        '?populate[homeCard][populate]=images' +
        '&populate[detail]=*' +
        '&populate[projectSummary][populate][content][populate]=items' +
        '&populate[projectSummary][populate]=sliderImages' +
        '&populate[academicCommitteeMembers][populate]=image' +
        '&populate[mainActivities][populate][Features][populate]=image' +
        '&populate[recommendedDepartment][populate][kulliaDepartment][populate]=items' +
        '&populate[recommendedDepartment][populate][progressUniversity][populate]=items' +
        '&populate[characteristics][populate][listItem]=*'
    );

    const attrs = response?.data?.attributes;
    if (!attrs) return null;

    const kulliyatulQuranilKareemDetailData = attrs.detail
      ? { title: attrs.detail.title || '', description: attrs.detail.description || '' }
      : null;

    const kulliaProjectSummaryData = attrs.projectSummary
      ? {
          title: attrs.projectSummary.title || '',
          items: attrs.projectSummary.content?.items || [],
          sliderImages: toImages(attrs.projectSummary.sliderImages),
        }
      : null;

    const members =
      attrs.academicCommitteeMembers?.data?.map((member) => ({
        id: member.id,
        name: member.attributes.name,
        designation: member.attributes.designation,
        kulliyaDesignation: member.attributes.kulliyaDesignation,
        slug: member.attributes.slug,
        imagePath: member.attributes.image?.data?.attributes?.url
          ? resolveMediaUrl(member.attributes.image.data.attributes.url)
          : '',
        imageAlt:
          member.attributes.image?.data?.attributes?.alternativeText ||
          member.attributes.name,
      })) || [];

    const kulliaMainActivitiesData = attrs.mainActivities
      ? {
          title: attrs.mainActivities.title || '',
          arabicTitle: attrs.mainActivities.arbTitle || '',
          bnText: attrs.mainActivities.bnText || '',
          ref: attrs.mainActivities.ref || '',
          features:
            attrs.mainActivities.Features?.map((feature) => ({
              id: feature.id,
              title: feature.title,
              image: feature.image?.data
                ? {
                    id: feature.image.data.id,
                    url: resolveMediaUrl(feature.image.data.attributes.url),
                    name: feature.image.data.attributes.name,
                    alt: feature.image.data.attributes.alternativeText || feature.title,
                    formats: feature.image.data.attributes.formats,
                  }
                : null,
            })) || [],
        }
      : null;

    const kulliaRecommendedDepartmentData = attrs.recommendedDepartment
      ? {
          kulliaDepartment: attrs.recommendedDepartment.kulliaDepartment
            ? {
                title: attrs.recommendedDepartment.kulliaDepartment.title || '',
                items: attrs.recommendedDepartment.kulliaDepartment.items || [],
              }
            : null,
          progressUniversity: attrs.recommendedDepartment.progressUniversity
            ? {
                title: attrs.recommendedDepartment.progressUniversity.title || '',
                items: attrs.recommendedDepartment.progressUniversity.items || [],
              }
            : null,
        }
      : null;

    const characteristicsKulliaData = attrs.characteristics
      ? {
          items:
            attrs.characteristics.map((item) => ({
              id: item.id,
              title: item.title,
              listItems:
                item.listItem?.map((listItem) => ({
                  id: listItem.id,
                  text: listItem.listItem,
                })) || [],
            })) || [],
        }
      : null;

    return {
      homeCard: toProjectCard(attrs.homeCard),
      kulliyatulQuranilKareemDetailData,
      kulliaProjectSummaryData,
      members,
      kulliaMainActivitiesData,
      kulliaRecommendedDepartmentData,
      characteristicsKulliaData,
    };
  } catch (error) {
    console.error('Error fetching kulliya page data:', error);
    return null;
  }
};
