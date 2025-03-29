<template>
  <div>
    Index Page
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
div {
  color: $SystemPrimary;
}
.logo {
  height: 6em;
  padding: 1.5em;
  transition: filter 300ms;
  will-change: filter;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
}
</style>
