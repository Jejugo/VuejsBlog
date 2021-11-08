<template>
  <div v-if="show" class="subMenu">
    <ul class="subMenu__list">
      <li class="subMenu__list_item">
        <p class="subMenu__list_item_text">teste1</p>
      </li>
      <li class="subMenu__list_item">
        <p class="subMenu__list_item_text">teste1</p>
      </li>
      <li class="subMenu__list_item">
        <p class="subMenu__list_item_text">teste1</p>
      </li>
      <li class="subMenu__list_item">
        <p class="subMenu__list_item_text">teste1</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["show"],
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.subMenu {
  position: fixed;
  background-color: $BLACK;
  width: 200px;
  border-radius: 5px;
  &__list {
    list-style: none;
    padding: 0;
    &_item {
      width: 100%;
      font-size: 18px;
      color: $WHITE;
      cursor: pointer;
      text-align: left;

      &_text{
        padding: 0 10px;
      }
    }

    &_item:hover {
      background-color: $GREY;
      color: $BLACK;
    }
  }
}
</style>