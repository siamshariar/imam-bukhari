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

// Fetch both logo and favicon in one call for efficiency
export async function getSettings() {
  try {
    console.log('Fetching settings from Strapi...');
    
    // Try separate calls first to debug
    const logoResponse = await apiCall('/setting?populate=logo');
    const faviconResponse = await apiCall('/setting?populate=favicon');
    
    console.log('Logo API response:', JSON.stringify(logoResponse, null, 2));
    console.log('Favicon API response:', JSON.stringify(faviconResponse, null, 2));
    
    const settings = {
      logo: null,
      favicon: null
    };
    
    // Extract logo
    if (logoResponse?.data?.attributes?.logo?.data) {
      const logoData = logoResponse.data.attributes.logo.data.attributes;
      settings.logo = {
        url: logoData.url,
        alternativeText: logoData.alternativeText || 'Logo',
        width: logoData.width,
        height: logoData.height,
        formats: logoData.formats
      };
      console.log('Logo extracted:', settings.logo);
    } else {
      console.log('No logo data found in API response');
    }
    
    // Extract favicon
    if (faviconResponse?.data?.attributes?.favicon?.data) {
      const faviconData = faviconResponse.data.attributes.favicon.data.attributes;
      settings.favicon = {
        url: faviconData.url,
        alternativeText: faviconData.alternativeText || 'Favicon',
        width: faviconData.width,
        height: faviconData.height,
        formats: faviconData.formats
      };
      console.log('Favicon extracted:', settings.favicon);
    } else {
      console.log('No favicon data found in API response');
    }
    
    console.log('Final settings object:', settings);
    return settings;
  } catch (error) {
    console.error('Error fetching settings:', error);
    return {
      logo: null,
      favicon: null
    };
  }
}
