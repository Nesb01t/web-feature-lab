<script setup lang="ts">
import { useDialog } from '../../../../libs/vue-func-dialog/src/use-dialog';

const { open } = useDialog({
  onConfirm: () => console.log('confirmed'),
  onClose: () => console.log('closed')
});

const onClick = async () => {
  await open();
  console.log('dialog finished');
};
</script>

<template>
  <div class="card">
    <h1>example func dialog</h1>
    <button @click="onClick">click to render</button>
  </div>
</template>

<style scoped>

</style>