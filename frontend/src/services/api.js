const API_BASE_URL = '/api';

const getCookie = (name) => {
  if (typeof document === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

const getHeaders = () => {
  const lang = typeof window !== 'undefined' ? (localStorage.getItem('i18nextLng') || 'en') : 'en';
  const headers = {
    'Accept-Language': lang,
    'Content-Type': 'application/json',
  };
  
  const csrfToken = getCookie('csrftoken');
  if (csrfToken) {
    headers['X-CSRFToken'] = csrfToken;
  }
  
  return headers;
};

export const fetchProjects = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/?page_size=50`, { headers: getHeaders() });
    const data = await response.json();
    return data.results ? data.results : (Array.isArray(data) ? data : []);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

export const fetchProjectBySlug = async (slug) => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/${slug}/`, { headers: getHeaders() });
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
};

export const fetchProjectCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories/`, { headers: getHeaders() });
    const data = await response.json();
    // Handle both paginated ({results: [...]}) and flat array responses
    return data.results ? data.results : (Array.isArray(data) ? data : []);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const fetchSkills = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/skills/`, { headers: getHeaders() });
    const data = await response.json();
    return data.results ? data.results : (Array.isArray(data) ? data : []);
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
};

export const submitHireRequest = async (data) => {
  try {
    // Clean up data before submission
    const cleanData = { ...data };
    
    // Convert empty budget to null
    if (!cleanData.budget || cleanData.budget === '') {
      delete cleanData.budget;
    } else {
      // Ensure budget is a valid number
      const budgetNum = parseFloat(cleanData.budget);
      if (isNaN(budgetNum)) {
        delete cleanData.budget;
      } else {
        cleanData.budget = budgetNum;
      }
    }
    
    const response = await fetch(`${API_BASE_URL}/hire-me/`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(cleanData),
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
