import { useRouter } from 'vue-router'
import { createStore } from 'vuex'
import UserServices from '../services/user_services'
const route = useRouter()
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
        const {email, uid} = response;
        const user = {
          email,
          uid
        }
        commit("setUser", user);
        route.push({name: "dashboard-user-account"})
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
