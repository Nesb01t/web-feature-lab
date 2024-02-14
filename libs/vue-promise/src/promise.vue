<script setup lang="ts">
import { ref } from 'vue';
import { type PromiseStatus } from '../type';

defineOptions({
  name: 'Promise'
});

const props = defineProps<{}>();

const status = ref<PromiseStatus>();
</script>

<template>
  <template v-if="status == PromiseStatus.PENDING">
    <slot name="loading" />
  </template>
  <template v-else-if="status == PromiseStatus.FULFILLED">
    <slot name="success" />
  </template>
  <template v-else-if="status == PromiseStatus.REJECTED">
    <slot name="error" />
  </template>
</template>

<style scoped>

</style>