import { apiCall } from './core';

const filterSettingInfo = ({ attributes }) => ({
  email: attributes?.email ?? '',
  phone: attributes?.phone ?? '',
  facebookUrl: attributes?.facebookUrl ?? '',
  youtubeUrl: attributes?.youtubeUrl ?? '',
  xUrl: attributes?.xUrl ?? '',
  linkedinUrl: attributes?.linkedinUrl ?? '',
  createdAt: attributes?.createdAt ?? '',
  updatedAt: attributes?.updatedAt ?? '',
  publishedAt: attributes?.publishedAt ?? '',
  logoUrl: attributes?.logo?.data?.attributes?.url ?? '',
  faviconUrl: attributes?.favicon?.data?.attributes?.url ?? '',
});

export const getSettingInfo = async () => {
  try {
    const response = await apiCall('/setting?populate=logo,favicon');

    if (!response?.data) {
      return null;
    }

    const settingInfo = filterSettingInfo(response.data);
    return settingInfo;
  } catch (error) {
    return null;
  }
};