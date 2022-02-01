<template>
    <div
        class="h-screen w-full bg-network-texture bg-brand-blue bg-no-repeat bg-cover bg-center bg-blend-overlay md:bg-fixed"
    >
        <header
            class="flex w-full items-center justify-center text-gray-700 py-2 px-4 z-10 shadow-xl h-1/6 bg-white"
        >
            <div class="logo sm:w-28 w-20 h-full">
                <a href="/" class="w-full h-full">
                    <img src="@/assets/images/logo.png" class="w-full h-full" alt="logo" />
                </a>
            </div>
        </header>
        <main class="flex items-center justify-center text-center h-5/6">
            <div class="container mx-auto max-w-full sm:max-w-3xl px-4 sm:px-1">
                <h1
                    class="text-white tracking-wider pb-3 font-extrabold text-xl sm:text-4xl"
                >The global economy was shaken in the last 2 years but High net worth individuals (HNIs) increased their net worth by over 10%</h1>
                <p
                    class="text-white text-md py-3"
                >Master the art of investing and growing wealth like HNIs in startups, crypto, stock market, forex, real estate with little capital for free in less than a month.</p>
                <p
                    class="text-white text-md py-3"
                >Gain access to leading investment experts by signing up to $200 worth of training with our industry experts for FREE today. </p>
                <p
                    class="text-white text-md py-3"
                >Limited slots available, offer last till February 28th.</p>
                <button
                    class="border-2 rounded-md ease-linear transition-all duration-150 border-solid border-white bg-transparent text-white hover:bg-white hover:text-black font-semibold p-2 sm:p-3 sm:w-40"
                >
                    <a href="#signupform">SIGN UP NOW</a>
                </button>
            </div>
        </main>
    </div>
    <div class="container py-4 introbanner mx-auto">
        <div
            class="column flex w-full p-3 items-center shadow-lg rounded-md hover:shadow-2xl"
            v-for="(intro, i) in intros"
            :key="i"
        >
            <div class="w-auto h-auto">
                <img
                    class="w-full"
                    :src="require(`@/assets/images/consultation/${intro.image}`)"
                    :alt="intro.alt"
                />
            </div>
            <div class="text block p-2">
                <h1 class="text-blue-500 font-semibold text-xl uppercase">{{ intro.title }}</h1>
                <p class="text-sm">{{ intro.text }}</p>
            </div>
        </div>
    </div>
    <div>
        <div
            class="titlebar h-32 bg-brand-lightblue px-6 sm:px-28 justify-center flex items-center"
        >
            <h1 class="text-4xl md:text-5xl text-white inline-block font-extrabold">ABOUT FORTFOLIO</h1>
        </div>
        <div class="container p-3 sm:p-8 md:flex justify-center items-center">
            <div class="p-3 sm:p-8 sm:max-w-md w-full">
                <p class="text-base font-medium text-gray-800">At Fortfolio Limited, we pride ourselves in offering our clients responsive, competent and excellent services. Our clients are the most important part of our business, and we work tirelessly to ensure your complete satisfaction.</p>
            </div>
            <div class="shadow-2xl p-3 mt-3 sm:mt-0 sm:p-10 sm:max-w-xl w-full">
                <p
                    class="pb-3 text-brand-lightblue text-xl sm:text-3xl font-bold"
                >Sign up to request to speak with our consultant</p>
                <div class="fortform" id="signupform"></div>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted } from "@vue/runtime-core"
const intros = [
    {
        image: "solution.png",
        title: "Sustainable Solutions",
        text: " We have a track record of going the extra mile to ensure our client’s welfare",
        alt: "Sustainable Solutions"
    },
    {
        image: "brainstorm.png",
        title: "PROFESSIONAL TEAM",
        text: "We have certified and dedicated experts in each industry willing to provide a valuable and free consultation.",
        alt: "PROFESSIONAL TEAM"
    },
    {
        image: "mindset.png",
        title: "Growth Mindset",
        text: " Growth is an integral part of our values.",
        alt: "DIVERSE APPROACH"
    },
    {
        image: "report.png",
        title: "Progress Report",
        text: "Regular and detailed update on your growth is an essential component of our service.",
        alt: "PROGRESS REPORT"
    },
]
export default {
    setup() {
        onMounted(() => {
            const fortform = document.querySelector(".fortform");
            const formscript = document.createElement("script")
            formscript.setAttribute("src", "https://motivated-hustler-6203.ck.page/93a73bf28a/index.js")
            formscript.setAttribute("data-uid", "93a73bf28a")
            fortform.appendChild(formscript)
        })
        return {
            intros
        }
    }
}

</script>

<style scoped lang="scss">
.introbanner {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-column-gap: 1.5rem;
    grid-row-gap: 2rem;
}
.fortform {
    display: flex;
    justify-content: center;
    form {
        max-width: 100% !important;
    }
}
.bg-brand-blue {
    --tw-bg-opacity: 1;
    background-color: rgba(1, 44, 73,var(--tw-bg-opacity));
}

</style>