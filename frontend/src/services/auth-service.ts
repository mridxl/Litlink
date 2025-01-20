import { api } from '@/api/api';
import { LoginData, LoginResponse, RegisterData } from '@/schemas/auth';

export const loginUser = async (data: LoginData) => {
  const response = await api.post('/auth/login', data);
  return response.data as LoginResponse;
};

export const registerUser = async (data: RegisterData) => {
  const response = await api.post('/auth/register', data);
  return response.data as LoginResponse;
};

export const setAuthToken = (token: string): void => {
  if (token) {
    localStorage.setItem('ltlnkAuth', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    localStorage.removeItem('ltlnkAuth');
    delete api.defaults.headers.common['Authorization'];
  }
};

export const getAuthToken = () => {
  return localStorage.getItem('ltlnkAuth');
};

export const logoutUser = () => {
  localStorage.removeItem('ltlnkAuth');
  delete api.defaults.headers.common['Authorization'];
};
