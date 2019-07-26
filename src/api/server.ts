import axios from 'axios'

axios.defaults.timeout = 10000
axios.defaults.withCredentials = true

axios.interceptors.request.use(
  config => {
    config.headers['Content-type'] = 'application/x-www-form-urlencoded'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default axios
