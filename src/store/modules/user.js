import { login } from '@/api/sys'
import md5 from 'md5'

export default {
  namespaced: true, // 这个模块是个单独的模块，不会被合并到主模块里
  state: () => ({}),
  mutations: {},
  actions: {
    /*
    * 登录请求
    * */
    login (context, userInfo) {
      const { username, password } = userInfo
      console.log('username, password', username, password)
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        }).then(data => {
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
