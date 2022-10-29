import { login } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant'

export default {
  namespaced: true, // 这个模块是个单独的模块，不会被合并到主模块里
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken (state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
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
          this.commit('user/setToken', data.data.data.token)
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
