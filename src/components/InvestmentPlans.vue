<template>
  <div class="text-center my-14 sm:my-28 px-6" id="plans">
    <p class="text-brand-lightblue text-lg md:text-xl">Get Started Now</p>
    <h1 class="text-brand-blue text-3xl md:text-5xl font-extrabold py-4">OUR INVESTMENT PLANS</h1>
    <p
      class="text-brand-lightblue text-md md:text-xl max-w-2xl mx-auto pb-8"
    >Start your journey with us to earn huge interests every day in your business. We accept Investment from all over the world</p>
    <div class="md:flex hidden justify-center items-center">
      <div
        :class="plan.active ? 'bg-brand-blue w-64 h-102 shadow-xl' : 'bg-white w-56 h-101 shadow-inner border-2 border-solid border-brand-blue'"
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
            :class="plan.active ? 'hover:text-white text-md border-white hover:bg-transparent bg-white text-black' : 'hover:text-brand-blue text-sm border-brand-blue bg-brand-blue hover:bg-white text-white'"
            class="w-full absolute inset-x-0 bottom-0 rounded-md border-2 border-solid p-2 ease-linear transition-all duration-150"
          >
            <a :href="plan.path">INVEST NOW</a>
          </button>
        </div>
      </div>
    </div>
    <div class="md:hidden block no-shadow container mx-auto max-w-screen-lg h-auto">
      <swiper
        :slides-per-view="1"
        class="w-full h-full"
        :space-between="3"
        :speed="500"
        :autoplay="true"
        :breakpoints="swiperOptions.breakpoints"
        :centered-slides="true"
        :loop="true"
      >
        <swiper-slide
          v-for="(plan, i) in plans"
          :key="i"
          :class="plan.active ? 'bg-brand-blue shadow-xl' : 'bg-white shadow-inner border-2 border-solid border-brand-blue'"
          class="w-full plan p-8 py-5 rounded-md h-96"
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
              :class="plan.active ? 'hover:text-white text-md border-white hover:bg-transparent bg-white text-black' : 'hover:text-brand-blue text-sm border-brand-blue bg-brand-blue hover:bg-white text-white'"
              class="w-full absolute inset-x-0 bottom-0 rounded-md border-2 border-solid p-2 ease-linear transition-all duration-150"
            >INVEST NOW</button>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
const plans = [
  {
    title: "FORT DOLLAR",
    text: `
        <p class="pb-2">Invest Nigerian currency(Naira),</p>
        <p class="pb-2">and have it converted to Dollar. </p>
        <p class="pb-2">You earn 30% ROI annually in Dollars, paid out to you in your desired currency.</p>
      `,
    path: '/signup'
  },
  {
    active: true,
    title: "FORT SHIELD",
    text: `
        <p class="pb-2">Invest a minimum of One Million Naira (N1,000,000) </p>
        <p class="pb-2">Receive 18% ROI annually &</p>
        <p class="pb-2">get a land as Collateral for the period of investment.</p>
      `,
    path: '/signup'
  },
  {
    title: "FORT CRYPTO",
    text: `
     
        <p class="pb-2">Invest a minimum of $1000</p>
        <p class="pb-2">(or its equivalent in supported Crypto asset) </p>
        <p class="pb-2">Receive upto 15% ROI annually.</p>
      `,
    path: '/signup'
  },
]
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/swiper.scss"
SwiperCore.use([Autoplay]);

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
          spaceBetween: 3
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 3
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        
      }
    }
    return {
      plans,
      swiperOptions
    }
  }
}
</script>

<style lang="scss">
.h-84 {
  height: 22rem;
}

#plans
  > div.vueperslides.vueperslides--ready.vueperslides--touchable.vueperslides--bullets-outside.no-shadow.container.mx-auto.max-w-screen-lg.h-full
  > div.vueperslides__inner {
  height: 24rem;
}

#plans
  > div.vueperslides.vueperslides--ready.vueperslides--touchable.vueperslides--bullets-outside.no-shadow.container.mx-auto.max-w-screen-lg.h-full
  > div.vueperslides__inner
  > div {
  position: static;
}
.h-101 {
  height: 27rem;
}
.h-102 {
  height: 30.5rem;
}
</style>