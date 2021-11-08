<template>
  <section class="footer">
    <p class="footer__copyright">Copyright@2021</p>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  background-color: black;
  width: 100%;
  height: 25vh;

  &__copyright {
    position: absolute;
    bottom: 0;
    right: 10px;
    color: white;
  }
}
</style>