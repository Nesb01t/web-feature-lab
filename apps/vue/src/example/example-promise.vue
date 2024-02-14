<script setup lang="ts">
import promise from '../../../../libs/vue-promise/src/promise.vue';

const getData = async () => {
  // create request body
  const req = {
    method: 'GET',
    data: 'Hello!'
  };

  // mock a error request
  const res = await new Promise((_, reject) => {
    setTimeout(() => {
      reject(req.data + ' I am resolved!');
    }, 1000);
  });
  console.log(res);

  // return response
  return res;
};

</script>

<template>
  <div class="shadow-2xl rounded-lg p-4">
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