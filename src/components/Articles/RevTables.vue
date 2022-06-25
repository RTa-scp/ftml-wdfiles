<script setup lang="ts">
const props = defineProps<{
  createdBy: string;
  title: string;
  createdUnixAt: string;
  siteUnixName: string;
  to: string;
  toSite: string;
}>();
</script>

<template>
  <div class="changes-list-item">
    <table>
      <tbody>
        <tr>
          <td class="site"><a :href="$props.toSite">{{ $props.siteUnixName }}</a></td>
          <td class="title"><a :href="to">{{ $props.title }}</a></td>
          <td class="flags"><span class="spantip" title="">N</span></td>
          <td class="mod-date"><span>{{ $props.createdUnixAt}}</span></td>
          <td class="revision-no">(new)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

