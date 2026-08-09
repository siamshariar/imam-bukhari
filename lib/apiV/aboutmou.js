import { apiCall } from './core';

export const getAboutMouData = async () => {
    try {
        const response = await apiCall("/about-mou?populate=aboutMouList1,aboutMouList2,aboutMouList3");

        if (!response?.data) {
            return null;
        }

        return response.data.attributes;
    } catch (error) {
        return null;
    }
};

export const getMosqueProjectSummaryData = async () => {
    try {
        const response = await apiCall("/mosque-project-summary?populate[content][populate]=items&populate=sliderImages");

        if (!response?.data?.attributes) {
            return null;
        }

        const data = response.data.attributes;
        
        // Transform the API response to a more usable format
        return {
            id: response.data.id,
            title: data.title,
            items: data.content?.items || [],
            sliderImages: data.sliderImages?.data?.map(image => ({
                id: image.id,
                url: image.attributes.url,
                name: image.attributes.name,
                alt: image.attributes.alternativeText || image.attributes.name,
                width: image.attributes.width,
                height: image.attributes.height,
                formats: image.attributes.formats
            })) || [],
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        };
    } catch (error) {
        console.error('Error fetching mosque project summary data:', error);
        return null;
    }
};

export const getMosqueMainActivitiesData = async () => {
    try {
        const response = await apiCall("/mosque-main-activitie?populate[activities][populate]=image");

        if (!response?.data?.attributes) {
            return null;
        }

        // Transform the API response to a more usable format
        // Note: The new API returns a single object, not an array
        const data = response.data.attributes;
        
        return {
            id: response.data.id,
            title: data.title,
            arabicTitle: data.arbTitle, // Note: API uses 'arbTitle' instead of 'arabicTitle'
            bnText: data.bnText,
            ref: data.ref,
            activities: data.activities?.map(activity => ({
                id: activity.id,
                title: activity.title,
                image: activity.image?.data ? {
                    id: activity.image.data.id,
                    url: activity.image.data.attributes.url,
                    name: activity.image.data.attributes.name,
                    alt: activity.image.data.attributes.alternativeText || activity.title,
                    formats: activity.image.data.attributes.formats
                } : null
            })) || [],
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        };
    } catch (error) {
        console.error('Error fetching mosque main activities data:', error);
        return null;
    }
};

export const getMosqueComplexData = async () => {
    try {
        const response = await apiCall("/mosque-complex?populate[items][populate]=title");

        if (!response?.data?.attributes) {
            return null;
        }

        const data = response.data.attributes;
        
        // Transform the API response to a more usable format
        return {
            id: response.data.id,
            title: data.title,
            details: data.details,
            items: data.items?.map(item => ({
                id: item.id,
                title: item.title
            })) || [],
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        };
    } catch (error) {
        console.error('Error fetching mosque complex data:', error);
        return null;
    }
};

export const getKulliyatulQuranilKareemDetailData = async () => {
    try {
        const response = await apiCall("/kulliyatul-quranil-kareem-detail");

        if (!response?.data?.attributes) {
            return null;
        }

        const data = response.data.attributes;
        
        // Transform the API response to a more usable format
        return {
            id: response.data.id,
            title: data.title,
            description: data.description,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        };
    } catch (error) {
        console.error('Error fetching kulliyatul quranil kareem detail data:', error);
        return null;
    }
};

export const getKulliaProjectSummaryData = async () => {
    try {
        const response = await apiCall("/kullia-project-summary?populate[content][populate]=items&populate=sliderImages");

        if (!response?.data?.attributes) {
            return null;
        }

        const data = response.data.attributes;
        
        // Transform the API response to a more usable format
        return {
            id: response.data.id,
            title: data.title,
            items: data.content?.items || [],
            sliderImages: data.sliderImages?.data?.map(image => ({
                id: image.id,
                url: image.attributes.url,
                name: image.attributes.name,
                alt: image.attributes.alternativeText || image.attributes.name,
                width: image.attributes.width,
                height: image.attributes.height,
                formats: image.attributes.formats
            })) || [],
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        };
    } catch (error) {
        console.error('Error fetching kullia project summary data:', error);
        return null;
    }
};

export const getKulliaMainActivitiesData = async () => {
    try {
        const response = await apiCall("/kullia-main-activitie?populate[Features][populate]=image");

        if (!response?.data?.attributes) {
            return null;
        }

        // Transform the API response to a more usable format
        const data = response.data.attributes;
        
        return {
            id: response.data.id,
            title: data.title,
            arabicTitle: data.arbTitle,
            bnText: data.bnText,
            ref: data.ref,
            features: data.Features?.map(feature => ({
                id: feature.id,
                title: feature.title,
                image: feature.image?.data ? {
                    id: feature.image.data.id,
                    url: feature.image.data.attributes.url,
                    name: feature.image.data.attributes.name,
                    alt: feature.image.data.attributes.alternativeText || feature.title,
                    formats: feature.image.data.attributes.formats
                } : null
            })) || [],
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        };
    } catch (error) {
        console.error('Error fetching kullia main activities data:', error);
        return null;
    }
};

