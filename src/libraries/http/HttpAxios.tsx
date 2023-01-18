import axios from 'axios'
import {ApiDataBaseUrl} from './HttpUrls'

export const HttpAxios = axios.create({
  // baseURL: `http://34.224.165.136:8001/api/v1/`,
  baseURL: ApiDataBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})
