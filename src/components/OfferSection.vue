<template>
  <div class="grid md:grid-rows-1 overflow-x-hidden">
    <Carousel :items-to-show="2.5" :wrap-around="true">
    <Slide class="bg-brand-lightblue max-w-sm md:h-80 h-52"
        v-for="(plan,i) in plans"
        :key="i">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
    <!-- <swiper
    :slides-per-view="2"
    :space-between="10"
      :centered-slides="true"
    >
      <swiper-slide
        class="bg-brand-lightblue max-w-sm md:h-80 h-52"
        v-for="(plan,i) in plans"
        :key="i"
      >
        <img
          class="w-full h-full shadow-xl"
          :src="require(`@/assets/images/${plan.img}`)"
          :alt="plan.alt"
        />
      </swiper-slide>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </swiper> -->
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const plans = [
  {
    img: "fortspecial.png",
    alt: "fortspecial"
  },
  {
    img: "fortdollar.jpeg",
    alt: "fortdollar"
  },
  {
    img: "fortbonus.png",
    alt: "fortbonus"
  },
  {
    img: "fortshield.jpeg",
    alt: "fortshield"
  },
  {
    img: "fortsocial.png",
    alt: "fortsocial"
  },
]
export default {
  components: {
    Carousel,
        Slide,
        Navigation
  },
  setup() {
    return {
      plans
    }
  },
}
</script>

<style>
</style>