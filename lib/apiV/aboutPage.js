import { apiCall, resolveMediaUrl } from './core';

const toImages = (media) =>
  media?.data?.map((img) => ({
    id: img.id,
    url: resolveMediaUrl(img.attributes.url),
    name: img.attributes.name,
    alt: img.attributes.alternativeText || img.attributes.name,
    formats: img.attributes.formats,
    width: img.attributes.width,
    height: img.attributes.height,
  })) || [];

const toProjectCard = (relationData) => {
  const attrs = relationData?.data?.attributes;
  const card = attrs?.homeCard;
  if (!card) return null;
  return {
    title: card.title || '',
    subtitle: card.subtitle || '',
    message: card.message || '',
    images: toImages(card.images),
  };
};

const filterCharacteristicDetail = (detail) => ({
  id: detail.id,
  title: detail.title,
  listItem: detail.listItem ?? [],
});

/**
 * About page-এর সব section এক API কলে — নতুন `about-page` singleType থেকে।
 * পুরনো getAboutContent/getImamBukhariMasjid/getKulliyatulIslamia/getDarulHadis/
 * getAllCharacteristics/getOurProjectsData/getInfrastructureModelData এই একটা
 * ফাংশনেই প্রতিস্থাপিত হয়। প্রজেক্ট কার্ড এখন mosque-complex-page/kulliya-page/
 * darul-hadith-page-এর homeCard relation থেকে টানা হয় (duplicate না)।
 */
export const getAboutPageData = async () => {
  try {
    const response = await apiCall(
      '/about-page' +
        '?populate[aboutImage]=*' +
        '&populate[mosqueComplexPage][populate][homeCard][populate]=images' +
        '&populate[kulliyaPage][populate][homeCard][populate]=images' +
        '&populate[darulHadithPage][populate][homeCard][populate]=images' +
        '&populate[characteristics][populate][listItem]=*' +
        '&populate[infrastructureModel][populate]=sliderImages'
    );

    const attrs = response?.data?.attributes;
    if (!attrs) return null;

    const aboutData = {
      content: attrs.aboutContentBlocks || [],
      image: {
        url: attrs.aboutImage?.data?.attributes?.url
          ? resolveMediaUrl(attrs.aboutImage.data.attributes.url)
          : '',
        alt: attrs.aboutImage?.data?.attributes?.alternativeText || 'About Image',
      },
    };

    const imamBukhariMasjid = toProjectCard(attrs.mosqueComplexPage);
    const kulliyatulIslamia = toProjectCard(attrs.kulliyaPage);
    const darulHadis = toProjectCard(attrs.darulHadithPage);

    const characteristics = {
      items: attrs.characteristics?.map(filterCharacteristicDetail) || [],
    };

    const infrastructureModelData = attrs.infrastructureModel
      ? {
          title: attrs.infrastructureModel.title || '',
          images: toImages(attrs.infrastructureModel.sliderImages),
        }
      : null;

    return {
      aboutData,
      imamBukhariMasjid,
      kulliyatulIslamia,
      darulHadis,
      characteristics,
      infrastructureModelData,
    };
  } catch (error) {
    console.error('Error fetching about page data:', error);
    return null;
  }
};
