<template>
  <div
    v-if="loading"
    class="
      flex
      items-center
      justify-center
      fixed
      h-screen
      w-full
      inset-0
      transition-opacity
      ease-linear
      duration-200
      bg-black bg-opacity-75
    "
  >
    <div
      class="
        w-20
        h-20
        border-b-4 border-brand-lightblue
        rounded-full
        animate-spin
      "
    ></div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
    setup(){
        const store = useStore()
        return{
            loading: computed(() => store.getters.loading)
        }
    }
};
</script>

<style>
</style>