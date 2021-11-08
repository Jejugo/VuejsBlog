<template>
  <div class="layout">
    <slot></slot>
  </div>
</template>

<style>
.layout {
  margin: 10vh auto;
  width: 60%;
  min-height: calc(100vh - 100px);
}
</style>