<template>
  <div class="container py-4 introbanner justify-evenly">
      <div class="column flex w-full p-3 items-center" v-for="(intro, i) in intros" :key="i">
          <div class="w-32 h-auto">
              <img class="w-full" :src="require(`@/assets/images/intro/${intro.image}`)" :alt="intro.alt">
          </div>
          <div class="text block p-2">
              <h1 class="text-blue-500 font-semibold text-xl">{{intro.title}}</h1>
              <p class="text-sm">{{intro.text}}</p>
          </div>
      </div>
  </div>
</template>

<script>
const intros = [
    {
        image: "jigsaw.png",
        title: "CREATIVE SOLUTIONS",
        text: "We will go ahead that extra mile to ensure our clients welfare.",
        alt: "Creative solutions"
    },
    {
        image: "flag.png",
        title: "PROFESSIONAL TEAM",
        text: "We have the most dedicated experts in reputable company providing great advice.",
        alt: "PROFESSIONAL TEAM"
    },
    {
        image: "stacks.png",
        title: "DIVERSE APPROACH",
        text: "We don’t believe in the sales culture, but instead we believe in the service culture. ",
        alt: "DIVERSE APPROACH"
    },
    {
        image: "clipboard.png",
        title: "DETAILED REPORT",
        text: "We don’t believe in the sales culture, but instead we believe in the service culture. Our experts are always available over the phone and online.",
        alt: "DETAILED REPORT"
    },
]
export default {
 setup(){
     return{
        intros
     }
 }
}
</script>

<style lang="scss" scoped>
.introbanner{
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;
}
</style>