<template>
  <div class="h-5/6 text-center p-4" id="plans">
  <investment-plans :showText="false" :autoplay="false" class="text-center px-6" />
  </div>
</template>

<script>
import InvestmentPlans from '../../components/InvestmentPlans.vue'

export default {
  components: { InvestmentPlans },
  setup() {
    return {
      // plans,
    }
  }
}
</script>

<style lang="scss">
.h-101 {
  height: 26rem;
}
</style>