<template>
  <div class="px-6 overflow-x-hidden">
    <p class="text-center text-3xl font-bold pb-10 text-brand-blue">OUR OFFERS</p>
    <vueper-slides
      class="no-shadow container mx-auto max-w-screen-lg"
      :visible-slides="3"
      :slide-ratio="1/2"
      :arrows-outside="true"
      :breakpoints="breakpoints"
      fixed-height="300px"
      autoplay
    >
      <vueper-slide
        v-for="(plan, i) in plans"
        :key="i"
        class="w-full shadow-xl "
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
    img: "fortspecial.jpg",
    alt: "fortspecial"
  },
  {
    img: "fortdollar.jpeg",
    alt: "fortdollar"
  },
  {
    img: "fortbonus.jpg",
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
        visibleSlides: 1,
        fixedHeight: '350px'
      }
    }
    return {
      plans,
      breakpoints
    }
  },
}
</script>

<style scoped>
.h-84{
  height: 26rem !important;
}

</style>
