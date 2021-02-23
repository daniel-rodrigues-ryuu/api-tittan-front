import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost/trabalhofinal/attackontitans"
});

export default api;
