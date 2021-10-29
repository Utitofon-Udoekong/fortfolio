<template>
  <div
        v-if="showSuccess"
        class="fixed p-4 bg-green-600 z-40 text-white inset-x-2 md:inset-x-20 transition-all duration-500 top-9 alert flex justify-between items-center"
    >
        <p>{{successText}}</p>
        <p class="text-2xl cursor-pointer" @click="toggleSuccess">&xotime;</p>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex';
import { watchEffect } from '@vue/runtime-core';
export default {

setup(){
    const store = useStore()
    
    const showSuccess = computed(() => {return store.getters.showSuccess})
    watchEffect(() => {
        if (showSuccess.value === true) {
            setTimeout(() => {
                store.commit("toggleSuccess")
            }, 3000)
        }

    })

    return{
        successText: computed(() => store.getters.successText),
        showSuccess,
        toggleSuccess: () => store.commit("toggleSuccess")
    }
}
}
</script>

<style>

</style>