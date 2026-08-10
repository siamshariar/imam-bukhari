import { apiCall, resolveMediaUrl } from './core';

const filterBook = ({ id, attributes }) => ({
  id,
  slug: attributes?.slug ?? '',
  title: attributes?.title ?? '',
  author: attributes?.author ?? '',
  translator: attributes?.translator ?? '',
  editor: attributes?.editor ?? '',
  excerpt: attributes?.excerpt ?? '',
  description: attributes?.description ?? [],
  purchaseUrl: attributes?.purchaseUrl ?? null,
  pdfUrl: attributes?.pdfUrl ?? null,
  coverImage: resolveMediaUrl(attributes?.coverImage?.data?.attributes?.url) ?? '/placeholder.svg',
});

const filterBooks = (items) => items?.map(filterBook);

export const getBooks = async () => {
  try {
    const response = await apiCall('/books?populate=coverImage');

    if (!response?.data) {
      return [];
    }

    return filterBooks(response?.data);
  } catch (error) {
    return [];
  }
};

export const getBookDetails = async (slug) => {
  try {
    const response = await apiCall(`/books?populate=coverImage&filters[slug][$eq]=${slug}`);

    if (!response?.data || response?.data.length === 0) {
      return null;
    }

    return filterBooks(response?.data)?.[0] ?? null;
  } catch (error) {
    return null;
  }
};