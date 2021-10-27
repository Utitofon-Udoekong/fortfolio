import { createStore } from 'vuex'
import UserServices from '../services/user_services'
export default createStore({
  state: {
    user: {
      email: "",
      uid: ""
    },
    loading: false
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    },
    loading(state, payload){
      state.loading = payload
    }
  },
  actions: {
    login({commit}, payload){
      UserServices.login(payload).then(response => {
        commit("loading", false);
        // commit("setUser", user);
        console.log(response);
      }).catch(error => {
        commit("loading", false);
        console.log(error);
      })
    },
    signup({commit}, payload){
      UserServices.signup(payload).then(response => {
        commit("loading", false);
        commit("setUser", response);
        console.log(response);
      })
    },
  },
  getters: {
    loading(state){
      return state.loading;
    }
  }
})
