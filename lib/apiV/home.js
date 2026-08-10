import { apiCall, resolveMediaUrl } from './core';

export const getHomeBannerData = async () => {
  try {
    const response = await apiCall("/home?populate[HomeBanner][populate]=image");
  
    if (!response?.data?.attributes) {
      return null;
    }
  
    // Return the full data structure with HomeBanner nested inside
    return response.data.attributes;
  } catch (error) {
    console.error('Error fetching home banner data:', error);
    return null;
  }
};

export const getOurProjectsData = async () => {
  try {
    const response = await apiCall("/our-projects?populate=sliderImages");
  
    if (!response?.data || !Array.isArray(response.data) || response.data.length === 0) {
      return null;
    }
  
    // Transform the API response to a more usable format
    // Since it's an array, we'll take the first project or transform all
    const projects = response.data.map(project => {
      const projectData = project.attributes;
      
      // Transform slider images to a simpler format
      const transformedImages = projectData.sliderImages?.data?.map(img => ({
        id: img.id,
        url: resolveMediaUrl(img.attributes.url),
        name: img.attributes.name,
        alt: img.attributes.alternativeText || img.attributes.name,
        formats: img.attributes.formats
      })) || [];

      return {
        id: project.id,
        title: projectData.title,
        subtitle: projectData.subtitle,
        message: projectData.message,
        images: transformedImages,
        createdAt: projectData.createdAt,
        updatedAt: projectData.updatedAt
      };
    });

    // Return all projects
    return projects;
  } catch (error) {
    console.error('Error fetching our projects data:', error);
    return null;
  }
};

export const getRecentActivitiesData = async () => {
  try {
    const response = await apiCall("/recent-activities?populate=sliderImage");
  
    if (!response?.data || !Array.isArray(response.data) || response.data.length === 0) {
      return null;
    }
  
    // Transform the API response to a more usable format
    const activities = response.data.map(activity => {
      const activityData = activity.attributes;
      
      // Transform slider image to a simpler format
      const transformedImage = activityData.sliderImage?.data ? {
        id: activityData.sliderImage.data.id,
        url: resolveMediaUrl(activityData.sliderImage.data.attributes.url),
        name: activityData.sliderImage.data.attributes.name,
        alt: activityData.sliderImage.data.attributes.alternativeText || activityData.sliderImage.data.attributes.name,
        formats: activityData.sliderImage.data.attributes.formats
      } : null;

      return {
        id: activity.id,
        title: activityData.title,
        subtitle: activityData.subtitle,
        para: activityData.para,
        image: transformedImage,
        createdAt: activityData.createdAt,
        updatedAt: activityData.updatedAt
      };
    });

    // Return all activities
    return activities;
  } catch (error) {
    console.error('Error fetching recent activities data:', error);
    return null;
  }
};

export const getHomeSliderData = async () => {
  try {
    const response = await apiCall("/home-slider?populate=sliderImages");
  
    if (!response?.data?.attributes?.sliderImages?.data || !Array.isArray(response.data.attributes.sliderImages.data) || response.data.attributes.sliderImages.data.length === 0) {
      return null;
    }
  
    // Transform the API response to match ImageTitleSlider format
    const sliderImages = response.data.attributes.sliderImages.data.map((img, index) => {
      return {
        id: img.id,
        imagePath: resolveMediaUrl(img.attributes.url),
        imageAlt: img.attributes.alternativeText || img.attributes.name || `Slider Image ${index + 1}`,
        imageWidth: 400, // Default width, can be adjusted
        title: img.attributes.name.replace(/\.(jpg|jpeg|png|gif)$/i, '') // Remove file extension for title
      };
    });

    return sliderImages;
  } catch (error) {
    console.error('Error fetching home slider data:', error);
    return null;
  }
};

export const getInfrastructureModelData = async () => {
  try {
    const response = await apiCall("/infrastructure-model?populate=sliderImages");
  
    if (!response?.data?.attributes) {
      return null;
    }
  
    const data = response.data.attributes;
    
    // Transform slider images to a simpler format
    const transformedImages = data.sliderImages?.data?.map(img => ({
      id: img.id,
      url: resolveMediaUrl(img.attributes.url),
      name: img.attributes.name,
      alt: img.attributes.alternativeText || img.attributes.name,
      formats: img.attributes.formats,
      width: img.attributes.width,
      height: img.attributes.height
    })) || [];

    return {
      id: response.data.id,
      title: data.title,
      images: transformedImages,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt
    };
  } catch (error) {
    console.error('Error fetching infrastructure model data:', error);
    return null;
  }
};

export const getImamBukhariDetailData = async () => {
  try {
    const response = await apiCall("/imam-bukhari-detail");
  
    if (!response?.data?.attributes) {
      return null;
    }
  
    // Return the data with a simplified structure
    return {
      id: response.data.id,
      title: response.data.attributes.title,
      subtitle: response.data.attributes.subtitle,
      createdAt: response.data.attributes.createdAt,
      updatedAt: response.data.attributes.updatedAt
    };
  } catch (error) {
    console.error('Error fetching imam bukhari detail data:', error);
    return null;
  }
};

export const getHomeData = async () => {
  try {
    const response = await apiCall("/home?populate=aboutShortText");

    if (!response?.data?.attributes) {
      return null;
    }

    const data = response.data.attributes;
    
    return {
      id: response.data.id,
      aboutShortText: data.aboutShortText,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      publishedAt: data.publishedAt
    };
  } catch (error) {
    console.error('Error fetching home data:', error);
    return null;
  }
};