import { apiCall } from './core';

const filterAboutContent = ({ id, attributes }) => ({
  id,
  content: attributes?.content?.map(section => ({
    type: section.type,
    children: section.children?.map(child => ({
      bold: child.bold || false,
      text: child.text || '',
      type: child.type || 'text',
    })),
  })) || [],
  image: {
    url: attributes?.image?.data?.attributes?.url || '',
    alt: attributes?.image?.data?.attributes?.alternativeText || 'About Image',
  },
});
export const getAboutContent = async () => {
  try {
    const response = await apiCall("/about-content/?populate=image");
    if (!response?.data) {
      return null;
    }
    return filterAboutContent(response.data);
  } catch (error) {
    return null;
  }
};