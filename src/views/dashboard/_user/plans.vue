<template>
  <div class="overflow-y-scroll h-5/6 text-center p-4" id="plans">
    <div class="flex flex-col sm:flex-row justify-center items-center">
      <div
        :class="plan.active ? 'bg-brand-blue w-full sm:w-56 md:w-64 h-96 md:h-101 shadow-xl' : 'bg-white w-full sm:w-56 h-96'"
        class="plan p-8 py-5 rounded-md mx-1.5 mb-4"
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
  </div>
</template>

<script>
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
  setup() {
    return {
      plans,
    }
  }
}
</script>

<style lang="scss">
.h-101 {
  height: 26rem;
}
</style>