<template>
    <div class="my-24 p-8">
        <p class="text-center text-brand-blue text-lg">WHY CHOOSE US</p>
        <h1
            class="text-brand-lightblue text-4xl text-center font-extrabold pb-8"
        >SMART INVESTING WITH SMART IDEAS</h1>
        <div class="hidden md:flex justify-center items-start">
            <div v-for="(choice, i) in choices" :key="i" class="text-center w-60">
                <div class="image mx-auto flex items-center justify-center bg-brand-blue w-24 h-24 rounded-full">
                    <img class="w-2/4 h-2/4 object-center" :src="require(`@/assets/images/chooseus/${choice.image}`)" :alt="choice.alt">
                </div>
                <h2 class="font-semibold text-3xl text-brand-blue py-3">{{ choice.title }}</h2>
                <p>{{ choice.text }}</p>
            </div>
        </div>
        <!-- <swiper :slides-per-view="1" :space-between="10" class="md:hidden block">
            <swiper-slide v-for="(choice, i) in choices" :key="i" class="text-center w-60 max-w-xs p-2 border-l-2 border-brand-blue">
                <div class="image mx-auto flex items-center justify-center bg-brand-blue w-16 h-16 md:w-24 md:h-24 rounded-full">
                    <img class="w-2/4 h-2/4 object-center" :src="require(`@/assets/images/chooseus/${choice.image}`)" :alt="choice.alt">
                </div>
                <h2 class="font-semibold text-2xl text-brand-blue py-3">{{ choice.title }}</h2>
                <p class="text-sm">{{ choice.text }}</p>
            </swiper-slide>
        </swiper> -->
    </div>
</template>

<script>
const choices = [
    {
        image: "door.svg",
        alt: "access",
        title: "ACCESS",
        text: "Access to the world's largest financial market providing an inexhaustible supply of Financial benefits"
    },
    {
        image: "security.svg",
        title: "SECURITY",
        alt: "security",
        text: "All trades in the investments market are secured with stop levels technology. Stop loss and take profit."
    },
    {
        image: "money.svg",
        title: "EARNING",
        alt: "EARNING",
        text: "Earn from the convenience of your home, office or on the go with the simple use of a smart device. That simple!"
    },
    {
        image: "man.svg",
        title: "SUITABLE",
        alt: "SUITABLE",
        text: "Suitable for everyone who can own a local bank account. About everyone can participate."
    },
    {
        image: "businessmen.svg",
        title: "LEGACY",
        alt: "LEGACY",
        text: "A skill that can be passed on through generations for posterity and prosperity."
    },
]
export default {
    components: {
    },
    setup(){
        return {
            choices
        }
    }
}
</script>

