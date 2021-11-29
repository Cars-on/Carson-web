import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://carson-app.herokuapp.com',
});
