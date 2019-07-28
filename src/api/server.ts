import axios from 'axios'
import Toast from 'components/toast'

axios.defaults.timeout = 10000
axios.defaults.withCredentials = true

let ToastLoding: Function = () => {}
axios.interceptors.request.use(
  config => {
    config.headers['Content-type'] = 'application/x-www-form-urlencoded'
    ToastLoding = Toast.loading('加载中...', 0, () => {})
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    ToastLoding()
    return response
  },
  error => {
    ToastLoding()
    return Promise.reject(error)
  }
)

export default axios
