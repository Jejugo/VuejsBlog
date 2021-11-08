<template>
  <section class="header">
    <a class="header__logo" href="http://localhost:8080">Codando na Web</a>
    <Hamburguer></Hamburguer>
  </section>
</template>

<script>
import Hamburguer from "./Hamburguer.vue";
export default {
  components: { Hamburguer },
};
</script>

<style lang="scss" scoped>
.header {
  min-height: 10vh;
  align-items: center;
  justify-content: center;
  display: flex;

  &__logo {
    font-family: "Fruktur", cursive;
    font-size: 40px;
    cursor: pointer;
    text-decoration: none;
    color: black;
  }
}
</style>