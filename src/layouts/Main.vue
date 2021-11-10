<template>
  <div class="layout">
    <slot></slot>
  </div>
</template>

<style>
.layout {
  position: relative;
  margin: 0 auto;
  padding: 10vh 0;
  width: 60%;
  min-height: calc(100vh - 100px);
}
</style>