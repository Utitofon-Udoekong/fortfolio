<template>
    <SuccessAlert/>
    <ErrorAlert/>
    <div class="h-screen w-full flex">
        <div class="hidden md:block bg-login-texture-f bg-cover bg-center w-1/2 h-full relative">
            <div
                class="logo bg-white w-1/3 h-24 shadow-lg flex items-center justify-center absolute"
            >
                <a href="/" class="w-full">
                    <img src="@/assets/images/logo-text.png" class="w-3/5 h-auto" alt="logo" />
                </a>
            </div>
        </div>
        <div class="md:w-1/2 w-full h-full p-6 sm:p-8 overflow-y-scroll">
            <h1 class="text-brand-lightblue text-4xl font-semibold">Welcome to Fortfolio</h1>
            <p
                class="text-gray-600 tracking-wide pb-4"
            >Sign up For an investment account by entering your information below</p>
            <form
                @submit.prevent="submitForm"
                class="w-full grid grid-cols-1 sm:grid-cols-2 auto-rows-auto gap-2"
            >
                <div class="mb-4">
                    <label for="first" class="text-gray-700 font-semibold text-md">First Name</label>
                    <div
                        class="border-2 focus-within:border-brand-lightblue hover:border-brand-lightblue rounded-md"
                    >
                        <input
                            class="text-md border-gray-300 appearance-none bg-transparent border-none w-full mr-3 py-3 px-2 leading-tight focus:outline-none"
                            type="text"
                            id="first"
                            v-model="user.firstName"
                        />
                    </div>
                    <small v-if="v$.firstName.$error" class="text-red-600">{{v$.firstName.$errors[0].$message}}</small>
                </div>
                <div class="mb-4">
                    <label for="last" class="text-gray-700 font-semibold text-md">Last Name</label>
                    <div
                        class="border-2 focus-within:border-brand-lightblue hover:border-brand-lightblue rounded-md"
                    >
                        <input
                            class="text-md border-gray-300 appearance-none bg-transparent border-none w-full mr-3 py-3 px-2 leading-tight focus:outline-none"
                            type="text"
                            id="last"
                            v-model="user.lastName"
                        />
                    </div>
                    <small v-if="v$.lastName.$error" class="text-red-600">{{v$.lastName.$errors[0].$message}}</small>
                </div>
                <div class="mb-4">
                    <label for="phone" class="text-gray-700 font-semibold text-md">Phone Number</label>
                    <div
                        class="border-2 focus-within:border-brand-lightblue hover:border-brand-lightblue rounded-md"
                    >
                        <input
                            class="text-md border-gray-300 appearance-none bg-transparent border-none w-full mr-3 py-3 px-2 leading-tight focus:outline-none"
                            type="text"
                            id="phone"
                            v-model="user.phone"
                        />
                    </div>
                    <small v-if="v$.phone.$error" class="text-red-600">{{v$.phone.$errors[0].$message}}</small>
                </div>
                <div class="mb-4">
                    <label for="email" class="text-gray-700 font-semibold text-md">Email Address</label>
                    <div
                        class="border-2 focus-within:border-brand-lightblue hover:border-brand-lightblue rounded-md"
                    >
                        <input
                            class="text-md border-gray-300 appearance-none bg-transparent border-none w-full mr-3 py-3 px-2 leading-tight focus:outline-none"
                            type="text"
                            id="email"
                            v-model="user.email"
                        />
                    </div>
                    <small
                        v-if="v$.email.$error"
                        class="text-red-600"
                    >{{ v$.email.$errors[0].$message }}</small>
                </div>
                <div class="mb-4">
                    <label for="password" class="text-gray-700 font-semibold text-md">Password</label>
                    <div
                        class="relative border-2 focus-within:border-brand-lightblue hover:border-brand-lightblue rounded-md"
                    >
                        <input
                            class="text-md border-gray-300 appearance-none bg-transparent border-none w-full mr-3 py-3 px-2 leading-tight focus:outline-none"
                            :type="showPassword ? 'text' : 'password'"
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
                <div class="mb-4">
                    <label
                        for="confirm"
                        class="text-gray-700 font-semibold text-md"
                    >Confirm Password</label>
                    <div class=" relative border-2 focus-within:border-brand-lightblue hover:border-brand-lightblue rounded-md" > <input class="text-md border-gray-300 appearance-none bg-transparent border-none w-full mr-3 py-3 px-2 leading-tight focus:outline-none" :type="showPassword ? 'text' : 'password'" id="confirm" v-model="user.confirm" /> <div> <svg viewBox="0 0 24 24" width="25" height="25" fill="#333" class="inline-block absolute right-2 top-2 cursor-pointer" @click="showPassword = !showPassword" > <path :d="showPassword ? mdiEye : mdiEyeOff" /> </svg> </div> </div>
                    <small v-if="v$.confirm.$error" class="text-red-600">{{v$.confirm.$errors[0].$message}}</small>
                </div>
                <div class="mb-4">
                    <label for="refCode" class="text-gray-700 font-semibold text-md">Referral Code(optional)</label>
                    <div
                        class="border-2 focus-within:border-brand-lightblue hover:border-brand-lightblue rounded-md"
                    >
                        <input
                            class="text-md border-gray-300 appearance-none bg-transparent border-none w-full mr-3 py-3 px-2 leading-tight focus:outline-none"
                            type="text"
                            id="refCode"
                            v-model="user.refCode"
                        />
                    </div>
                </div>
            </form>
            <div class="mb-4">
                <input type="checkbox" id="check" class="mr-2" />
                <label for="check" class="text-gray-700 text-md">
                    I agree to the
                    <a
                        href="/termsAndConditions"
                        class="text-brand-lightblue"
                    >Terms and Conditions</a>
                </label>
            </div>
            <div class="w-full flex justify-center">
                <button
                    @click.prevent="submitForm"
                    type="submit"
                    class="bg-brand-lightblue my-4 text-white text-lg font-semibold p-3 w-3/4 rounded-md"
                >Sign Up</button>
            </div>
           
            <p class="text-center text-gray-600 pb-10">
                Already have an account?
                <a href="/login" class="text-brand-lightblue">Login</a> or go
                <a href="/" class="text-brand-lightblue">Home</a>
            </p>
        </div>
        <Loading/>
    </div>
