<template>
  <Logo></Logo>
  <section id="nav">
    <Navbar></Navbar>
  </section>
  <Layout>
    <router-view />
  </Layout>
  <Footer></Footer>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Layout from "./layouts/Main.vue";
import Logo from "./components/Logo.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Navbar, Layout, Logo, Footer },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: "Ubuntu", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
