<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const [x, y] = [ref(0), ref(0)];
const onMove = (event: MouseEvent) => {
  x.value = event.clientX;
  y.value = event.clientY;
};

onMounted(() => {
  window.addEventListener('mousemove', onMove);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', onMove);
});
</script>

<template>
  <slot :x="x" :y="y" />
</template>

<style scoped>

</style>