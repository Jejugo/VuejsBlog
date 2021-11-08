<template>
  <section class="frontend">
    <div class="frontend__header">
      <h2 class="frontend__header_title">{{ title }}</h2>
      <hr class="frontend__header_line" />
    </div>
  </section>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="scss">
.frontend {
  &__header {
    display: flex;
    align-items: center;
    &_title {
      text-align: left;
    }

    &_line {
      flex-grow: 1;
      height: 0.1px;
      opacity: 0.5;
      margin-left: 5px;
    }
  }
}
</style>