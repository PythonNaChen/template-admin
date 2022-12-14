import { createStore } from 'vuex'
import user from './modules/user.js'
import app from './modules/app.js'
import getters from './getters'

export default createStore({
  state: {
  },
  mutations: {},
  actions: {},
  modules: {
    user,
    app
  },
  getters
})
