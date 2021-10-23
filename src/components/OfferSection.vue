<template>
  <div class="px-3 sm:px-6 overflow-x-hidden mt-6">
    <p class="text-center text-3xl font-bold pb-10 text-brand-blue">OUR OFFERS</p>
    <div class="my-4 sm:my-10 max-w-6xl mx-auto">
      <swiper :slides-per-view="3"
      class="w-full h-auto bg-gray-200"
      :space-between="50"
      :pagination="{ clickable: true }"
      :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
      :speed="500"
      :autoplay="true"
      :breakpoints="swiperOptions.breakpoints"
      :loop="true">
        <div
          class="parallax-slider-navigation absolute top-1/2 z-40 inset-x-1 sm:inset-x-0 m-auto flex justify-between h-0"
        >
          <div class="h-10 sm:h-96 w-10 sm:w-20 rounded-full nav-indicator prevArrow">&blacktriangleleft;</div>
          <div class="h-10 sm:h-96 w-10 sm:w-20 rounded-full nav-indicator nextArrow">&blacktriangleright;</div>
        </div>
        <swiper-slide
        v-for="(plan, i) in plans"
        :key="i"
        class="w-full shadow-xl"
        ><img :src="require(`@/assets/images/${plan.img}`)" alt="image"></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
const plans = [
  {
    img: "fortspecial.jpg",
    alt: "fortspecial"
  },
  {
    img: "fortdollar.jpg",
    alt: "fortdollar"
  },
  {
    img: "fortbonus.jpg",
    alt: "fortbonus"
  },
  {
    img: "fortshield.jpg",
    alt: "fortshield"
  },
  {
    img: "fortsocial.jpg",
    alt: "fortsocial"
  },
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
          slidesPerView: 3,
          spaceBetween: 50
        },
      }
    }
    return {
      plans,
      swiperOptions
    }
  },
}
</script>

<style scoped>
.h-84 {
  height: 26rem !important;
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
  background: rgba(3, 67, 109, 0.89);
}
</style>
