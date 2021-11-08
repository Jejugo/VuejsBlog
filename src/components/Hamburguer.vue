<template>
  <span class="hamburguer">
    <span class="hamburguer__icon" @click="toggleMenu">Burguer</span>
  </span>
  <section
    :class="{
      'menu--active': menuOpened,
      menu: !menuOpened,
    }"
  >
    <span class="close" @click="toggleMenu"> X </span>
    <h1 class="menu__title">Menu</h1>
    <ul class="menu__list">
      <li class="menu__list_item">teste1</li>
      <li class="menu__list_item">teste2</li>
      <li class="menu__list_item">teste3</li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      menuOpened: false,
    };
  },

  methods: {
    toggleMenu() {
      this.menuOpened = !this.menuOpened;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/main.scss";
.hamburguer {
  position: absolute;
  left: 2vw;
  &__icon {
    cursor: pointer;
  }
}

.menu {
  width: 350px;
  height: 100vh;
  position: absolute;
  left: -350px;
  top: 0;
  background-color: $BLACK;
  transition: 0.5s ease;

  &__list {
    padding: 0;
    &_item {
      color: white;
      text-decoration: none;
      list-style: none;
      text-align: center;
    }
  }

  &__title {
    color: $WHITE;
  }

  &--active {
    width: 350px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: black;
    transition: 0.5s ease;
  }
}

.close {
  position: absolute;
  right: 1vw;
  top: 1vh;
  cursor: pointer;
  color: $WHITE;
}
</style>