import { apiCall } from './core';

const filterNotice = ({ id, attributes }) => ({
  id,
  title: attributes?.title ?? '',
  description: attributes?.description ?? [],
  slug: attributes?.slug ?? '',
  createdAt: attributes?.createdAt ?? '',
  publishedAt: attributes?.publishedAt ?? '',
});

const filterNotices = (items) => items?.map(filterNotice).sort((a, b) => a.id - b.id);

export const getNotices = async () => {
  try {
    const response = await apiCall("/notices");

    if (!response?.data) {
      return [];
    }

    return filterNotices(response?.data);
  } catch (error) {
    return [];
  }
};

export const getNoticeDetails = async (slug) => {
  try {
    const response = await apiCall(`/notices?filters[slug][$eq]=${slug}`);

    if (!response?.data) {
      return null;
    }

    return filterNotices(response?.data)?.[0] ?? null;
  } catch (error) {
    return null;
  }
};