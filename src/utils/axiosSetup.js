import axios from 'axios';

const makeRequest = (url, options = { method: 'GET' }) => {
  return axios({
    baseURL: 'https://store-appl.herokuapp.com/api/v1',
    url,
    method: options.method,
    data: options.body,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  }).then(response => response.data);
};

export default makeRequest;
