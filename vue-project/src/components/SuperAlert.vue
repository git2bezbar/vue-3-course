<template>
  <div class="super-alert" :style='{backgroundColor: color}'>
      <slot>MALAFACK</slot>
  </div>
</template>

<style scoped>
  .super-alert {
    padding: .75rem 5rem;
    border-radius: 5px;
    color: black;
    font-weight: bold;
  }
</style>

<script>
  export default {
    props: {
      color: {
        type: String,
        required: true,
      },
    }
  }
</script>