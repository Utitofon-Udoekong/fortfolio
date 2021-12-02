<template>
    <div
        class="h-screen w-full bg-network-texture bg-brand-blue bg-no-repeat bg-cover bg-center bg-blend-overlay md:bg-fixed"
    >
        <header
            class="flex w-full items-center justify-between md:justify-around text-gray-700 py-2 px-4 z-10 shadow-xl h-1/6 bg-white"
        >
            <div class="logo sm:w-28 w-16 h-full">
                <a href="/" class="w-full h-full">
                    <img src="@/assets/images/logo.png" class="w-full h-full" alt="logo" />
                </a>
            </div>
        </header>
        <main class="flex items-center justify-center text-center h-5/6">
            <div class="container mx-auto max-w-full sm:max-w-3xl px-4 sm:px-1">
                <h1
                    class="text-white tracking-wider pb-3 font-extrabold text-2xl sm:text-4xl"
                >Are you looking for an investment and asset management professional to guide you through how to manage your funds?</h1>
                <p
                    class="text-white text-lg py-5"
                >Signup to schedule a free consultation with our industry experts – ranging from real estate, private equity, venture capital, cryptocurrency and investment banking.</p>
                <button
                    class="border-2 rounded-md ease-linear transition-all duration-150 border-solid border-white bg-transparent text-white hover:bg-white hover:text-black font-semibold p-3 sm:w-40"
                >
                    <a href="/signup">SIGN UP NOW</a>
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
            <div class="w-32 h-auto">
                <img
                    class="w-full"
                    :src="require(`@/assets/images/intro/${intro.image}`)"
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
        <div class="container p-8 md:flex justify-center items-center">
            <div class="p-6 sm:p-8 sm:max-w-md w-full">
                <p class="text-base font-medium text-gray-800">At Fortfolio Limited, we pride ourselves in offering our clients responsive, competent and excellent services. Our clients are the most important part of our business, and we work tirelessly to ensure your complete satisfaction.</p>
            </div>
            <div class="shadow-2xl p-6 sm:p-10 sm:max-w-xl w-full">
                <p
                    class="pb-3 text-brand-lightblue text-3xl font-bold"
                >Sign up to request to speak with our consultant</p>
                <div class="fortform"></div>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted } from "@vue/runtime-core"
const intros = [
    {
        image: "jigsaw.png",
        title: "Sustainable Solutions",
        text: " We have a track record of going the extra mile to ensure our client’s welfare",
        alt: "Sustainable Solutions"
    },
    {
        image: "flag.png",
        title: "PROFESSIONAL TEAM",
        text: "We have certified and dedicated experts in each industry willing to provide a valuable and free consultation.",
        alt: "PROFESSIONAL TEAM"
    },
    {
        image: "stacks.png",
        title: "Growth Mindset",
        text: " Growth is an integral part of our values.",
        alt: "DIVERSE APPROACH"
    },
    {
        image: "clipboard.png",
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