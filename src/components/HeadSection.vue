<template>
  <div class="h-screen w-auto bg-hero-pattern bg-brand-blue bg-blend-overlay md:bg-fixed">
      <Navbar/>
      <main class="flex items-center justify-center text-center h-3/4 mt-20 sm:mt-0">
        <div class="container mx-auto max-w-3xl px-4 sm:px-1">
          <h1 class="text-white tracking-wider pb-3 font-extrabold text-2xl sm:text-5xl">INVEST SMARTLY WITH THE FORTFOLIO COMMUNITY</h1>
          <p class="text-white text-lg pb-5">We are keen on demistyfying the mode of operation in the cryptocurrency market by leveraging the knowledge, experience and expertise of the industry.</p>
          <button class="border-2 border-solid border-white bg-transparent text-white font-semibold p-3 sm:w-40">
            <a href="/signup">GET STARTED</a>
          </button>
        </div>
      </main>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue"


export default {
  components: {
    Navbar
  },
  setup() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>

</style>