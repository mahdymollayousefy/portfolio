const API_BASE_URL = 'http://localhost:8000/api';

export const fetchProjects = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

export const fetchSkills = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/skills/`);
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
      headers: {
        'Content-Type': 'application/json',
      },
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
    const response = await fetch(`${API_BASE_URL}${path}`);
    return { status: response.status, data: await response.json().catch(() => ({})) };
  }
};

export default api;
