<script setup lang="ts">
import { isClient } from "@vueuse/core"
import { slug, limitString } from "~/utils"
import type { DataShare } from "~/types"
// import fm from "front-matter"

import ftmlWorker from '../../module/ftml.web.worker.js?bundled-worker&dataurl';
import fmWorker from '../../module/frontmatter.worker.js?bundled-worker&dataurl';
import path from "path/posix";

const { frontmatter } = defineProps<{ frontmatter: any}>()

// console.log(frontmatter)

let ftml = new Worker(ftmlWorker, {
  type: 'module',
});

let fm = new Worker(fmWorker, {
  type: 'module',
});

// Workerスレッドから受信
ftml.onmessage = (event: MessageEvent) => {
  const {html, style} = event.data;
  const pageContent = document.getElementById('page-content')!;
  pageContent.innerHTML = html.replace("\<wj-body class=\"wj-body\"\>", "").replace("\<\/wj-body\>", "");
};

fm.onmessage = (event: MessageEvent) => {
  // console.log(event.data);
  const {attributes, body} = event.data;
  ftml.postMessage(body)
}

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

fetch(url+".ftml")
.then(response => response.text())
.then(data => {
  fm.postMessage(data)
  document.querySelector("#page-title")!.textContent = frontmatter.title
  for (const tag of frontmatter.tags) {
    document.querySelector("#main-content > div.page-tags > span")!.innerHTML += `<a href="javascript:;">${tag}</a> `
  }
  document.querySelector("#action-area > div > pre")!.textContent = data
  // ftml.postMessage(data)
});


</script>
<template>
  <div id="page-content">
  </div>
</template>
