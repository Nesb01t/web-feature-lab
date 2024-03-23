<script setup lang="ts">
import { ref } from 'vue';
import { useMouse } from '@vueuse/core';
import { useRouteQuery } from '@vueuse/router';

const { x, y } = useMouse();

enum ViewType {
  Card = 'card',
  Map = 'map',
}

const viewType = useRouteQuery<ViewType>('card');
</script>

<template>
  <div class="about">
    <h1>卡片列表</h1>
    <router-link to="/upload">
      点击到上传页面
    </router-link>
    {{ x }}, {{ y }}

    <div>
      当前的视图为 {{ viewType }}
    </div>
  </div>
</template>

<style>
</style>
