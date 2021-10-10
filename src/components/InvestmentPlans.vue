<template>
  <div class="text-center my-28 px-6" id="plans">
    <p class="text-brand-lightblue text-lg md:text-xl">Get Started Now</p>
    <h1 class="text-brand-blue text-4xl font-extrabold py-4">OUR INVESTMENT PLANS</h1>
    <p
      class="text-brand-lightblue text-lg md:text-xl max-w-2xl mx-auto pb-8"
    >Get started now with us to earn every day and forever in your business. We accept Investment from all over the world</p>
    <div class="md:flex hidden justify-center items-center">
      <div :class="plan.active ? 'bg-brand-blue w-64 h-96 shadow-xl' : 'bg-white w-56 h-84 shadow-lg'" class="plan p-8 py-5 rounded-md mx-1.5" v-for="(plan, i) in plans" :key="i" >
        <div class="relative h-full">
          <h1 :class="plan.active ? 'text-white text-4xl pb-5' : 'text-brand-blue text-3xl pb-3'" class="text-center font-bold" >{{ plan.title }}</h1>
          <p v-html="plan.text" :class="plan.active ? 'text-white' : 'text-gray-900'" class="text-center text-sm" ></p>
          <button :class="plan.active ? 'text-white text-md border-white' : 'text-brand-blue text-sm border-brand-blue'" class="w-full absolute inset-x-0 bottom-0 rounded-md border-2 border-solid p-2" >INVEST NOW</button>
        </div>
      </div>
    </div>
    <carousel :items-to-show="2" :wrap-around="true">
    <slide :class="plan.active ? 'bg-brand-blue h-96 shadow-xl' : 'bg-white h-96 shadow-lg'" class="w-full plan p-8 py-5 rounded-md mx-1.5" v-for="(plan, i) in plans" :key="i">
      <div class="relative h-full">
          <h1 :class="plan.active ? 'text-white text-4xl pb-5' : 'text-brand-blue text-3xl pb-3'" class="text-center font-bold" >{{ plan.title }}</h1>
          <p v-html="plan.text" :class="plan.active ? 'text-white' : 'text-gray-900'" class="text-center text-sm" ></p>
          <button :class="plan.active ? 'text-white text-md border-white' : 'text-brand-blue text-sm border-brand-blue'" class="w-full absolute inset-x-0 bottom-0 rounded-md border-2 border-solid p-2" >INVEST NOW</button>
        </div>
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
      <!-- <swiper :slides-per-view="1" :space-between="10"  class="md:hidden block" >
        <swiper-slide :class="plan.active ? 'bg-brand-blue h-96 shadow-xl' : 'bg-white h-96 shadow-lg'" class="w-full plan p-8 py-5 rounded-md mx-1.5" v-for="(plan, i) in plans" :key="i" >
          <div class="relative h-full">
          <h1 :class="plan.active ? 'text-white text-4xl pb-5' : 'text-brand-blue text-3xl pb-3'" class="text-center font-bold" >{{ plan.title }}</h1>
          <p v-html="plan.text" :class="plan.active ? 'text-white' : 'text-gray-900'" class="text-center text-sm" ></p>
          <button :class="plan.active ? 'text-white text-md border-white' : 'text-brand-blue text-sm border-brand-blue'" class="w-full absolute inset-x-0 bottom-0 rounded-md border-2 border-solid p-2" >INVEST NOW</button>
        </div>
        </swiper-slide>
      </swiper> -->
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide, Navigation } from 'vue3-carousel';
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
    Carousel,
        Slide,
        Navigation
  },
  setup() {
    return {
      plans
    }
  }
}
</script>

<style lang="scss">
.h-84 {
  height: 22rem;
}
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
</style>