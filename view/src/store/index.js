import { createStore } from 'vuex'

const store = createStore({
  state: {
    cname: 'user',
    queryFn: () => {}
  },
  mutations: {
    changeCname(state, name) {
      state.cname = name
    },
    changeQueryFn(state, fn) {
      state.queryFn = fn
    }
  },
  actions: {

  }
})

export default store