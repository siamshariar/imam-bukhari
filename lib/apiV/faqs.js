import { apiCall } from "./core";

export const getHomeFaqs = async () => {
  try {
    const response = await apiCall("/faqs");

    if (!response || !response.data) {
      console.error("Invalid response format:", response);
      return [];
    }
    
    // Filter FAQs that should be displayed on home page
    const homeFaqs = response.data
      .filter((item) => item?.attributes?.isDisplayHome === true)
      .sort((a, b) => a.id - b.id);

    return homeFaqs;
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
};

export const getAllFaqs = async () => {
  try {
    const response = await apiCall("/faqs");

    if (!response || !response.data) {
      console.error("Invalid response format:", response);
      return [];
    }
    
    // Return ALL FAQs without filtering for the FAQs page
    return [...response.data].sort((a, b) => a.id - b.id);
  } catch (error) {
    console.error("Error fetching all FAQs:", error);
    return [];
  }
};
