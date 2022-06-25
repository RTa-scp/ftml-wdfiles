<script setup lang="ts">

import ftmlWorker from '../../module/ftml.web.worker.js?bundled-worker&dataurl';

let ftml = new Worker(ftmlWorker, {
  type: 'module',
});

const jsonurl = "https://tech.scp-jp.org/scp-jp/tags/tags.json"
const paramsTag = decodeURI(location.hash.replace("#", ""))

fetch(jsonurl)
.then(response => response.json())
.then(data => {
  const tags = data.filter(dict => dict.tag === paramsTag)
  if (tags.length > 0) {
    document.querySelector("div.tag-desc > div.tag-desc-title > h2 > span > span.tag-desc.tag")!.textContent = tags[0].tag
    document.querySelector("div.tag-desc > div.tag-desc-title > h2 > span > span.tag-desc.category")!.textContent = tags[0].category
    
    ftml.postMessage(tags[0].desc)
  } else {
    console.log("No match")
  }
});

ftml.onmessage = (event: MessageEvent) => {
  const {html, styles } = event.data;
  const tagContent = document.querySelector("#page-content > div.tag-desc > div.tag-desc-body > div > p")!;
  tagContent.innerHTML = html.replace("\<wj-body class=\"wj-body\"\>", "").replace("\<\/wj-body\>", "");
  const tagStyles = document.getElementById('tagStyles')!;
  
  if (styles.length > 0) {
    tagStyles.innerHTML = styles.map((v: string) => `<style>\n${v.replace(/\\</g, '&lt;')}\n</style>`).join("\n\n");
  } else {
    tagStyles.innerHTML = "";
  }
};
</script>
<style>
span.tag-desc.category {
  font-size: 0.8em;
}
span.tag-desc.tag {
  color: red;
}
.tag-desc-title h2 {
  text-align: center;
}
</style>
<template>
  <div class="tag-desc">
    <div class="tag-desc-title">
      <h2>
        <span class="tag-desc-title-text">
          <span class="tag-desc tag"></span>
          <span class="tag-desc category"></span>
        </span>
      </h2>
    </div>
    <div class="tag-desc-body">
      <div class="tag-desc-body-text">
        <p class="tag-desc-body-text">
        </p>
      </div>
    </div>
  </div>
  <div id="tagStyles"></div>
  <hr />
</template>