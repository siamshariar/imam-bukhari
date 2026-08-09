import { apiCall } from './core';

const filterAdmission = ({ id, attributes }) => ({
  id,
  informations: attributes?.informations?.map(filterInformation) ?? [],
});

const filterInformation = (information) => ({
  id: information.id,
  title: information.title,
  listItem: information.listItem ?? []
});

export const getAdmissionInformation = async () => {
  try {
    const response = await apiCall("/admission-information?populate[informations][populate]=listItem");

    if (!response?.data) {
      return null;
    }

    return filterAdmission(response.data);
  } catch (error) {
    return null;
  }
};