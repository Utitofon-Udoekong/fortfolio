<template>
  <div class="mb-14" id="about">
    <!-- <div class="titlebar h-32 bg-brand-lightblue px-8 sm:px-28 flex items-center">
      <h1 class="text-4xl md:text-6xl text-white inline-block font-extrabold">ABOUT US</h1>
    </div>
    <div class="content md:flex justify-center items-center">
      <div class="p-8 sm:max-w-sm w-full">
        <p class="text-brand-lightblue text-lg font-semibold pb-3">WELCOME TO</p>
        <h1 class="text-brand-lightblue text-3xl font-bold pb-2">FORTFOLIO</h1>
        <p class="text-base font-medium text-gray-800"> At FORTFOLIO LIMITED, we pride ourselves in offering our customers responsive, competent and excellent services. Our customers are the most important part of our business, and we work tirelessly to ensure your complete satisfaction, now and for as long as you are a customer. </p>
      </div>
      <div class="shadow-2xl p-10 py-11 sm:max-w-xl relative w-full -mt-0 sm:-mt-10 bg-white">
        <p class="font-semibold pb-1">OUR SERVICES</p>
        <h1 class="pb-3 text-brand-lightblue text-3xl font-bold">WHAT WE INVEST IN</h1>
        <p> <span class="text-brand-lightblue">FORTFOLIO</span> is a known name for diverse investments, as we partner with a lot of companies to sustain and ensure a profitable investment of our clients, that is why we have a diversified portfolio with low risk </p>
        <p class="text-lg pb-8">We invest in:</p>
        <div class="investments grid md:grid-cols-3 grid-cols-2 grid-flow-row">
            <div class="mb-8" v-for="(investment, i) in investments" :key="i">
                <div class="image mx-auto w-20 h-20">
                    <img class="w-full h-full" :src="require(`@/assets/images/invest/${investment.image}`)" :alt="investment.alt">
                </div>
                <p class="text-center text-sm font-semibold text-gray-600">{{investment.title}}</p>
            </div>
        </div>
        <button class="font-semibold w-9/12 shadow-lg h-12 absolute -bottom-4 bg-white left-1/2 transform -translate-x-1/2">GET A FREE CONSULTATION</button>
      </div>
    </div> -->
  </div>
</template>

<script>
const investments = [
    {
        title: "REAL ESTATE",
        alt: "REAL ESTATE",
        image: "building.svg"
    },
    {
        title: "LOGISTICS",
        alt: "LOGISTICS",
        image: "logistics.svg"
    },
    {
        title: "SHORTLETS APARTMENTS",
        alt: "SHORTLETS APARTMENTS",
        image: "hotel.svg"
    },
    {
        title: "CAR WIND SHIELD",
        alt: "CAR WIND SHIELD",
        image: "car.svg"
    },
    {
        title: "POS SERVICES",
        alt: "POS SERVICES",
        image: "creditcard.svg"
    },
    {
        title: "CRYPTO CURRENCY TRADING",
        alt: "CRYPTO CURRENCY TRADING",
        image: "bitcoinbars.svg"
    },
]
export default {
  setup() {
      return {
          investments
      }
  },
};
</script>

<style>
</style>