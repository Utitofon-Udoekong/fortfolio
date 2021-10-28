import { createStore } from 'vuex'
import UserServices from '../services/user_services'
export default createStore({
  state: {
    user: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      bankName: "",
      bankAccountName: "",
      bankAccountNumber: "",
    },
    error: "",
    loading: false
  },
  mutations: {
    setUser(state, payload){
      state.user = payload;
    },
    loading(state, payload){
      state.loading = payload;
    },
    setError(state, payload){
      state.error = payload;
    }
  },
  actions: {
    async login({commit}, payload){
      await UserServices.login(payload).then(usercredential => {
        commit("loading", false);
        // commit("setUser", usercredential);
        console.log(usercredential.user);
      }).catch(error => {
        commit("loading", false);
        commit("setError", error.code);
        console.log(error.code);
      })
    },
    async signup({commit}, payload){
      await UserServices.signup(payload).then(usercredential => {
        commit("loading", false);
        // commit("setUser", usercredential);
        console.log(usercredential);
      }).catch(error => {
        commit("loading", false);
        commit("setError", error.code);
        console.log(error.code);
      })
    },
  },
  getters: {
    loading(state){
      return state.loading;
    },
    error(state){
      return state.error
    },
  }
})
