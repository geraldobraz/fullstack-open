import axios from 'axios';
const baseURL = '/api';

const create = (newContact) => {
  return axios.post(`${baseURL}/persons`, newContact);
};

const getAll = () => {
  return axios.get(`${baseURL}/persons`);
};

const deleteById = (id) => {
  return axios.delete(`${baseURL}/persons/${id}`);
};

const updateUserById = (id, user) => {
  return axios.put(`${baseURL}/persons/${id}`, user);
};

export default {
  create,
  getAll,
  deleteById,
  updateUserById,
};