import { apiCall, resolveMediaUrl } from './core';

const filterBlog = ({ id, attributes }) => ({
  id,
  coverImage: resolveMediaUrl(attributes?.coverImage?.data?.attributes?.url) ?? '',
  title: attributes?.title ?? '',
  excerpt: attributes?.excerpt ?? '',
  slug: attributes?.slug ?? '',
  content: attributes?.content ?? '',
  author: attributes?.author ?? '',
  date: attributes?.publishedAt ?? '',
});

const filterBlogs = (items) => items?.map(filterBlog).sort((a, b) => a.id - b.id);

export const getBlogs = async () => {
  try {
    const response = await apiCall("/blogs?populate=coverImage");
    
    if (!response?.data) {
      return [];
    }
    
    return filterBlogs(response?.data);
  } catch (error) {
    return [];
  }
};

export const getBlogDetails = async (slug) => {
  try {
    const response = await apiCall(`/blogs?populate=coverImage&filters[slug][$eq]=${slug}`);
    
    if (!response?.data) {
      return null;
    }

    return filterBlogs(response?.data)?.[0] ?? null;
  } catch (error) {
    return null;
  }
};