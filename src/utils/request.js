import axios from 'axios'
import md5 from 'md5'
import { ElMessage } from 'element-plus'
import store from '@/store'
import { isCheckTimeout } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time

    // 在这个位置需要统一的去注入token
    if (store.getters.token) {
      if (isCheckTimeout()) {
        // 退出操作
        store.dispatch('user/logout').then(r => {})
        return Promise.reject(new Error('token 失效'))
      }
      // 如果token存在 注入token
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }

    return config // 必须返回配置
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(response => {
  const { success, message, data } = response.data
  // 判断请求是否成功
  if (success) {
    // 成功返回解析后的数据
    return data
  } else {
    // 失败（请求成功，业务失败），消息提示
    ElMessage.error(message)
    return Promise.reject(new Error(message))
  }
},
// 请求失败
error => {
  // token 过期
  if (error?.response?.data?.code === 401) {
    store.dispatch('user/logout').then(r => {})
  }
  ElMessage.error(error.message)
  return Promise.reject(new Error(error))
})

/**
 * 返回 Icode 的实现
 */
function getTestICode () {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991-12-30'
  return {
    icode: md5(code),
    time: now
  }
}

export default service
