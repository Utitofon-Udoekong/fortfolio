<template>
  <div class="bg-gray-800 h-screen w-full relative overflow-hidden">
      <div class="absolute sm:h-full sm:w-full bg-black bg-opacity-60 inset-0 filter blur-sm z-20"></div>
      <img v-for="n in 12" :data-speed="Math.floor((Math.random() * -5) + 10)" class=" z-10 layer w-full h-full absolute top-0 left-0 ease-linear transition-all duration-150" :key="n" :src="require(`@/assets/images/comingimages/${n}.png`)" alt="data image">
      <div class="bg-white p-8 m-auto max-w-full absolute transform top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
          <h1 class="font-extrabold text-3xl sm:text-5xl text-center">THIS PAGE IS UNDER CONSTRUCTION</h1>
          <p class="sm:text-xl text-md pt-3 text-center">It will be live in no time</p>
          <p class="sm:text-xl text-md pt-5 text-center">Lets take you back <a href="/" class="text-brand-lightblue">Home</a></p>
      </div>
  </div>
</template>

<script>import { onMounted } from "@vue/runtime-core"

export default {
    setup(){
        const parallax = (e) => {
            document.querySelectorAll(".layer").forEach(layer => {
                const speed = layer.getAttribute("data-speed");

                const x = (window.innerWidth - e.pageX * speed) / 100
                const y = (window.innerHeight - e.pageY * speed) / 100

                layer.style.transform = `translateX(${x}px) translateY(${y}px)`
            })
        }
        onMounted(() => {
            document.addEventListener("mousemove", parallax)
        })
    }
}
</script>

<style>

</style>