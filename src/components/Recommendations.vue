<template>
    <div class="my-24 mb-32 px-3 sm:px-6">
        <p class="text-center text-3_5xl sm:text-3xl font-bold pb-6 sm:pb-10 text-brand-blue">RECOMMENDATIONS</p>
        <div class="my-6 container mx-auto max-w-screen-lg">
            <swiper
                :slides-per-view="2"
                class="w-full h-96 sm:h-80"
                :space-between="50"
                :pagination="{ clickable: true }"
                :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
                :speed="500"
                :autoplay="true"
                :breakpoints="swiperOptions.breakpoints"
                :centered-slides="true"
                :loop="true"
            >
                <div
                    class="parallax-slider-navigation absolute top-1/2 z-40 inset-x-1 sm:inset-x-0 m-auto flex justify-between h-0"
                >
                    <div class="h-10 sm:h-96 w-10 sm:w-20 rounded-full nav-indicator prevArrow">&blacktriangleleft;</div>
                    <div class="h-10 sm:h-96 w-10 sm:w-20 rounded-full nav-indicator nextArrow">&blacktriangleright;</div>
                </div>
                <swiper-slide
                    v-for="(testimonial, i) in testimonials"
                    :key="i"
                    class="bg-brand-blue shadow-lg relative p-8 h-full"
                >
                    <p class="text-white text-md">{{ testimonial.text }}</p>
                    <p class="text-white text-lg absolute bottom-10 right-10">{{ testimonial.name }}</p>
                    <img
                        :src="require(`@/assets/images/${testimonial.image}`)"
                        alt="testifiers"
                        class="absolute left-0 bottom-0 w-20"
                    />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
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
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
SwiperCore.use([Navigation, Autoplay]);
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const swiperOptions = {
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1048: {
                    slidesPerView: 2,
                    spaceBetween: 50
                },
            }
        }

        return {
            testimonials,
            swiperOptions
        }
    }
}
</script>

<style lang="scss" scoped>
.text-3_5xl {
    font-size: 1.675rem;
    line-height: 1.95rem;
}
.nav-indicator {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color: #ffffff;
    cursor: pointer;
    position: relative;
    transform: translateY(-50%);
    background: rgba(2, 44, 71, 0.863);
}
</style>