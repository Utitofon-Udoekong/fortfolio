<template>
  <div class="text-center my-28 px-6" id="plans">
    <p class="text-brand-lightblue text-lg md:text-xl">Get Started Now</p>
    <h1 class="text-brand-blue text-2xl md:text-4xl font-extrabold py-4">OUR INVESTMENT PLANS</h1>
    <p
      class="text-brand-lightblue text-md md:text-xl max-w-2xl mx-auto pb-8"
    >Get started now with us to earn every day and forever in your business. We accept Investment from all over the world</p>
    <div class="md:flex hidden justify-center items-center">
      <div
        :class="plan.active ? 'bg-brand-blue w-64 h-96 shadow-xl' : 'bg-white w-56 h-84 shadow-inner border-2 border-solid border-brand-blue'"
        class="plan p-8 py-5 rounded-md mx-1.5"
        v-for="(plan, i) in plans"
        :key="i"
      >
        <div class="relative h-full">
          <h1
            :class="plan.active ? 'text-white text-4xl pb-5' : 'text-brand-blue text-3xl pb-3'"
            class="text-center font-bold"
          >{{ plan.title }}</h1>
          <p
            v-html="plan.text"
            :class="plan.active ? 'text-white' : 'text-gray-900'"
            class="text-center text-sm"
          ></p>
          <button
            :class="plan.active ? 'text-white text-md border-white' : 'text-brand-blue text-sm border-brand-blue'"
            class="w-full absolute inset-x-0 bottom-0 rounded-md border-2 border-solid p-2"
          >INVEST NOW</button>
        </div>
      </div>
    </div>

    <vueper-slides
      class="md:hidden block no-shadow container mx-auto max-w-screen-lg h-full"
      :visible-slides="3"
      :slide-ratio="1 / 4"
      :gap="5"
      :arrows-outside="true"
      :breakpoints="breakpoints"
      
    >
      <vueper-slide
        v-for="(plan, i) in plans"
        :key="i"
        :class="plan.active ? 'bg-brand-blue shadow-xl' : 'bg-white shadow-inner border-2 border-solid border-brand-blue'"
        class="w-full plan p-8 py-5 rounded-md h-96"
      >
      <template #content>
        <div class="relative h-full">
          <h1 :class="plan.active ? 'text-white text-4xl pb-5' : 'text-brand-blue text-3xl pb-3'" class="text-center font-bold" >{{ plan.title }}</h1>
          <p v-html="plan.text" :class="plan.active ? 'text-white' : 'text-gray-900'" class="text-center text-sm" ></p>
          <button :class="plan.active ? 'text-white text-md border-white' : 'text-brand-blue text-sm border-brand-blue'" class="w-full absolute inset-x-0 bottom-0 rounded-md border-2 border-solid p-2" >INVEST NOW</button>
        </div>
      </template>
      </vueper-slide>
      <!-- <vueper-slide
          v-for="(plan, i) in plans"
          :key="i"
          class="w-full shadow-xl h-full"
          :image="require(`@/assets/images/${plan.img}`)"
      />-->
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
const plans = [
  {
    title: "FORT DOLLAR",
    text: `
        <p class="pb-2">Invest Nigerian currency,</p>
        <p class="pb-2">have it converted to foreign currencies (Dollar, Euros, Pounds) </p>
        <p class="pb-2">Earn an additional 30% interest annually in your desired currency</p>
      `
  },
  {
    title: "FORT SOCIAL",
    text: `
        <p class="pb-2">Invest with as low as Fifty Thousand Naira (N50,000) </p>
        <p class="pb-2">Get entitled to a monthly data subscription. </p>
        <p class="pb-2">Get 30% interest annually</p>
      `
  },
  {
    active: true,
    title: "FORT SHIELD",
    text: `
        <p class="pb-2">Invest a minimum of One Million Naira (N1,000,000) </p>
        <p class="pb-2">Receive 18% ROI annually &</p>
        <p class="pb-2">get a land as Collateral for the period of investment.</p>
      `
  },
  {
    title: "FORT BONUS",
    text: `
        <p class="pb-2">Invest a minimum of Five Hundred Thousand Naira (N500,000)</p>
        <p class="pb-2">And get free assets like Mobile Phones, Television, Blender, Fan and many more.</p>
      `
  },
  {
    title: "FORT SPECIAL",
    text: `
        <p class="pb-2">Invest a minimum of One Hundred Thousand Naira (N100,000)</p>
        <p class="pb-2">and receive 40% Interest,</p>
        <p class="pb-2">With Half of your interest paid immediately</p>
      `
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
        gap: 1
      }
    }
    return {
      plans,
      breakpoints
    }
  }
}
</script>

<style lang="scss">
.h-84 {
  height: 22rem;
}

#plans > div.vueperslides.vueperslides--ready.vueperslides--touchable.vueperslides--bullets-outside.no-shadow.container.mx-auto.max-w-screen-lg.h-full > div.vueperslides__inner{
  height: 28rem;
}
#plans > div.vueperslides.vueperslides--ready.vueperslides--touchable.vueperslides--bullets-outside.no-shadow.container.mx-auto.max-w-screen-lg.h-full > div.vueperslides__inner > div{
  position: static;
}
</style>