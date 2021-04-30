import axios from 'axios';
const baseURL = 'http://localhost:3001';

const create = (newContact) => {
  return axios.post(`${baseURL}/persons`, newContact);
};

const getAll = () => {
  return axios.get(`${baseURL}/persons`);
};

const deleteById = (id) => {
  console.log(id);
  return axios.delete(`${baseURL}/persons/${id}`);
};

export default {
  create,
  getAll,
  deleteById,
};