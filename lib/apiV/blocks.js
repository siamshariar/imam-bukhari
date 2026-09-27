import { apiCall } from './core';
import { apiServer } from '../config';

const filterQuote = ({ id, attributes }) => ({
  id,
  title: attributes?.title ?? '',
  excerpt: attributes?.excerpt ?? '',
  description: attributes?.description ?? [],
  imageUrl: attributes?.image?.data?.attributes?.url
    ? `${apiServer}${attributes.image.data.attributes.url}`
    : '',
  createdAt: attributes?.createdAt ?? '',
  updatedAt: attributes?.updatedAt ?? '',
  publishedAt: attributes?.publishedAt ?? '',
});

export const getImamBukhariMasjid = async () => {
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

export const getKulliyatulIslamia = async () => {
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

export const getDarulHadis = async () => {
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