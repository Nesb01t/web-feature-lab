<script setup lang="ts">
import VueDialog from '../../../../libs/vue-dialog/src/vue-dialog.vue';
import { ref } from 'vue';

const show = ref(false);
</script>
<template>
  <div class="card">
    <h1>example dialog</h1>
    <button @click="show = true">click to show</button>
    <vue-dialog v-model="show">
      <div class="!w-[400px] card">
        <h1>hello dialog!</h1>
        <button @click="show = false">click to close</button>
      </div>
    </vue-dialog>
  </div>
</template>

<style scoped>

</style>