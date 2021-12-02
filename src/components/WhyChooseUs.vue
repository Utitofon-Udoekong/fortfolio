<template>
    <div class="my-24 p-8 py-12 choice">
        <p class="text-center text-brand-blue text-lg pb-3">WHY CHOOSE US</p>
        <h1
            class="text-brand-lightblue text-3xl md:text-5xl text-center font-extrabold pb-10"
        >SMART INVESTING WITH SMART IDEAS</h1>
        <div class="flex md:flex-row items-center flex-col justify-evenly md:items-start">
            <div v-for="(choice, i) in choices" :key="i" class="text-center w-56 md:mx-1.5 mx-0" :class="choice[choice.length-1] ? 'mb-0' : 'mb-12'">
                <div class="image mx-auto flex items-center justify-center bg-brand-blue w-24 h-24 rounded-full">
                    <img class="w-2/4 h-2/4 object-center" :src="require(`@/assets/images/chooseus/${choice.image}`)" :alt="choice.alt">
                </div>
                <h2 class="font-semibold text-xl text-brand-blue py-2">{{ choice.title }}</h2>
                <p class="text-sm">{{ choice.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
const choices = [
    {
        image: "hmo.png",
        alt: "HMO",
        title: "FREE HMO",
        text: "We offer free HMO because we care about the well-being of our customers. Whether you are injured in an accident, or just need to see a doctor."
    },
    {
        image: "security.png",
        title: "SECURITY",
        alt: "security",
        text: "With our deep expertise in investments, trading and fund management, we guarantee our clients safe keep of all their assets and funds."
    },
    {
        image: "money.png",
        title: "EARNING",
        alt: "EARNING",
        text: "Sign up to start earning from the comfort of your home while our experienced fund managers help you grow your portfolio."
    },
    {
        image: "loan.png",
        title: "ACCESS TO LOANS",
        alt: "LOAN",
        text: "We make borrowing easy and fast for our clients by reducing the hassle of going through numerous paper work and time."
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

<style>
.choice{
    background-color: #e8f7fb;
background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15l15 15H0V15zM15 0l15 15V0H15z' fill='%2349494b' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E");
}
</style>

