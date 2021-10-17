<template>
  <div class="my-14 md:my-24" id="steps">
    <p class="text-brand-lightblue text-xl font-light text-center">
      HOW TO INVEST WITH US
    </p>
    <h1 class="text-brand-lightblue text-3xl md:text-5xl font-extrabold text-center pb-6">
      IN THREE EASY STEPS
    </h1>
    <div class="mt-6 sm:mt-10 p-6 sm:px-16 md:px-24">
      <div v-for="(step, i) in steps" :key="i" class="mb-10 flex flex-col justify-around items-center" :class="i === 1 ? 'md:flex-row-reverse' : 'md:flex-row'">
        <div class="w-full sm:w-6/12 p-4">
          <img class="w-full h-full" :src="require(`@/assets/images/${step.image}`)" :alt="step.alt">
        </div>
        <div class="w-full sm:w-6/12 px-6 sm:px-20">
          <h1 class="py-4 text-2xl text-brand-lightblue font-semibold">{{ step.title }}</h1>
          <p class="text-black">{{ step.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const steps = [
  {
    image: "createaccount.svg",
    title: "CREATE AN ACCOUNT",
    alt: "CREATE AN ACCOUNT",
    text: "Begin by signing up on Fort-Folio by clicking the sign up button and filling the sign up form",
  },
  {
    image: "selectplan.svg",
    title: "CHOOSE AN INVESTMENT PLAN",
    alt: "CHOOSE AN INVESTMENT PLAN",
    text: "Select the investment plan you want by clicking at the button below the plan",
  },
  {
    image: "completepayment.svg",
    title: "COMPLETE PAYMENT",
    alt: "COMPLETE PAYMENT",
    text: "Proceed to make payment for the selected investment plan using your preferred payment gateway",
  },
];

export default {
  setup() {
    return {
      steps
    }
  },
};
</script>

<style scoped>
.shadow-2xl{
--tw-shadow: 0 0 50px rgba(0, 0, 0, 0.25);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>