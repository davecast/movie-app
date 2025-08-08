import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  params: {
    language: 'es-MX',
    api_key: process.env.EXPO_PUBLIC_API_KEY,
  },
});