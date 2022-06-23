<script setup lang="ts">
const props = defineProps<{
  title: string;
  to: string;
}>();
</script>

<template>
  <div class="pages-list-item">
    <div class="title">
      <router-link :to="to">{{ $props.title }}</router-link>
    </div>
  </div>
</template>

