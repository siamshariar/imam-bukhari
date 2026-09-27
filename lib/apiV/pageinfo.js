import { apiCall } from "./core";
import { getNewPages } from "./newpage";

const getUrl = (page = [], populate='menuInfo') => {
  return `/page-Information?${page.reduce((acc, curr) => {
    return acc + `&populate[${curr}][populate]=${populate}`
  }, "")}`;

}

export const getMenu = async () => {
  try {
    const response = await apiCall(
      getUrl([
        'home',
        'about',
        'advisors',
        'members',
        'courses',
        'videos',
        'admissionInformation',
        'contact',
        'blogs',
        'events',
        'photoGallery',
        'books',
        'notices',
        'faq',
        'bukhariJameMasjid',
        'kulliyatulQuranilKareem',
        'darulHadithArabicMadrasa',
        'sunnahConference',
        'donate'
      ],
      '*')
    )

    if (!response?.data?.attributes) {
      return []
    }

    const keyMapping = {
      photoGallery: "gallery",
      advisors: "advisory-council",
      admissionInformation: "admission",
      home: "/",
      faq: "faqs",
      bukhariJameMasjid: "bukhari-jame-masjid",
      kulliyatulQuranilKareem: "kulliyatul-quranil-kareem",
      darulHadithArabicMadrasa: "darul-hadith-arabic-madrasa",
      sunnahConference: "conference-2022",
    }

    const menuItems = Object.entries(response.data.attributes)
    .filter(([key, value]) => value && value.menuInfo?.isDislpay === true)
    .map(([key, value]) => {
      const mappedKey = keyMapping[key] || key;
      return {
        id: value.id,
        key: mappedKey.replace(/\/+$/, ''), // Remove trailing slashes
        ...value.menuInfo,
        pageInfo: value.pageInfo,
        metaInfo: value.metaInfo,
      };
    });
  

      const sortedMenuItems = menuItems.sort((a, b) => a.order - b.order);
      const newPage = await getNewPages();
      if (newPage.length > 0) {
        sortedMenuItems.push(...newPage);
      }
      return sortedMenuItems;
  } catch (error) {
    console.error("Failed to fetch page information:", error?.message)
    return []
  }
}

export const getMetaInfo = async (page) => {
  try {
    const response = await apiCall(getUrl([page], 'metaInfo'))
    if (!response?.data?.attributes) {
      return [];
    }
    return response.data.attributes;
  } catch (error) {
    console.error("Failed to fetch page information:", error?.message)
    return []
  }
}

export const filterMetaInfo = async (pageInfo, page = '') => {
  return pageInfo.find((item) => item.key === page) || null;
}
