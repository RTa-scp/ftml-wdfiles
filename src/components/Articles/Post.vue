<script setup lang="ts">
import { isClient } from "@vueuse/core"
import { slug, limitString } from "~/utils"
import type { DataShare } from "~/types"
import fm from "front-matter"
import yaml, { dump } from "js-yaml"

import ftmlWorker from '../../module/ftml.web.worker.js?bundled-worker&dataurl';
import path from "path/posix";

const { frontmatter} = defineProps<{ frontmatter: any}>()

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
  const { attributes, body } = fm(data)
  ftml.postMessage(body)
  document.querySelector("#page-title")!.textContent = attributes.title
  for (const tag of attributes.tags) {
    document.querySelector("#main-content > div.page-tags > span")!.innerHTML += `<a href="javascript:;">${tag}</a> `
  }
  document.querySelector("#action-area > div > pre")!.textContent = data
});


</script>
<template>
  <div id="page-content">
  </div>
</template>
