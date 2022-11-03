import { getUserInfo, login } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant'

export default {
  namespaced: true, // 这个模块是个单独的模块，不会被合并到主模块里
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken (state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    /*
    * 登录请求
    * */
    login (context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        }).then(data => {
          console.log('登录请求', data?.token)
          this.commit('user/setToken', data?.token)
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    /**
     * 获取用户信息
     */
    async getUserInfo (context) {
      const res = await getUserInfo()
      console.log(res)
      this.commit('user/setUserInfo', res)
      return res
    }
  }
}
