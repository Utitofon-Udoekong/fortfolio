<template>
    <div
        v-if="showAlert"
        class="fixed p-4 bg-red-600 text-white inset-x-2 md:inset-x-20 transition-all duration-500 top-9 alert flex justify-between items-center"
    >
        <p>{{error}}</p>
        <p class="text-2xl cursor-pointer" @click="toggleAlert">&xotime;</p>
    </div>
    <div
        class="bg-login-texture h-screen w-full bg-center bg-cover flex justify-center items-center bg-brand-lightblue bg-blend-overlay"
    >
            <div class="bg-white w-full p-8 shadow-xl">
                <p class="text-brand-lightblue text-3xl">Welcome to Fortfolio</p>
                <p class="text-gray-600 pb-4">Sign In by entering your information below</p>
                <div>
                    <form class="w-full" @submit.prevent="submitForm">
                        <div class="mb-4">
                            <label for="emailText" class="text-gray-700 font-semibold text-md">Email</label>
                            <div
                                class="border-2 focus-within:border-brand-lightblue hover:border-brand-lightblue rounded-md"
                            >
                                <input
                                    class="text-md border-gray-300 appearance-none bg-transparent border-none w-full mr-3 py-3 px-2 leading-tight focus:outline-none"
                                    type="text"
                                    placeholder="Enter your email"
                                    aria-label="Email"
                                    id="emailText"
                                    v-model="user.email"
                                />
                            </div>
                            <small
                                v-if="v$.email.$error"
                                class="text-red-600"
                            >{{ v$.email.$errors[0].$message }}</small>
                        </div>
                        <div class="mb-2">
                            <label
                                for="password"
                                class="text-gray-700 font-semibold text-md"
                            >Password</label>
                            <div
                                class="relative border-2 border-gray-300 focus-within:border-brand-lightblue hover:border-brand-lightblue rounded-md"
                            >
                                <input
                                    class="text-md appearance-none bg-transparent border-none w-full mr-3 py-3 px-2 leading-tight focus:outline-none"
                                    :type="showPassword ? 'text' : 'password'"
                                    placeholder="Password"
                                    aria-label="password"
                                    id="password"
                                    v-model="user.password"
                                />
                                <div>
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="25"
                                        height="25"
                                        fill="#333"
                                        class="inline-block absolute right-2 top-2 cursor-pointer"
                                        @click="showPassword = !showPassword"
                                    >
                                        <path :d="showPassword ? mdiEye : mdiEyeOff" />
                                    </svg>
                                </div>
                            </div>
                            <small
                                v-if="v$.password.$error"
                                class="text-red-600"
                            >{{ v$.password.$errors[0].$message }}</small>
                        </div>
                        <div class="mb-8">
                            <input type="checkbox" id="check" class="mr-2" />
                            <label for="check">Remember me</label>
                        </div>
                        <p class="text-center text-gray-600 py-2 underline">
                            <a
                                href="/signup"
                            >Forgot password?</a>
                        </p>
                        <button
                            @click.prevent="submitForm"
                            type="submit"
                            class="bg-brand-lightblue text-white text-lg font-semibold p-3 w-full rounded-md"
                        >Login</button>
                        <p class="text-center text-gray-600 pt-4">
                            Don't have an account?
                            <a
                                href="/signup"
                                class="text-brand-lightblue"
                            >Sign up</a> or go
                            <a href="/" class="text-brand-lightblue">Home</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    <div
        v-if="loading"
        class="flex items-center justify-center fixed h-screen w-full inset-0 transition-opacity ease-linear duration-200 bg-black bg-opacity-75"
    >
        <div class="w-20 h-20 border-b-4 border-brand-lightblue rounded-full animate-spin"></div>
    </div>
</template>

<script>
import { computed, reactive, ref } from '@vue/reactivity'
import useVuelidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import { mdiEye, mdiEyeOff } from '@mdi/js';
import { useStore } from 'vuex';
import { watchEffect } from '@vue/runtime-core'
export default {
    components: {
    },
    setup() {
        const user = reactive({
            email: "",
            password: ""
        })
        const alpha = helpers.regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
        const incorrectPasswordMessage = "Password must be atleast 8 characters, contain a number, a special character, and an uppercase letter."
        const rules = computed(() => {
            return {
                email: { required, email },
                password: { required, alpha: helpers.withMessage(incorrectPasswordMessage, alpha) }
            }
        })

        const showPassword = ref(false)

        const v$ = useVuelidate(rules, user)

        const store = useStore();
        const login = () => {
            store.commit("loading", true);
            store.dispatch("login", user).then(() => {
                toggleAlert();
            })
        }
        const showAlert = ref(false);
        const toggleAlert = () => {
            showAlert.value = !showAlert.value
        }
        const error = computed(() => {
            switch (store.getters.error) {
                case "auth/network-request-failed":
                    return "A network error occured. Check your connection and try again."
                case "auth/user-not-found":
                    return "This user does not exist. Try signing up."
                case "auth/email-already-in-use":
                    return "This email has already been used."
                default:
                    return "An error occured. Please contact support to find help."
            }
        })
        watchEffect(() => {
            if (showAlert.value === true) {
                setTimeout(() => {
                    showAlert.value = false
                }, 3000)
            }
        })

        return { user, v$, mdiEye, mdiEyeOff, showPassword, login, loading: computed(() => store.getters.loading), showAlert, toggleAlert, error}
    },
    methods: {
        async submitForm() {
            await this.v$.$validate()
            if (!this.v$.$error) {
                this.login();
            }
            else console.log("error")
        }
    }
}
</script>

<style>
button {
    background: #00af9c;
}
</style>