<template>
  <div
    v-if="showError"
    class="
      fixed
      p-4
      bg-red-600
      text-white
      inset-x-2
      z-40
      md:inset-x-20
      transition-all
      duration-500
      top-9
      alert
      flex
      justify-between
      items-center
    "
  >
    <p>{{ errorText }}</p>
    <p class="text-2xl cursor-pointer" @click="toggleError">&xotime;</p>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { watchEffect } from '@vue/runtime-core';
export default {
  setup() {
    const store = useStore();

    const showError = computed(() => {return store.getters.showError});
    watchEffect(() => {
      if (showError.value === true) {
        setTimeout(() => {
          store.commit("toggleError");
        }, 3000);
      }
    });

    // const error = computed(() => {
    //   switch (store.getters.errorText) {
    //     case "auth/network-request-failed":
    //       return "A network error occured. Check your connection and try again.";
    //     case "auth/user-not-found":
    //       return "This user does not exist. Try signing up.";
    //     case "auth/email-already-in-use":
    //       return "This email has already been used.";
    //     default:
    //       return "An error occured. Please contact support to find help.";
    //   }
    // });

    return {
      errorText: computed(() => store.getters.errorText),
      showError,
      toggleError: () => store.commit("toggleError"),
    };
  },
};
</script>

<style>
</style>