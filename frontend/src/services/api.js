import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProjects = async () => {
  try {
    const response = await api.get('/projects/');
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

export const fetchSkills = async () => {
  try {
    const response = await api.get('/skills/');
    return response.data;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
};

export const submitHireRequest = async (data) => {
  try {
    const response = await api.post('/hire-me/', data);
    return response.data;
  } catch (error) {
    console.error('Error submitting hire request:', error);
    throw error;
  }
};

export default api;
