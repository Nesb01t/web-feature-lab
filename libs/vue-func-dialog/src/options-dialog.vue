<script setup lang="ts">
const props = defineProps<{
  close: () => void;
}>();
</script>

<template>
  <div class="vue-func-dialog" @click="close">
    <div class="vue-func-dialog__body">functional dialog body</div>
  </div>
</template>

<style lang="scss" scoped>
.vue-func-dialog {
  @apply absolute w-full flex items-center justify-center;
  height: 100vh;

  &__body {
    @apply shadow-2xl rounded-2xl p-8 bg-white;
  }
}
</style>