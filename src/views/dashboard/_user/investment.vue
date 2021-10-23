<template>
  <div class="w-full p-4">
    <div class="w-full flex flex-col sm:flex-row gap-4 mb-4">
      <div class="text-brand-blue text-xl bg-white shadow-md p-4 pt-8 rounded-md w-full sm:w-6/12 relative">
        <p class="tracking-wide pb-5">Fort Dollar</p>
        <p class="font-bold text-5xl pb-3">$500,000</p>
        <ProgressBar class="absolute inset-x-4 bottom-0" />
      </div>
      <div class="text-brand-blue text-xl bg-white shadow-md p-4 pt-8 rounded-md w-full sm:w-6/12 flex items-center">
        <ComparisonCharts class="w-2/3"/>
        <div class="w-1/3">
          <p class="font-bold text-5xl pb-3">+43%</p>
          <p class="tracking-wide">Fort Dollar</p>
        </div>
      </div>
    </div>
    <button class="mx-auto w-5/12 sm:w-2/12 p-4 bg-brand-blue text-white text-sm rounded-md" @click="$router.push({path: `/dashboard/moses/plans` })">Purchase more plans</button>
  </div>
</template>

<script>
import ProgressBar from "../../../components/ProgressBar.vue";
import ComparisonCharts from "../../../components/charts/ComparisonCharts.vue";
export default {
  components: {
    ProgressBar, ComparisonCharts
  }
}
</script>

<style>
</style>