<script setup lang="ts">
import { isClient } from "@vueuse/core"
import { slug, limitString } from "~/utils"
import type { DataShare } from "~/types"

import ftmlWorker from '../../module/ftml.web.worker.js?bundled-worker&dataurl';
import path from "path/posix";

const { frontmatter} = defineProps<{ frontmatter: any}>()

console.log(frontmatter)

let ftml = new Worker(ftmlWorker, {
  type: 'module',
});

// Workerスレッドから受信
ftml.onmessage = (event: MessageEvent) => {
  const {html, style} = event.data;
  const pageContent = document.getElementById('page-content')!;
  pageContent.innerHTML = html.replace("\<wj-body class=\"wj-body\"\>", "").replace("\<\/wj-body\>", "");
};


const router = useRoute()
const routes = router.fullPath
let url: string = ""
if (typeof window !== "undefined") {
  if (import.meta.env.DEV){
    url = window.location.origin + "/public" + routes
  }
  else {
    url = window.location.origin + routes
  }
  
}

fetch(url+".md")
.then(response => response.text())
.then(data => {
  const mdcontent = data
  ftml.postMessage(mdcontent)
});


</script>
<template>
  <div id="page-content">
  </div>
</template>
