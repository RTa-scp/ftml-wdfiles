<script setup lang="ts">
console.log("not found")
</script>
<template>
  <div id="content-wrap">
    <Side />
    <div id="main-content">
      <div id="page-title"></div>
      <div id="page-content"></div>
      <div class="page-tags">
        <span> </span>
      </div>
      <div id="page-info-break">
        <div id="page-styles"></div>
      </div>
      <div id="page-options-container">
        <div id="page-options-bottom" class="page-options-bottom">
          <details class="btn btn-default" id="view-source-button">
            <summary>Page Source</summary>
            <div id="action-area">
              <h1>Page source</h1>
              <div class="page-source">
                <pre class="page-source-code"></pre>
              </div>
            </div>
          </details>
        </div>

        <div id="page-options-area-bottom"></div>
      </div>
    </div>
  </div>
</template>
