import variables from '@/styles/variables.module.scss'

// 快捷访问
const getters = {
  token: state => state.user.token,
  /*
  * TRUE 表示用户信息存在
  * */
  hasUserInfo: state => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  // 获取用户信息
  userInfo: state => state.user.userInfo,
  cssVar: _ => variables,
  // 侧边栏开关
  sidebarOpened: state => state.app.sidebarOpened,
  language: state => state.app.language
}
export default getters
