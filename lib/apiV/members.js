import { apiCall, resolveMediaUrl } from './core';

const filterMember = ({ id, attributes }) => ({
  id,
  imagePath: resolveMediaUrl(attributes?.image?.data?.attributes?.url) ?? '',
  imageAlt: attributes?.image?.data?.attributes?.alternativeText ?? '',
  name: attributes?.name ?? '',
  designation: attributes?.designation ?? '',
  slug: attributes?.slug ?? '',
  excerpt: attributes?.excerpt ?? '',
  description: attributes?.description ?? '',
  designation: attributes?.designation ?? null,
  kulliyaDesignation: attributes?.kulliyaDesignation ?? null,
  isBoardOfDirector: attributes?.isBoardOfDirector ?? null,
  isTeacher: attributes?.isTeacher ?? null,

});

const filterMembers = (items) => items?.map(filterMember).sort((a, b) => a.id - b.id);

export const getHomeMembers = async () => {
  try {
    const response = await apiCall("/members?populate=image");

    if (!response?.data) {
      return [];
    }

    const filteredTeachers = response.data.filter(item => item?.attributes?.isTeacher === true);

    const result = filterMembers(filteredTeachers);

    return result;
  } catch (error) {
    return [];
  }
};

export const getBoardOfDirectors = async () => {
  try {
    const response = await apiCall("/members?populate=image");

    if (!response?.data) {
      return [];
    }

    return filterMembers(response?.data);
  } catch (error) {
    return [];
  }
};

export const getTeachers = async () => {
  try {
    const response = await apiCall("/members?populate=image");

    if (!response?.data) {
      return [];
    }

    return filterMembers(response?.data);

    return filterMembers(teachers);
  } catch (error) {
    return [];
  }
};

export const getMembers = async () => {
  try {
    const response = await apiCall("/members?populate=image");

    if (!response?.data) {
      return [];
    }

    return filterMembers(response?.data);
  } catch (error) {
    return [];
  }
};

export const getMemberDetails = async (slug) => {
  try {
    const response = await apiCall(`/members?populate=image&filters[slug][$eq]=${slug}`);

    if (!response?.data) {
      return null;
    }

    return filterMembers(response?.data)?.[0] ?? null;
  } catch (error) {
    return null;
  }
};

export const getSingleMember = async (slug) => {
  try {
    const response = await apiCall(`/members?filters[slug][$eq]=${slug}&populate=image`);

    if (!response?.data || response.data.length === 0) {
      return null;
    }

    const member = filterMembers(response.data)?.[0]; 

    return member;
  } catch (error) {
    return null;
  }
};
