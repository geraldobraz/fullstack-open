import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.weatherstack.com'
});

export default api;