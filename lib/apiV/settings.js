import { apiCall } from './core';

// Fetch logo from Strapi API
export async function getLogo() {
  try {
    const data = await apiCall('/setting?populate=logo');
    
    if (data?.data?.attributes?.logo?.data) {
      const logoData = data.data.attributes.logo.data.attributes;
      return {
        url: logoData.url,
        alternativeText: logoData.alternativeText || 'Logo',
        width: logoData.width,
        height: logoData.height,
        formats: logoData.formats
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching logo:', error);
    return null;
  }
}

// Fetch favicon from Strapi API
export async function getFavicon() {
  try {
    const data = await apiCall('/setting?populate=favicon');
    
    if (data?.data?.attributes?.favicon?.data) {
      const faviconData = data.data.attributes.favicon.data.attributes;
      return {
        url: faviconData.url,
        alternativeText: faviconData.alternativeText || 'Favicon',
        width: faviconData.width,
        height: faviconData.height,
        formats: faviconData.formats
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching favicon:', error);
    return null;
  }
}

// Fetch logo, favicon, and contact/social info in one call for efficiency
export async function getSettings() {
  try {
    const response = await apiCall('/setting?populate=logo,favicon');
    const attributes = response?.data?.attributes;

    const settings = {
      logo: null,
      favicon: null,
      email: attributes?.email || '',
      phone: attributes?.phone || '',
      facebookUrl: attributes?.facebookUrl || '',
      youtubeUrl: attributes?.youtubeUrl || '',
      xUrl: attributes?.xUrl || '',
      linkedinUrl: attributes?.linkedinUrl || '',
    };

    if (attributes?.logo?.data) {
      const logoData = attributes.logo.data.attributes;
      settings.logo = {
        url: logoData.url,
        alternativeText: logoData.alternativeText || 'Logo',
        width: logoData.width,
        height: logoData.height,
        formats: logoData.formats
      };
    }

    if (attributes?.favicon?.data) {
      const faviconData = attributes.favicon.data.attributes;
      settings.favicon = {
        url: faviconData.url,
        alternativeText: faviconData.alternativeText || 'Favicon',
        width: faviconData.width,
        height: faviconData.height,
        formats: faviconData.formats
      };
    }

    return settings;
  } catch (error) {
    console.error('Error fetching settings:', error);
    return {
      logo: null,
      favicon: null,
      email: '',
      phone: '',
      facebookUrl: '',
      youtubeUrl: '',
      xUrl: '',
      linkedinUrl: '',
    };
  }
}
