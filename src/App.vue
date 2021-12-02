<template>
  <AppLayout>
    <router-view></router-view>
  </AppLayout>
</template>

<script>
export default {
  name: "App",
  setup() {
    
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&display=swap');
* {
  scroll-behavior: smooth;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
}
</style>
