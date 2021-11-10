<template>
  <section class="dashboard">
    <span class="dashboard__addPost" @click="addPost">+</span>
    <ul class="dashboard__posts">
      <li class="dashboard__posts_item"></li>
    </ul>
  </section>
</template>

<script>
export default {
  methods: {
    addPost(e) {
      this.$router.push("/admin/dashboard/post");
    },
  },
};
</script>

<style lang="scss">
.dashboard {
  border: 1px solid #ccc;
  &__addPost {
    font-size: 30px;
    position: absolute;
    color: white;
    background-color: blue;
    right: 10px;
    top: 10px;
    cursor: pointer;
    padding: 1px 5px;

    border-radius: 10px;
  }
}
</style>
