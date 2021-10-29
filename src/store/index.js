import {  
  GoogleAuthProvider, 
  // updateProfile,
  // sendEmailVerification
} from "firebase/auth";
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
    errorText: "",
    successText: "",
    loading: false,
    showSuccess: false,
    showError: false
  },
  mutations: {
    setUser(state, payload){
      state.user = payload;
    },
    loading(state, payload){
      state.loading = payload;
    },
    toggleSuccess (state) {
      state.showSuccess = !state.showSuccess
    },
    toggleError(state) {
      state.showError = !state.showError
    },
    setSuccess(state, payload){
      state.successText = payload;
    },
    setError(state, payload){
      state.errorText = payload;
    },
  },
  actions: {
    async login({commit}, payload){
      await UserServices.login(payload).then(usercredential => {
        commit("loading", false);
        commit("setSuccess", "Login successful");
        commit("toggleSuccess");
        console.log(usercredential.user);
      }).catch(error => {
        commit("loading", false);
        commit("setError", error.code.replace("auth/",""));
        commit("toggleError");
        console.log(error.code);
      })
    },
    async signup({commit}, payload){
      await UserServices.signup(payload).then(usercredential => {
        commit("loading", false);
        commit("setSuccess", "Registration successful");
        commit("toggleSuccess")
        console.log(usercredential.user);
      }).catch(error => {
        commit("loading", false);
        commit("setError", error.code.replace("auth/",""));
        commit("toggleError");
        console.log(error.code);
      })
    },
    async googleSignin({commit}){
      await UserServices.googleSignin().then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        commit("loading", false);
        commit("setSuccess", "Registration successful");
        commit("toggleSuccess")
        console.log(user, credential);
        // ...
      }).catch((error) => {
        const errorCode = error.code.replace("auth/", "");
        const errorMessage = error.message;
        // const email = error.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
        commit("loading", false);
        commit("setError", errorCode);
        commit("toggleError");
        console.log(errorCode, errorMessage);
      });
    },
    async resetPassword({commit},email){
      await UserServices.resetPassword(email).then(() => {
        commit("loading", false);
        commit("toggleSuccess")
        commit("setSuccess", `If this user exists, a password reset link will be sent to the email ${email}`)
      }).catch(error => {
        commit("loading", false);
        commit("toggleError")
        commit("setError", error.code.replace("auth/",""));
        console.log(error);
      })
    }
  },
  getters: {
    loading(state){
      return state.loading;
    },
    errorText(state){
      return state.errorText;
    },
    successText(state){
      return state.successText
    },
    showSuccess(state){
      return state.showSuccess
    },
    showError(state){
      return state.showError
    },
  }
})
