import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    userInfo:{
      isLogin: false,
      name: '',
      cate: ''
    },
  },
  mutations: {
    setUserInfo(state, val) {
      state.userInfo = Object.assign(state.userInfo, val)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
