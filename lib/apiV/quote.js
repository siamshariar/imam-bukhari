import { apiCall } from './core';
import { apiServer } from '../config';

const filterQuote = ({ id, attributes }) => {
  // Handle image URL properly
  let imageUrl = '';
  if (attributes?.image?.data?.attributes?.url) {
    const rawUrl = attributes.image.data.attributes.url;
    // Don't add apiServer if URL already starts with http
    if (rawUrl.startsWith('http')) {
      imageUrl = rawUrl;
    } else {
      imageUrl = `${apiServer}${rawUrl}`;
    }
    
    // Filter out localhost URLs
    if (imageUrl.includes('localhost')) {
      imageUrl = '';
    }
  }

  console.log('filterQuote - raw image data:', attributes?.image?.data?.attributes);
  console.log('filterQuote - final imageUrl:', imageUrl);

  return {
    id,
    title: attributes?.title ?? '',
    excerpt: attributes?.excerpt ?? '',
    description: attributes?.description ?? [],
    imageUrl,
    createdAt: attributes?.createdAt ?? '',
    updatedAt: attributes?.updatedAt ?? '',
    publishedAt: attributes?.publishedAt ?? '',
  };
};

export const getChairmanMessage = async () => {
  try {
    const response = await apiCall('/founder-message?populate=image');
  
    if (!response?.data) {
      return null;
    }
  
    const result = filterQuote(response.data);
  
    return result;
  } catch (error) {
    return null;
  }
};

export const getAcademicHeadMessage = async () => {
  try {
    const response = await apiCall('/academic-head-message?populate=image'); 
  
    if (!response?.data) {
      return null;
    }
  
    const result = filterQuote(response.data);
  
    return result;
  } catch (error) {
    return null;
  }
};