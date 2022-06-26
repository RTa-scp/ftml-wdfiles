<script setup lang="ts">
const props = defineProps<{
  createdBy: string;
  createdByUnixName: string;
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
        <td><a :href="to">{{ $props.title }}</a></td>
        <td><a :href="`/user:info/${createdByUnixName}`">{{ $props.createdBy }}</a></td>
        <td>{{ $props.siteUnixName}}</td>
        <td><Tag :tags="$props.tags"/></td>
    </tr>
</template>

