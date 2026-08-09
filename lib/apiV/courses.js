import { apiCall } from './core';

const filterCourse = ({ id, attributes }) => ({
  id,
  imagePath: attributes?.imagePath ?? '',
  title: attributes?.title ?? '',
  code: attributes?.code ?? '',
  slug: attributes?.slug ?? '',
  excerpt: attributes?.excerpt ?? '',
  description: attributes?.description ?? '',
  courseDetail: attributes?.courseDetail ?? [],
  courseFee: attributes?.courseFee ?? [],
  examSchedule: attributes?.examSchedule ?? [],
});

const filterCourseDetail = (detail) => ({
  id: detail.id,
  title: detail.title,
  listItem: detail.listItem ?? []
});

const filterCourses = (items) => items?.map(filterCourse);

export const getHomeCourses = async () => {
  try {
    const response = await apiCall("/courses?populate[courseDetail][populate]=listItem");

    if (!response?.data) {
      return [];
    }

    return filterCourses(response?.data?.filter(item => item?.attributes?.displayHome === true));
  } catch (error) {
    return [];
  }
};

export const getAllCourses = async () => {
  try {
    const response = await apiCall("/courses?populate[courseDetail][populate]=listItem");

    if (!response?.data) {
      return [];
    }

    return filterCourses(response?.data);
  } catch (error) {
    return [];
  }
};

export const getCourseDetails = async (slug) => {
  try {
    const response = await apiCall(`/courses?populate[courseDetail][populate]=listItem&populate[courseFee][populate]=listItem&populate[examSchedule][populate]=listItem&filters[slug][$eq]=${slug}`);

    if (!response?.data || response.data.length === 0) {
      return null;
    }

    return filterCourse(response.data[0]);
  } catch (error) {
    return null;
  }
};
