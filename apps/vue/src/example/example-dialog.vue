<script setup lang="ts">
import VueDialog from '../../../../libs/vue-dialog/src/vue-dialog.vue';
import { ref } from 'vue';

const show = ref(false);
</script>
<template>
  <div class="card">
    <h1>example dialog</h1>
    <button @click="show = true">click to show</button>
    <vue-dialog v-model="show" />
  </div>
</template>

<style scoped>

</style>