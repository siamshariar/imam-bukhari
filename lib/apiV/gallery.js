import { apiCall } from './core';

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
        url: image.attributes.url,
        thumbnail: image.attributes.formats?.thumbnail?.url ?? image.attributes.url,
        name: image.attributes.name,
      })),
    }));
  } catch (error) {
    return [];
  }
};