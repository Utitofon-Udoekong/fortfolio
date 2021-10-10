<template>
    <div
        class="bg-login-texture h-screen w-full bg-center bg-cover flex justify-center items-center bg-brand-lightblue bg-blend-overlay"
    >
        <div class="w-full flex md:flex-row flex-col justify-center items-center">
            <div class="hidden md:block bg-login-texture w-1/3 h-96 bg-center bg-cover relative">
                <div
                    class="logo bg-white w-2/5 h-24 shadow-lg -mt-3 flex items-center justify-center absolute"
                >
                    <a href="/">
                        <img src="@/assets/images/logo-text.png" class="w-4/5 h-auto" alt="logo" />
                    </a>
                </div>
            </div>
            <div class="bg-white md:w-1/3 w-11/12 p-8 shadow-xl">
                <p class="text-brand-lightblue text-3xl">Welcome to Fort-Folio</p>
                <p class="text-gray-600 pb-4">Sign In by entering your information below</p>
                <div>
                    <form class="w-full">
                        <div class="mb-4">
                            <label for="emailText" class="text-gray-700 font-semibold text-md">Email</label>
                            <div
                                class="border-2 border-gray-300 focus-within:border-brand-lightblue hover:border-brand-lightblue rounded-md"
                            >
                                <input
                                    class="text-md appearance-none bg-transparent border-none w-full mr-3 py-3 px-2 leading-tight focus:outline-none"
                                    type="text"
                                    placeholder="Enter your email"
                                    aria-label="Email"
                                    id="emailText"
                                />
                            </div>
                        </div>
                        <div class="mb-2">
                            <label
                                for="password"
                                class="text-gray-700 font-semibold text-md"
                            >Password</label>
                            <div
                                class="border-2 border-gray-300 focus-within:border-brand-lightblue hover:border-brand-lightblue rounded-md"
                            >
                                <input
                                    class="text-md appearance-none bg-transparent border-none w-full mr-3 py-3 px-2 leading-tight focus:outline-none"
                                    type="password"
                                    placeholder="Password"
                                    aria-label="password"
                                    id="password"
                                />
                            </div>
                        </div>
                        <div class="mb-8">
                            <input type="checkbox" id="check" class="mr-2" />
                            <label for="check">Remember me</label>
                        </div>
                        <button
                            type="submit"
                            class="bg-brand-lightblue text-white text-lg font-semibold p-3 w-full rounded-md"
                        >Login</button>
                        <p class="text-center text-gray-600 pt-4">
                            Don't have an account?
                            <a
                                href="/signup"
                                class="text-brand-lightblue"
                            >Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    setup() {
    }
}
</script>

<style>
</style>