<script>
  import MyCounter from './components/MyCounter.vue';

  export default {
    components: {
      MyCounter,
    },
    data() {
      return {
        colors: ['red', 'white', 'blue']
      }
    }
    }
</script>

<template>
  <main>
    <SuperAlert :color="color" v-for="(color, i) in colors" :key="i"></SuperAlert>
  </main>
</template>

<style scoped>
</style>