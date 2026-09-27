import { apiCall } from './core';

export const getAdvisoryCouncils = async () => {
    try {
        const response = await apiCall("/advisory-boards"); 

        if (!response?.data) {
            return [];
        }

        const filterAdvisoryCouncil = ({ id, attributes }) => ({
            id,
            name: attributes?.name ?? '',
            designation: attributes?.designation ?? '', 
            description: attributes?.description ?? '',
            slug: attributes?.slug ?? null,
        });

        return response.data.map(filterAdvisoryCouncil).sort((a, b) => a.id - b.id);
    } catch (error) {
        console.error('Failed to fetch advisory councils:', error?.message);
        return [];
    }
};