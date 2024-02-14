<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { PromiseStatus } from '../type';

defineOptions({
  name: 'Promise'
});

const props = defineProps<{
  promise: () => Promise<any>;
  [key: string]: any;
}>();

const status = ref<PromiseStatus>(PromiseStatus.PENDING);
const refresh = () => {
  status.value = PromiseStatus.PENDING;
  props.promise().then(
    () => {
      status.value = PromiseStatus.FULFILLED;
    }
  ).catch(
    () => {
      status.value = PromiseStatus.REJECTED;
    }
  );
};
onMounted(refresh);
</script>

<template>
  <template v-if="status == PromiseStatus.PENDING">
    <slot name="loading" />
  </template>
  <template v-else-if="status == PromiseStatus.FULFILLED">
    <slot name="success" />
  </template>
  <template v-else-if="status == PromiseStatus.REJECTED">
    <slot name="error" :refresh="refresh" />
  </template>
</template>

<style scoped>

</style>