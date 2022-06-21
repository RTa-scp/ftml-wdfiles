<script setup lang="ts">
import Footer from "./components/Navigation/Footer.vue";
// In this section, we use @vueuse/head. Check this for more detail
// https://github.com/vueuse/head
</script>

<template>
  <Header />
    <router-view :key="$route.path" />
  <Footer />
</template>
<style>
@import url("/files--static/style/theme.css");
</style>