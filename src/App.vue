<script setup lang="ts">
// In this section, we use @vueuse/head. Check this for more detail
// https://github.com/vueuse/head
useHead({
  title: "Elucidator Blog Starter",
  meta: [
    {
      name: "description",
      content: "Elucidator blog starter for vue and vite",
    },
  ],
})
</script>

<template>
  <router-view :key="$route.path" />
</template>
