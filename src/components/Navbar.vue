<template class="navbar">
  <section id="navbar" class="navbar">
    <div class="navbar__item" v-for="key in Object.keys(navOptions)" :key="key">
      <a class="navbar__item_title" @click="(e) => openOptions(e, key)">{{
        firstLetterUpperCase(key)
      }}</a>
      <span class="navbar__item_pipe">|</span>
      <SubMenu :show="navOptions[key]"></SubMenu>
    </div>
  </section>
</template>

<script>
import SubMenu from "../components/SubMenu.vue";
export default {
  props: {},
  components: { SubMenu },
  data() {
    return {
      navOptions: {
        recentes: false,
        frontend: false,
        backend: false,
        devops: false,
        tutoriais: false,
      },
    };
  },
  methods: {
    openOptions(e, clickedKey) {
      Object.keys(this.navOptions).map((key) =>
        key === clickedKey
          ? (this.navOptions[key] = !this.navOptions[key])
          : (this.navOptions[key] = false)
      );
    },

    firstLetterUpperCase(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    },

    resetNavbar() {
      console.log('clicou')
      Object.keys(this.navOptions).map((key) => (this.navOptions[key] = false));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";
.navbar {
  background-color: $GREY;
  margin: 0;
  padding: 20px;
  height: 60px;
  box-sizing: border-box;

  &__item {
    display: inline-block;
    &_title,
    &_pipe {
      text-decoration: none;
      color: $BLACK;
      margin: 5px;
    }

    &_title {
      cursor: pointer;
    }
  }
}
</style>
