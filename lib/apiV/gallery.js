import { apiCall, resolveMediaUrl } from './core';

export const getGalleryData = async () => {
  try {
    const response = await apiCall("/galleries?populate=images");
    if (!response?.data) {
      return [];
    }
    return response.data.map(({ id, attributes }) => ({
      id,
      title: attributes.title,
      images: attributes.images.data.map(image => ({
        url: resolveMediaUrl(image.attributes.url),
        thumbnail: resolveMediaUrl(image.attributes.formats?.thumbnail?.url ?? image.attributes.url),
        name: image.attributes.name,
      })),
    })).sort((a, b) => a.id - b.id);
  } catch (error) {
    return [];
  }
};