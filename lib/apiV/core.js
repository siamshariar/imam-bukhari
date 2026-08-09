import { apiServer } from "../config";

const API_BASE_URL = `${apiServer}/api`;

export async function apiCall(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const fetchOptions = { ...defaultOptions, ...options };

  try {
    const response = await fetch(url, fetchOptions);

    if (!response?.ok) {
      let errorMessage = `HTTP error! status: ${response?.status}`;
      if (response?.status === 404) {
        errorMessage = `Resource not found: ${url}`;
      } else if (response?.status === 403) {
        errorMessage = 'Access forbidden. Please check your credentials.';
      } else if (response?.status === 500) {
        errorMessage = 'Internal server error. Please try again later.';
      }
      throw new Error(errorMessage);
    }

    return await response?.json();

  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error('Error parsing JSON:', error);
      throw new Error('Unable to parse server response. Please try again later.');
    } else if (error instanceof TypeError) {
      console.error('Network error:', error);
      throw new Error('Unable to connect to the server. Please check your internet connection.');
    } else {
      console.error('API call failed:', error?.message);
      throw error;
    }
  }
};
