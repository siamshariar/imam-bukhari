import { apiCall, resolveMediaUrl } from './core';

export const getNewPages = async () => {
  try {
    const response = await apiCall('/new-pages?populate[pageInfo][populate]=menuInfo');
    if (!response?.data) {
      return [];
    }

    return response.data
    .filter((page) => page.attributes.pageInfo.menuInfo?.isDislpay === true)
    ?.map(filterNewpage)
    .sort((a, b) => a.id - b.id);
  }catch (error) {
    console.error(`Failed to fetch newpages:`, error?.message)
    return [];
  }
}

export const getNewpage = async (slug) => {
  try {
    const response = await apiCall(`/new-pages?filters[slug][$eq]=${slug}&populate=*`)
    if (!response?.data || response.data.length === 0) {
      console.log(`No newpage data found for slug ${slug}`)
      return null
    }
    return filterNewpage(response.data[0])
  } catch (error) {
    console.error(`Failed to fetch newpage details for slug ${slug}:`, error?.message)
    return null;
  }
}


const filterNewpage = (page) => ({
  id: page.id,
  slug: page?.attributes?.slug,
  key: `p/${page?.attributes?.slug}`,
  title: page?.attributes?.title || '',
  coverImage: resolveMediaUrl(page?.attributes?.coverImage?.data?.attributes?.url) || '',
  sliderImages: page?.attributes?.sliderImages?.data?.map(img => resolveMediaUrl(img.attributes?.url)) || [],
  ...(page?.attributes?.pageInfo?.menuInfo || {}),
  pageInfo: page?.attributes?.pageInfo?.pageInfo|| {},
  metaInfo: page?.attributes?.pageInfo?.metaInfo|| {},
  content: page?.attributes?.content || '',
});