<template>
<div class="flex items-center justify-center h-screen">
        <div class="text-center text-black max-w-full px-2 sm:px-0 sm:max-w-3xl">
            <h1
                class="text-2xl sm:text-5xl font-bold pb-3"
            >Oops, sorry this feature is not yet available on the website.</h1>
            <p class="text-lg pb-10">
                Contact
                <a href="tel:+234 807 073 8825" class="text-brand-blue">+234 807 073 8825</a> to process your request.
            </p>
            <button class="text-white p-4 rounded-md">
                <a href="https://wa.link/rpdo9m" target="_blank">Chat us on WhatsApp</a>
            </button>
            <p class="pt-10 flex justify-center items-center">
                <Icon icon="cil:arrow-left" class="pr-2" width="25" />Go back
                <a href="/" class="text-brand-blue pl-2">home</a>
            </p>
        </div>
    </div>
    <!-- <div class="h-screen w-full flex">
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
            <form @submit.prevent="submitForm" class="w-full grid grid-cols-1 sm:grid-cols-2 auto-rows-auto gap-2">
                <div class="mb-4">
                    <label for="first" class="text-gray-700 font-semibold text-md">First Name</label>
                    <div
                        class="border-2 focus-within:border-brand-lightblue hover:border-brand-lightblue rounded-md"
                    >
                        <input
                            class="text-md border-gray-300 appearance-none bg-transparent border-none w-full mr-3 py-3 px-2 leading-tight focus:outline-none"
                            type="text"
                            id="first"
                            v-model="state.name.firstName"
                        />
                    </div>
                    <small v-if="v$.name.firstName.$error" class="text-red-600">{{v$.name.firstName.$errors[0].$message}}</small>
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
                            v-model="state.name.lastName"
                        />
                    </div>
                    <small v-if="v$.name.lastName.$error" class="text-red-600">{{v$.name.lastName.$errors[0].$message}}</small>
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
                            v-model="state.phone"
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
                            v-model="state.email"
                        />
                    </div>
                    <small v-if="v$.email.$error" class="text-red-600">{{v$.email.$errors[0].$message}}</small>
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
                            v-model="state.password.password"
                        />
                        <div> <svg viewBox="0 0 24 24" width="25" height="25" fill="#333" class="inline-block absolute right-2 top-2 cursor-pointer" @click="showPassword = !showPassword" > <path :d="showPassword ? mdiEye : mdiEyeOff" /> </svg> </div>
                    </div>
                    <small v-if="v$.password.password.$error" class="text-red-600">{{v$.password.password.$errors[0].$message}}</small>
                </div>
                <div class="mb-4">
                    <label
                        for="confirm"
                        class="text-gray-700 font-semibold text-md"
                    >Confirm Password</label>
                    <div class=" relative border-2 focus-within:border-brand-lightblue hover:border-brand-lightblue rounded-md" > <input class="text-md border-gray-300 appearance-none bg-transparent border-none w-full mr-3 py-3 px-2 leading-tight focus:outline-none" :type="showPassword ? 'text' : 'password'" id="confirm" v-model="state.password.confirm" /> <div> <svg viewBox="0 0 24 24" width="25" height="25" fill="#333" class="inline-block absolute right-2 top-2 cursor-pointer" @click="showPassword = !showPassword" > <path :d="showPassword ? mdiEye : mdiEyeOff" /> </svg> </div> </div>
                    <small v-if="v$.password.confirm.$error" class="text-red-600">{{v$.password.confirm.$errors[0].$message}}</small>
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
                            v-model="state.refCode"
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
    </div> -->
</template>

<script>
import { Icon } from '@iconify/vue';
// import { computed, reactive, ref } from '@vue/reactivity'
// import useVuelidate from '@vuelidate/core'
// import { required, email, helpers, sameAs } from '@vuelidate/validators'
// import { mdiEye, mdiEyeOff } from '@mdi/js';

export default {
    components: {
        Icon,
    },
    // setup() {
    //     const state = reactive({
    //         name: {
    //             firstName: "",
    //             lastName: ""
    //         },
    //         phone: "",
    //         email: "",
    //         password: {
    //             password: "",
    //             confirm: ""
    //         },
    //         bankName: "",
    //         bankAccountName: "",
    //         bankAccountNumber: "",
    //         refCode: ""
    //     })
    //     const rules = computed(() => {
    //         return {
    //             name: {
    //                 firstName: { required },
    //                 lastName: { required }
    //             },
    //             phone: { required },
    //             email: { required, email },
    //             password: {
    //                 password: { required, alpha: helpers.withMessage(incorrectPasswordMessage, alpha) },
    //                 confirm: { required, sameAs: sameAs(state.password.password) }
    //             },
    //             bankName: { required },
    //             bankAccountName: { required },
    //             bankAccountNumber: { required },
    //             refCode: ""
    //         }
    //     })
        
    //     const alpha = helpers.regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)
    //     const incorrectPasswordMessage = "Password must be atleast 8 characters, contain a number, a special character, and an uppercase letter."
    //     const showPassword = ref(false)

    //     const v$ = useVuelidate(rules, state)
    //     return {
    //         state, v$, mdiEye, mdiEyeOff, showPassword
    //     }
    // },
    // methods: {
    //     submitForm() {
    //         this.v$.$validate()
    //         if (!this.v$.$error) this.$router.push("/constructionpage")
    //         else console.log("error")
    //     }
    // }
}
</script>

<style>
button {
    background: #00af9c;
}
</style>