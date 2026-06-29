const API_BASE_URL = '/api';

const getHeaders = () => {
  const lang = localStorage.getItem('i18nextLng') || 'en';
  return {
    'Accept-Language': lang,
    'Content-Type': 'application/json',
  };
};

export const fetchProjects = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/?page_size=50`, { headers: getHeaders() });
    const data = await response.json();
    return data.results ? data.results : data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

export const fetchProjectBySlug = async (slug) => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/${slug}/`, { headers: getHeaders() });
    return await response.json();
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
};

export const fetchProjectCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories/`, { headers: getHeaders() });
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const fetchSkills = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/skills/`, { headers: getHeaders() });
    return await response.json();
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
};

export const submitHireRequest = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/hire-me/`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      const error = new Error('Request failed');
      error.response = { data: errorData || { message: 'Something went wrong. Please try again.' } };
      throw error;
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error submitting hire request:', error);
    throw error;
  }
};

const api = {
  get: async (path) => {
    const response = await fetch(`${API_BASE_URL}${path}`, { headers: getHeaders() });
    return { status: response.status, data: await response.json().catch(() => ({})) };
  }
};

export default api;
