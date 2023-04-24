<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      }
    }
  }
</script>

<style scoped>
  button {
    display: inline-block;
    background-color: #FF0000;
    color: #fff;
    padding: .75rem 1rem;
    border-radius: 6px;
  }
</style>