<script setup lang="ts">
import { isClient } from "@vueuse/core"
import { getRelatedArticles } from "~/data"
import { slug, limitString } from "~/utils"
import type { DataShare } from "~/types"

import ftmlWorker from '../../module/ftml.web.worker.js?bundled-worker&dataurl';

const { frontmatter, content } = defineProps<{ frontmatter: any, content: any}>()
console.log(frontmatter, content)


let ftml = new Worker(ftmlWorker, {
  type: 'module',
});

// Workerスレッドから受信
ftml.onmessage = (event: MessageEvent) => {
  const {html, style} = event.data;
  console.log(html, style);
};
ftml.postMessage("value");


const router = useRoute()
const routes = router.fullPath
let url: string = ""
if (typeof window !== "undefined") {
  url = window.location.origin + routes
}


</script>
<template>
  <div class="py-5 px-4">
    <h1
      class="mb-5 text-transparent bg-clip-text bg-gradient-to-r text-center font-bold text-5xl from-elucidator-500 to-elucidator-700 dark:from-dark-repulser-500 dark:to-dark-repulser-300 md:block"
    >
      {{ frontmatter.name }}
    </h1>
    <p class="text-center font-normal mb-5 text-dark-100 dark:text-elucidator-50">
      {{ frontmatter.description }}
    </p>
    <div class="flex flex-row flex-wrap justify-center">
      <p class="text-center text-dark-100 font-light mb-5 dark:text-elucidator-50">
        {{ new Date(frontmatter.date).toDateString() }}
      </p>
    </div>
    <div
      class="mt-5 mb-5 text-elucidator-500 divide-y dark:text-elucidator-50"
      style="border-bottom: 1px solid #63c0b6"
    >
    <slot/>
    </div>
  </div>
</template>
