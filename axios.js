import { axios } from 'axios';

const baseURL = ''
const timeout = 10000

class HYRequest {
  constructor(baseURL, timeout=10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    // interceptors
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
  
  get(config) {
    return this.request({...config, method: 'get'})
  }

  post(config) {
    return this.request({...config, method: 'post'})
  }
  
  delete(config) {
    return this.request({...config, method: 'delete'})
  }

  patch(config) {
    return this.request({...config, method: 'patch'})
  }
}

export default new HYRequest(BASE_URL, TIMEOUT)