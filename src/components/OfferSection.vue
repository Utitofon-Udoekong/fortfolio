<template>
  <div class="grid md:grid-rows-1 overflow-x-hidden">
    <vueper-slides
      class="no-shadow container mx-auto max-w-screen-lg md:h-80 h-96"
      :visible-slides="3"
      :slide-ratio="1 / 4"
      :gap="5"
      :arrows-outside="true"
      :breakpoints="breakpoints"
      autoplay
    >
      <vueper-slide
        v-for="(plan, i) in plans"
        :key="i"
        class="w-full shadow-xl h-full"
        :image="require(`@/assets/images/${plan.img}`)"
      />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
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
    }
    return {
      plans,
      breakpoints
    }
  },
}
</script>

<style>
.h-84{
  height: 325px;
}
</style>
