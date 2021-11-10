<template>
  <div class="wrapper">
    <label for="input" class="wrapper__label">{{ label }}</label>
    <input
      id="input"
      class="wrapper__input"
      :name="name"
      :placeholder="placeholder"
      v-model="text"
    />
  </div>
</template>

<script>
export default {
  props: ["label", "placeholder", "name"],
  data() {
    return {
      text: "",
    };
  },

  watch: {
    text: function (value) {
      this.$emit("titleType", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  &__input {
    display: block;
    width: 50%;
    padding: 2px;
    margin: 50px auto 20px;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    font-size: 20px;
  }
}
</style>