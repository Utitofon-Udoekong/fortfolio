<template>
    <div class="my-24 px-6">
        <p class="text-center text-3xl font-bold pb-10 text-brand-blue">RECOMMENDATIONS</p>

        <vueper-slides
            class="no-shadow container mx-auto max-w-screen-lg"
            :visible-slides="2"
            :slide-ratio="1 / 3"
            :gap="5"
            :arrows-outside="true"
            :breakpoints="breakpoints"
            autoplay
        >
            <vueper-slide
                v-for="(testimonial, i) in testimonials"
                :key="i"
                class="bg-brand-blue h-76 shadow-lg relative p-8"
            >
                <template #content>
                    <p class="text-white text-md">{{ testimonial.text }}</p>
                    <p class="text-white text-lg absolute bottom-10 right-10">{{ testimonial.name }}</p>
                    <img
                        :src="require(`@/assets/images/${testimonial.image}`)"
                        alt="testifiers"
                        class="absolute left-0 bottom-0 w-20"
                    />
                </template>
            </vueper-slide>
        </vueper-slides>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
const testimonials = [
    {
        name: "Solomon Akintola",
        text: "Fortfolio has consistently ensured returns on my investment capital. Better than all the times I wasted my money on getting rich quick schemes. I am more than happy with them.",
        image: "user1.png"
    },
    {
        name: "Adaku Ihioma",
        text: "I am particularly impressed with the quick response of their support team. Its like having a girlfriend that manages your money, bring in more money and still have the time to make your stomach feel sweet because you are always heard and responded to.",
        image: "user3.png"
    },
    {
        name: "Queen Nwaze",
        text: "This is one of the few investment platforms if not the only investment platform that has consistent returns, correct capital management and great support.",
        image: "user3.png"
    },
    {
        name: "Fred Nwoke",
        text: "It went from doubts to unbelievably true. To say i am impressed is an understatement. I am happy I took the risk to invest with you guys, and it is a risk that was worth it. Thanks to Fortfolio for the amazing returns.",
        image: "user2.png"
    }
]
export default {
    components: {
        VueperSlides, VueperSlide
    },
    setup() {
        const breakpoints = {
            
            700: {
                slideRatio: 1,
                arrows: false,
                bulletsOutside: true,
                visibleSlides: 1
            }
            // The order you list breakpoints does not matter, Vueper Slides will sort them for you.
        }
        return {
            testimonials,
            breakpoints
        }
    }
}
</script>

<style lang="scss" scoped>
div.vueperslide__title {
    text-decoration: underline !important;
    font-size: 40px !important;
}
</style>