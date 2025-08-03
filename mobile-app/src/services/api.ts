import axios from 'axios';
import * as Keychain from 'react-native-keychain';

const API_BASE_URL = 'http://127.0.0.1:8000'; // Mobil uygulama için doğrudan IP kullan

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Her istekten önce token'ı ekle
apiClient.interceptors.request.use(
  async (config) => {
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        config.headers.Authorization = `Bearer ${credentials.password}`;
      }
    } catch (error) {
      console.error("Keychain'den token alınamadı:", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
