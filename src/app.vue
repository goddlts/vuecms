<template>
  <h1>{{ msg }}</h1>
</template>

<script>
  export default {
    data: function () {
      return {
        msg: 'Hello Vue'
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>
