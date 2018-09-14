import Http from 'axios'
import qs from 'qs'

Http.defaults.baseURL = '/'
Http.defaults.timeout = 60000
Http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求类
class ApiService {
  constructor () {
    this.interceptorsOfReq()
    this.interceptorsOfRes()
  }

  get (url, params) {
    if (params) {
      return Http.get(url, { params }).then(res => res.data)
    }
    return Http.get(url).then(res => res.data)
  }

  post (url, para = {}) {
    return Http.post(url, qs.stringify(para, { encode: false })).then(res => res.data)
  }

  doPost (url, para = {}) {
    return Http.post(url, para).then(res => res.data)
  }

  interceptorsOfReq () {
    return Http.interceptors.request.use(
      config => {
        return config
      },
      err => {
        return Promise.reject(err)
      })
  }

  interceptorsOfRes () {
    Http.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      return Promise.reject(error)
    })
  }
}


// 导出一个对象
export default new ApiService()
