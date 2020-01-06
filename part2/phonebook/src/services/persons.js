import axios from 'axios'

const API_URL = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(API_URL).then(response => response.data)
}

const create = newObject => {
  return axios.post(API_URL, newObject).then(response => response.data)
}

const update = (id, newObject) => {
  return axios.put(`${API_URL}/${id}`, newObject).then(response => response.data)
}

const remove = (id) => {
  return axios.delete(`${API_URL}/${id}`)
}

export default { 
  getAll, 
  create, 
  update,
  remove
}