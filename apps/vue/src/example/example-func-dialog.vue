<script setup lang="ts">
import { useDialog } from '../../../../libs/vue-func-dialog/src/use-dialog';

const { open } = useDialog({
  onConfirm: () => console.log('confirmed'),
  onClose: () => console.log('closed')
});
</script>

<template>
  <div class="card">
    <h1>example func dialog</h1>
    <button @click="open()">click to render</button>
  </div>
</template>

<style scoped>

</style>