</template>

<script>
import { computed, reactive, ref } from '@vue/reactivity'
import useVuelidate from '@vuelidate/core'
import { required, email, helpers, sameAs } from '@vuelidate/validators'
import { mdiEye, mdiEyeOff } from '@mdi/js';
import { useStore } from 'vuex';
import SuccessAlert from '../../components/alerts/SuccessAlert.vue';
import ErrorAlert from '../../components/alerts/ErrorAlert.vue';
import Loading from '../../components/alerts/Loading.vue';

export default {
    components: {
        SuccessAlert,
        ErrorAlert,
        Loading
    },
    setup() {
        const user = reactive({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
            confirm: "",
            bankName: "",
            bankAccountName: "",
            bankAccountNumber: "",
            // refCode: ""
        })
        const rules = computed(() => {
            return {
                firstName: { required },
                lastName: { required },
                phone: { required },
                email: { required, email },
                password: { required, alpha: helpers.withMessage(incorrectPasswordMessage, alpha) },
                confirm: { required, sameAs: sameAs(user.password) },
            }
        })

        const alpha = helpers.regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)
        const incorrectPasswordMessage = "Password must be atleast 8 characters, contain a number, a special character, and an uppercase letter."
        const showPassword = ref(false)

        const v$ = useVuelidate(rules, user)

        const store = useStore();
        const signup = () => {
            store.commit("loading", true)
            store.dispatch("signup", user)
        }
        
        return {
            user, v$, mdiEye, mdiEyeOff, showPassword, signup
        }
    },
    methods: {
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error) {
                this.signup()
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