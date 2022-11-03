// 快捷访问
const getters = {
  token: state => state.user.token,
  /*
  * TRUE 表示用户信息存在
  * */
  hasUserInfo: state => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  }
}
export default getters
