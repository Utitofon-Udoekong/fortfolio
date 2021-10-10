<template>
    <div class="h-screen w-full flex">
        <div class="hidden md:block bg-login-texture-f bg-cover bg-center w-1/2 h-full relative">
            <div class="logo bg-white w-1/3 h-24 shadow-lg flex items-center justify-center absolute" >
                <a href="/" class="w-full">
                    <img src="@/assets/images/logo-text.png" class="w-3/5 h-auto" alt="logo" />
                </a>
            </div>
        </div>
        <div class="md:w-1/2 w-full h-full p-8 overflow-y-scroll">
            <h1 class="text-brand-lightblue text-4xl font-semibold">Welcome to Fort-Folio</h1>
            <p
                class="text-gray-600 tracking-wide pb-4"
            >Sign up For an investment by entering your information below</p>
            <form class="w-full grid grid-cols-2 auto-rows-auto gap-2">
                <div class="mb-4" v-for="(detail,i) in signupDetails" :key="i">
                    <label
                        :for="detail.id"
                        class="text-gray-700 font-semibold text-md"
                    >{{ detail.title }}</label>
                    <div
                        class="border-2 border-gray-300 focus-within:border-brand-lightblue hover:border-brand-lightblue rounded-md"
                    >
                        <input
                            class="text-md appearance-none bg-transparent border-none w-full mr-3 py-3 px-2 leading-tight focus:outline-none"
                            :type="detail.type"
                            :aria-label="detail.ariaLabel"
                            :id="detail.id"
                            :placeholder="detail.placeholder"
                        />
                    </div>
                </div>
            </form>
            <div class="mb-4">
                <input type="checkbox" id="check" class="mr-2">
                <label for="check" class="text-gray-700 text-md">I agree to the <a href="/termsAndConditions" class="text-brand-lightblue">Terms and Conditions</a></label>
            </div>
            <!-- <p class="text-md text-gray-700">
                If you do not agree to the
                <a href class="text-brand-lightblue">Terms and Conditions</a> please don't go further
            </p> -->
            <div class="w-full flex justify-center">
                <button
                    type="submit"
                    class="bg-brand-lightblue my-4 text-white text-lg font-semibold p-3 w-3/4 rounded-md"
                >Sign Up</button>
            </div>
            <p class="text-center text-gray-600 pb-10">
                Already have an account?
                <a href="/login" class="text-brand-lightblue">Login</a>
            </p>
        </div>
    </div>
</template>

<script>
const signupDetails = [
    {
        title: "First Name",
        id: "FirstName",
        type: "text",
        placeholder: "First Name",
        ariaLabel: "First Name",
    },
    {
        title: "Last Name",
        id: "LastName",
        type: "text",
        placeholder: "Last Name",
        ariaLabel: "Last Name",
    },
    {
        title: "Phone Number",
        id: "PhoneNumber",
        type: "text",
        placeholder: "Phone Number",
        ariaLabel: "Phone Number",
    },
    {
        title: "Email",
        id: "Email",
        type: "email",
        placeholder: "Email",
        ariaLabel: "Email",
    },
    {
        title: "Password",
        id: "Password",
        type: "Password",
        placeholder: "Password",
        ariaLabel: "Password",
    },
    {
        title: "Confirm Password",
        id: "Password2",
        type: "Password",
        placeholder: "Confirm Password",
        ariaLabel: "Confirm Password",
    },
    {
        title: "Bank Name",
        id: "BankName",
        type: "text",
        placeholder: "Bank Name",
        ariaLabel: "Bank Name",
    },
    {
        title: "Bank Account Name",
        id: "BankAccount",
        type: "text",
        placeholder: "Bank Account Name",
        ariaLabel: "Bank Account Name",
    },
    {
        title: "Account Number",
        id: "AccountNumber",
        type: "text",
        placeholder: "Account Number",
        ariaLabel: "Account Number",
    },
    {
        title: "Referrer code(optional)",
        id: "refCode",
        type: "text",
        placeholder: "Referrer code(optional)",
        ariaLabel: "Referrer code(optional)",
    },
]
export default {
    setup() {
        return {
            signupDetails
        }
    }
}
</script>

<style>
</style>