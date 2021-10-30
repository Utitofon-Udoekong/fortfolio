import {  
  GoogleAuthProvider, 
} from "firebase/auth";
import router from "../router";
import { createStore } from 'vuex'
import UserServices from '../services/user_services'
export default createStore({
  state: {
    user: {
      firstName: "firstname",
      lastName: "lastname",
      phone: "+123456789",
      email: "user@mail.com",
      bankName: "Bank Name",
      bankAccountName: "Account Name",
      bankAccountNumber: "Account Number",
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
      await UserServices.login(payload).then(async usercredential => {
        commit("loading", false);
        commit("setSuccess", "Login successful");
        commit("toggleSuccess");
        await UserServices.getUserDetails(usercredential.user.uid).then(docSnap => {
          console.log(docSnap.data())
          const user = docSnap.data();
          commit("setUser", user);
          router.push({name: "dashboard-user-account", params: {user: user.email}})
        }).catch(err => {
          console.error(err)
        })
      }).catch(error => {
        commit("loading", false);
        commit("setError", error.code.replace("auth/", ""));
        commit("toggleError");
      })
    },
    async signup({commit}, payload){
      const auth = {email: payload.email, password: payload.password}
      await UserServices.signup(auth).then(async usercredential=> {
        commit("loading", false);
        commit("setSuccess", "Registration successful, A verification link has been sent to your email address");
        commit("toggleSuccess");
        await UserServices.verifyEmail().then(async () => {
          delete payload.confirm;
          await UserServices.addUserDetails(payload, usercredential.user.uid).then(() => {
            commit("setUser", payload)
            router.push("/login")
          }).catch((error) => {
            console.log(error)
          })
        }).catch((error) => {
          console.log(error)
        })
      }).catch(error => {
        commit("loading", false);
        commit("setError", error.code.replace("auth/",""));
        commit("toggleError");
        router.push("/login")
      })
    },
    async googleSignin({commit}){
      await UserServices.googleSignin().then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        commit("loading", false);
        commit("setSuccess", "Login successful");
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
    },
    async updateProfile({commit}, payload){
      await UserServices.updateDetails(payload).then(() => {
        commit("loading", false);
        commit("toggleSuccess");
        commit("setSuccess", `Profile updated successfully`)
      }).catch(error => {
        commit("loading", false);
        commit("toggleError")
        commit("setError", error.code.replace("auth/",""));
        console.log(error);
      })
    }
  },
  getters: {
    user(state){
      return state.user;
    },
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
