import { apiCall } from './core';
import { apiServer } from '../config';

const filterSubscription = ({ id, attributes }) => ({
  id,
  subscriptionTitle: attributes?.subscriptionTitle ?? '',
  subscriptionPara: attributes?.subscriptionPara ?? '',
});

export const getSubscription = async () => {
  try {
    const response = await apiCall("/subscription");

    if (!response?.data) {
      return null;
    }

    const result = filterSubscription(response.data);

    return result;
  } catch (error) {
    return null;
  }
};