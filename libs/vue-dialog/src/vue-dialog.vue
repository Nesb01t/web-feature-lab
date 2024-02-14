<script setup lang="ts">
import { computed, onBeforeMount, onMounted, ref } from 'vue';

defineOptions({
  name: 'vue-dialog'
});

const props = defineProps<{ modelValue: boolean }>();
const emit = defineEmits<{
  (e: 'update:modelValue', val: boolean): void;
}>();
const el = ref();
onMounted(() => {
  document.body.appendChild(el.value);
});

const visibleStyle = computed(() => {
  return props.modelValue ? 'display: flex' : 'display: none';
});
</script>

<template>
  <div ref="el" class="vue-dialog" :style="visibleStyle" @click="emit('update:modelValue', false)">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.vue-dialog {
  @apply flex absolute w-full;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
}
</style>