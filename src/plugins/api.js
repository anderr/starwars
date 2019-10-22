import axios from 'axios'

axios.defaults.headers.common['Content-Type'] = 'application/json';

import { HOSTNAME } from '../config.js';
const URL = '/api/';

function url(method) {
  return HOSTNAME + URL + method
}

export default {
  async get(entity, params) {
    const { data } = await axios.get(url(entity), params);

    return data;
  },

  async getSimple(url) {
    return await axios.get(url);
  }
}
