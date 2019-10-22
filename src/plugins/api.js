import axios from 'axios'

axios.defaults.headers.common['Content-Type'] = 'application/json';

import { HOSTNAME } from '../config.js';
const URL = '/api/v2/';

function url(method) {
  return HOSTNAME + URL + method
}

export default {
  async get(entity, params) {
    return await axios.get(url(entity), params)
  }
}
