<script setup lang="ts">
import { mouseTracker } from 'vue-mouse-tracker';
</script>

<template>
  <div class="card">
    <h1>example mouse</h1>
    <mouse-tracker #default="mouse">{{ `mouse -> x = ${mouse.x}, y = ${mouse.y}` }}</mouse-tracker>
  </div>
</template>

<style scoped>

</style>