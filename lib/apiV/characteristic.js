import { apiCall } from './core';

const filterCharacteristicDetail = (detail) => ({
  id: detail.id,
  title: detail.title,
  listItem: detail.listItem ?? []
});

const filterCharacteristics = ({ id, attributes }) => ({
  id,
  items: attributes?.items?.map(filterCharacteristicDetail) ?? []
});

export const getAllCharacteristics = async () => {
  try {
    const response = await apiCall("/characteristic?populate[items][populate]=listItem");

    if (!response?.data) {
      return [];
    }

    return filterCharacteristics(response.data);
  } catch (error) {
    return [];
  }
};