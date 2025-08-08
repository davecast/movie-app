import axios from 'axios';

export const axios_client = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  params: {
    language: 'es-MX',
    api_key: process.env.EXPO_PUBLIC_API_KEY,
  },
});