export const getKulliaRecommendedDepartmentData = async () => {
    try {
        const response = await apiCall("/kullia-recommended-department?populate[kulliaDepartment][populate]=items&populate[progressUniversity][populate]=items");

        if (!response?.data?.attributes) {
            return null;
        }

        const data = response.data.attributes;
        
        // Transform the API response to a more usable format
        return {
            id: response.data.id,
            kulliaDepartment: data.kulliaDepartment ? {
                id: data.kulliaDepartment.id,
                title: data.kulliaDepartment.title,
                items: data.kulliaDepartment.items || []
            } : null,
            progressUniversity: data.progressUniversity ? {
                id: data.progressUniversity.id,
                title: data.progressUniversity.title,
                items: data.progressUniversity.items || []
            } : null,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        };
    } catch (error) {
        console.error('Error fetching kullia recommended department data:', error);
        return null;
    }
};

export const getCharacteristicsKulliaData = async () => {
    try {
        const response = await apiCall("/characteristics-kullia?populate[items][populate]=listItem");

        if (!response?.data?.attributes) {
            return null;
        }

        const data = response.data.attributes;
        
        // Transform the API response to a more usable format
        return {
            id: response.data.id,
            items: data.items?.map(item => ({
                id: item.id,
                title: item.title,
                listItems: item.listItem?.map(listItem => ({
                    id: listItem.id,
                    text: listItem.listItem
                })) || []
            })) || [],
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        };
    } catch (error) {
        console.error('Error fetching characteristics kullia data:', error);
        return null;
    }
};

export const getDarulHadithMadrasaData = async () => {
    try {
        const response = await apiCall("/darul-hadith-arabic-madrasa-detail");

        if (!response?.data?.attributes) {
            return null;
        }

        const data = response.data.attributes;
        
        // Transform the API response for use in the page
        return {
            id: response.data.id,
            title: data.title,
            description: data.description,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        };
    } catch (error) {
        console.error('Error fetching Darul Hadith Madrasa data:', error);
        return null;
    }
};

export const getDarulHadithSummaryData = async () => {
    try {
        const response = await apiCall("/darul-hadith-summary?populate[items][populate]=items&populate=sliderImages");

        if (!response?.data?.attributes) {
            return null;
        }

        const data = response.data.attributes;
        
        // Transform the API response for use in BlockA component
        return {
            id: response.data.id,
            title: data.title,
            items: data.items?.items?.map(item => ({
                id: item.id,
                title: item.title
            })) || [],
            sliderImages: data.sliderImages?.data?.map(image => ({
                id: image.id,
                url: image.attributes.url,
                name: image.attributes.name,
                alt: image.attributes.alternativeText || image.attributes.name,
                width: image.attributes.width,
                height: image.attributes.height,
                formats: image.attributes.formats
            })) || [],
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        };
    } catch (error) {
        console.error('Error fetching Darul Hadith Summary data:', error);
        return null;
    }
};

export const getDarulHadithCurriculumData = async () => {
    try {
        const response = await apiCall("/darul-hadith-curriculum?populate[darulHadithCurriculum][populate]=items");

        if (!response?.data?.attributes) {
            return null;
        }

        const data = response.data.attributes;
        
        // Transform the API response for use in TitleListBlock
        return {
            id: response.data.id,
            curriculum: data.darulHadithCurriculum ? {
                id: data.darulHadithCurriculum.id,
                title: data.darulHadithCurriculum.title,
                items: data.darulHadithCurriculum.items?.map(item => ({
                    id: item.id,
                    item: item.item
                })) || []
            } : null,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        };
    } catch (error) {
        console.error('Error fetching Darul Hadith curriculum data:', error);
        return null;
    }
};

export const getDarulHadithCharacteristicsData = async () => {
    try {
        const response = await apiCall("/characteristics-darul-hadith?populate=items");

        if (!response?.data?.attributes) {
            return null;
        }

        const data = response.data.attributes;
        
        // Transform the API response for use in FeatureList component
        return {
            id: response.data.id,
            characteristics: {
                id: response.data.id,
                title: data.title,
                items: data.items?.map(item => ({
                    id: item.id,
                    title: item.title
                })) || []
            },
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        };
    } catch (error) {
        console.error('Error fetching Darul Hadith characteristics data:', error);
        return null;
    }
};

export const getDonateData = async () => {
    try {
        const response = await apiCall("/donate");

        if (!response?.data?.attributes) {
            return null;
        }

        const data = response.data.attributes;
        
        // Return the data in the format expected by RichText component
        return {
            id: response.data.id,
            description: data.description,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        };
    } catch (error) {
        console.error('Error fetching donate data:', error);
        return null;
    }
};