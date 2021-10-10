<template>
  <div class="my-10 md:my-24" id="steps">
    <p class="text-brand-lightblue text-xl font-light text-center">
      HOW TO INVEST WITH US
    </p>
    <h1 class="text-brand-lightblue text-4xl md:text-5xl font-extrabold text-center pb-6">
      IN THREE EASY STEPS
    </h1>
    <div class="steps grid grid-cols-1 md:grid-cols-3">
      <div
        class="bg-brand-lightblue w-full p-9 px-28 text-center shadow-2xl"
        v-for="(step, i) in steps"
        :key="i"
      >
        <div class="image w-12 h-12 md:w-20 md:h-20 mx-auto">
          <img
            class="w-full h-full"
            :src="require(`@/assets/images/${step.image}`)"
            :alt="step.alt"
          />
        </div>
        <h1 class="py-4 text-2xl text-white font-semibold">{{ step.title }}</h1>
        <p class="text-white">{{ step.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
const steps = [
  {
    image: "notebook.svg",
    title: "CREATE AN ACCOUNT",
    alt: "CREATE AN ACCOUNT",
    text: "Begin by signing up on Fort-Folio by clicking the sign up button and filling the sign up form",
  },
  {
    image: "network.svg",
    title: "CHOOSE AN INVESTMENT PLAN",
    alt: "CHOOSE AN INVESTMENT PLAN",
    text: "Select the investment plan you want by clicking at the button below the plan",
  },
  {
    image: "card.svg",
    title: "COMPLETE PAYMENT",
    alt: "COMPLETE PAYMENT",
    text: "Proceed to make payment for the selected investment plan using the payment gateway",
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