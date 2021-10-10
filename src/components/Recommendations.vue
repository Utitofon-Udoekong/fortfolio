<template>
    <div>
        <p class="text-center text-3xl underline font-bold">RECOMMENDATIONS</p>
        <!-- <div class="p-5 sm:flex hidden justify-around items-center">
            <div
                v-for="(testimonial, i) in testimonials"
                :key="i"
                class="bg-brand-blue h-72 shadow-lg relative max-w-sm"
            >
                <div class="w-full p-8 overflow-y-scroll h-56">
                    <p class="text-white text-xs">{{ testimonial.text }}</p>
                </div>
                <p class="text-white text-lg absolute bottom-0 right-3">{{ testimonial.name }}</p>
                <img
                    :src="require(`@/assets/images/${testimonial.image}`)"
                    alt="testifiers"
                    class="absolute left-0 bottom-0 w-20"
                />
            </div>
        </div> -->
        <carousel :items-to-show="2" class="container max-w-5xl mx-auto h-80">
            <slide v-for="(testimonial, i) in testimonials" :key="i" class="bg-brand-blue h-80 shadow-lg relative ">
                <div class="w-full p-8 h-44">
                <p class="text-white text-xs">{{testimonial.text}}</p>
                </div>
                    <p class="text-white text-lg absolute bottom-4 left-4 right-3">{{testimonial.name}}</p>
                <img :src="require(`@/assets/images/${testimonial.image}`)" alt="testifiers" class="absolute left-0 bottom-0 w-20">
            </slide>

            <template #addons>
                <navigation />
            </template>
        </carousel>
        <!-- <swiper :slides-per-view="1" :space-between="10" :centered-slides="true" class="p-5 block sm:hidden">
        <swiper-slide v-for="(testimonial, i) in testimonials" :key="i" class="bg-brand-blue h-64 shadow-lg relative w-full max-w-xs">
            <div class="w-full p-8 overflow-y-scroll h-44">
                <p class="text-white text-xs">{{testimonial.text}}</p>
            </div>
                <p class="text-white text-lg absolute bottom-0 right-3">{{testimonial.name}}</p>
            <img :src="require(`@/assets/images/${testimonial.image}`)" alt="testifiers" class="absolute left-0 bottom-0 w-20">
        </swiper-slide>
        </swiper>-->
    </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide, Navigation } from 'vue3-carousel';
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
        Carousel,
        Slide,
        Navigation
    },
    setup() {
        return {
            testimonials
        }
    }
}
</script>