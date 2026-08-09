import { apiCall } from './core';

export const getAboutShortContent = async () => {
  try {
    const response = await apiCall("/home?populate=aboutShortText");

    if (!response?.data?.attributes) {
      console.warn('Home aboutShortText: No data attributes found in API response');
      return null;
    }

    // aboutShortText is a simple string, not an array
    const aboutText = response.data.attributes.aboutShortText;
    
    if (!aboutText || typeof aboutText !== 'string') {
      console.warn('Home aboutShortText: Invalid or empty aboutShortText in API response');
      return null;
    }
    
    // Return in the format expected by the TextBlock component
    return [
      {
        children: [
          {
            text: aboutText.trim(),
            bold: false
          }
        ]
      }
    ];
  } catch (error) {
    console.error('Error fetching about short content:', error.message);
    return null;
  }
};