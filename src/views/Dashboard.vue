<template>I can only be accessed if I am logged in</template>

<script>
export default {
  mounted() {
    console.log("ha", process.env);
  },
};
</script>

<style>
</style>