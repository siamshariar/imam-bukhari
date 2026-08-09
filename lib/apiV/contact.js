import { apiCall } from './core';

const filterContactInfo = ({ attributes }) => ({
  house: attributes?.house ?? '',
  road: attributes?.road ?? '',
  district: attributes?.district ?? '',
  googleMapUrl: attributes?.googleMapUrl ?? '',
  createdAt: attributes?.createdAt ?? '',
  updatedAt: attributes?.updatedAt ?? '',
  publishedAt: attributes?.publishedAt ?? '',
});

export const getContactInfo = async () => {
  try {
    const response = await apiCall('/contact-info');

    if (!response?.data) {
      return null;
    }

    const contactInfo = filterContactInfo(response.data);
    return contactInfo;
  } catch (error) {
    return null;
  }
};