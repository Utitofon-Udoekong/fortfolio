<template>
  <div class="p-10">
    <div v-if="showAlert" class="fixed p-4 bg-brand-blue text-white inset-x-2 md:inset-x-20 transition-all duration-500  top-9 alert flex justify-between items-center">
      <p>Withdrawal request of {{state.amount}} sent</p>
      <p class="text-2xl cursor-pointer" @click="toggleAlert">&xotime;</p>
    </div>
    <form @submit.prevent="withdraw">
      <div class="mb-4 flex flex-col md:flex-row w-full items-start md:items-center">
        <label for="last" class="w-full md:w-2/12 text-gray-800 font-semibold text-lg">Amount to withdraw</label>
        <div class="border-2 rounded-md w-full md:w-10/12 ">
          <input
            id="last"
            class="text-md appearance-none shadow-md text-black bg-white border-none w-full p-2 "
            type="text"
            v-model="state.amount"
            placeholder="Enter amount here"
          />
        </div>
      </div>
      <button class="p-4 rounded-md text-white bg-brand-blue" @click.prevent="withdraw">Continue to withdrawal</button>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { watchEffect } from '@vue/runtime-core'
export default {
setup(){
  const state = {
    amount: "",
  }
  const toggleAlert = () => {
    showAlert.value = !showAlert.value
  }
  const showAlert = ref(false);
  const withdraw = () => {
    toggleAlert();
  }
  watchEffect(() => {
    if(showAlert.value === true){
      setTimeout(() => {
        showAlert.value = false
      }, 3000)
    }
  })
  return {
    state,
    showAlert,
    toggleAlert,
    withdraw
  }
}
}
</script>

<style>
.alert{
  box-shadow: 0 0 10px rgba(3, 66, 109,1);
}
</style>