<script setup lang="ts">
import MouseTracker from '../../../../libs/vue-mouse-tracker/src/mouse-tracker.vue';
</script>

<template>
  <div class="card">
    <h1>example mouse</h1>
    <mouse-tracker #default="mouse">{{ `mouse -> x = ${mouse.x}, y = ${mouse.y}` }}</mouse-tracker>
  </div>
</template>

<style scoped>

</style>