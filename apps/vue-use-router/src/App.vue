<template>
  <ol>
    <router-link to="/?card=card">
      <li>
        Card (Card)
      </li>
    </router-link>
    <router-link to="/?card=view">
      <li>
        Card (Map)
      </li>
    </router-link>
    <router-link to="/upload">
      <li>
        Upload
      </li>
    </router-link>
  </ol>

  <router-view v-slot="{ Component, route }">
    <Transition mode="out-in">
      <component :is="Component" :key="route.path" />
    </Transition>
  </router-view>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

ol {
  list-style-type: none;
  display: flex;
  background-color: palevioletred;
  color: white;
}

ol li {
  background-color: palevioletred;
  border-left: darkcyan 2px solid;
  padding: 14px 14px 14px 16px;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

ol li:hover {
  background-color: rgba(255, 255, 255, 0.8);
  color: #333333;
}
</style>
<script setup>
</script>
