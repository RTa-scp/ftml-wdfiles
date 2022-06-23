<script setup lang="ts">
const props = defineProps<{
  createdBy: string;
  tags: Array<string>;
  title: string;
  siteUnixName: string;
  to: string;
  toTags: string;
  originUrl: string;
}>();
</script>

<template>
    <tr>
        <td><router-link :to="to">{{ $props.title }}</router-link></td>
        <td>{{ $props.createdBy }}</td>
        <td>{{ $props.siteUnixName}}</td>
        <td><Tag :tags="$props.tags"/></td>
    </tr>
</template>

