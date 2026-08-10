import { apiCall, resolveMediaUrl } from './core';

const filterEvent = ({ id, attributes }) => ({
  id,
  title: attributes?.title ?? '',
  slug: attributes?.slug ?? '',
  excerpt: attributes?.excerpt ?? '',
  date: attributes?.date ?? '',
  time: attributes?.time ?? '',
  content: attributes?.content ?? [],
  imageSrc: resolveMediaUrl(attributes?.image?.data?.attributes?.url) ?? '',
});

const filterEvents = (items = []) => items.map(filterEvent);

export const getEvents = async () => {
  try {
    const response = await apiCall('/events?populate=image');

    if (!response?.data?.length) {
      return [];
    }

    return filterEvents(response.data);
  } catch (error) {
    return [];
  }
};

export const getEventDetails = async (slug) => {
  if (!slug) {
    return null;
  }

  try {
    const response = await apiCall(`/events?filters[slug][$eq]=${slug}&populate=image`);

    if (!response?.data?.length) {
      return null;
    }

    return filterEvent(response.data[0]);
  } catch (error) {
    console.error('Error fetching event details:', error);
    return null;
  }
};

export const getUpcomingEvents = async (limit = 3) => {
  try {
    const currentDate = new Date().toISOString().split('T')[0];
    const response = await apiCall(
      `/events?populate=image&sort=date:asc&filters[date][$gte]=${currentDate}&pagination[limit]=${limit}`
    );

    if (!response?.data?.length) {
      return [];
    }

    return filterEvents(response.data);
  } catch (error) {
    return [];
  }
};

export const getAllEventSlugs = async () => {
  try {
    const response = await apiCall('/events');
    if (!response?.data) {
      return [];
    }

    return response.data.map(event => ({
      slug: event.attributes.slug,
    }));
  } catch (error) {
    return [];
  }
};