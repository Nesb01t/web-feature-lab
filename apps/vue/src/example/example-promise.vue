<script setup lang="ts">
import { promise } from 'vue-promise';

const getData = () => {
  // create request body
  const req = {
    method: 'GET',
    data: 'Hello!'
  };

  // mock a error request
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(req.data + ' I am resolved!');
    }, 1000);
  });
};

</script>

<template>
  <div class="card">
    <h1>example promise</h1>
    <promise :promise="getData">
      <template #loading>
        <p class="text-indigo-400">loading...</p>
      </template>
      <template #error="errorProps">
        <button class="text-red-500" @click="errorProps.refresh">click to refresh.</button>
      </template>
    </promise>
  </div>
</template>

<style scoped>

</style>