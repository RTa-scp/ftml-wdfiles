<script setup lang="ts">
import { getAlltags } from "~/data";
// Get All tags data
const tags = getAlltags();
</script>
<style>
/* modules */
@import url(https://d3g0gp89917ko0.cloudfront.net/v--291054f06006/common--modules/css/wiki/pagestagcloud/PagesTagCloudModule.css);
.pages-tag-cloud-box {
    word-break: break-all;
}
</style>
<template>
  <router-link
    v-for="(data, i) in tags"
    :key="i"
    :to="`/system:page-tags/tag/${data}#${data}`"
    :class="`tag`"
  >{{ data }}
  </router-link>
</template>