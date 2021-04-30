import axios from 'axios';
const baseURL = 'http://localhost:3001';


const create = ({ newContact, url}) => {
  return axios.post(`${baseURL}/${url}`, newContact);
};

const getAll = () => {
  return axios.get('/persons');
};

export default {
  create,
  getAll,
};