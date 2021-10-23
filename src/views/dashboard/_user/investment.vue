<template>
  <div class="w-full p-4 overflow-y-scroll h-5/6">
    <div class="w-full flex flex-col md:flex-row gap-4 mb-4" v-for="(investment, i) in investments" :key="i">
      <div class="text-brand-blue text-xl bg-white shadow-md p-4 pt-8 rounded-md w-full md:w-6/12 relative">
        <p class="tracking-wide pb-5">{{investment.name}}</p>
        <p class="font-bold text-4xl md:text-5xl pb-3">${{investment.amount}}</p>
        <ProgressBar />
      </div>
      <div class="text-brand-blue text-xl bg-white shadow-md p-4 pt-8 rounded-md w-full md:w-6/12 flex flex-col sm:flex-row items-center">
        <ComparisonCharts class="w-2/3"/>
        <div class="w-1/3">
          <p class="font-bold text-4xl md:text-5xl pb-3">+43%</p>
          <p class="tracking-wide">{{investment.name}}</p>
        </div>
      </div>
    </div>
    <button class="mx-auto mb-4 w-full md:w-4/12 p-4 bg-brand-blue text-white text-sm rounded-md" @click="$router.push({path: `/dashboard/moses/plans` })">Purchase more plans</button>
  </div>
</template>

<script>
import ProgressBar from "../../../components/ProgressBar.vue";
import ComparisonCharts from "../../../components/charts/ComparisonCharts.vue";
const investments = [
  {
    name: "Fort Dollar",
    amount: 500_000
  },
  {
    name: "Fort Shield",
    amount: 1_000_0000
  },
]
export default {
  components: {
    ProgressBar, ComparisonCharts
  },
  setup(){
    return {
      investments
    }
  }
}
</script>

<style>
</style>