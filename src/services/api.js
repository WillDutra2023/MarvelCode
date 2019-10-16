import axios from 'axios';

export default (api = axios.create({
  baseURL: 'http://gateway.marvel.com/',
  timeout: 120000,
  headers: {
    'Content-Type': 'application/json',
  },
}));
