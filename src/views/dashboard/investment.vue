<template>
  <div class="w-full p-4 overflow-y-scroll h-5/6">
    <div
      class="w-full flex flex-col md:flex-row gap-4 mb-4"
      v-for="(investment, i) in investments"
      :key="i"
    >
      <div
        class="text-brand-blue text-xl bg-white shadow-md p-4 flex flex-col justify-center pt-8 rounded-md w-full md:w-6/12 relative"
      >
        <p class="tracking-wide pb-5">{{ investment.name }}</p>
        <p class="font-bold text-4xl md:text-5xl pb-3">${{ investment.amount.toLocaleString() }}</p>
        <p class="font-bold text-4xl md:text-5xl pb-9">+43%</p>
        <ProgressBar />
      </div>
      <div
        class="text-brand-blue text-xl bg-white shadow-md p-4 rounded-md w-full md:w-6/12 flex flex-col sm:flex-row items-center"
      >
        <ComparisonCharts :investmentData="investment.accrued" class="w-full" />
      </div>
    </div>
    <button
      class="mx-auto mb-4 w-full md:w-4/12 p-4 bg-brand-blue text-white text-sm rounded-md"
      @click="$router.push({ path: `/dashboard/moses/plans` })"
    >Purchase more plans</button>
  </div>
</template>

<script>
import ProgressBar from "../../components/ProgressBar.vue";
import ComparisonCharts from "../../components/charts/ComparisonCharts.vue";
const investments = [
  {
    name: "Fort Dollar",
    amount: 500000,
    accrued: [
      501500,
      503004,
      504513,
      506027,
      507545,
      509067,
      510594,
      512126
    ]
  },
  {
    name: "Fort Shield",
    amount: 1000000,
    accrued: [
      1003000,
      1006009,
      1009027,
      1012054,
      1015090,
      1018135,
      1021189,
      1024253
    ]
  },
]
export default {
  components: {
    ProgressBar, ComparisonCharts
  },
  setup() {
    return {
      investments
    }
  }
}
</script>

<style>
</style>