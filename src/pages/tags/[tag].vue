
<script setup lang="ts">
import { getArticlesTags, getParams, paginateData } from "~/data"
import { slug, limitString } from "~/utils"
import TagDescription from "~/components/customcomponent/TagDescription.vue";

const paramsTag: any = getParams("tag")

// Get tags paginate data
const currentPage = ref<number>(1)
const tags = getArticlesTags([paramsTag])
const dataTags = computed(() => {
  const paginate = paginateData({
    articles: tags,
    currentPage: currentPage.value,
    pageSize: 10000000,
  })

  return paginate
})

// Pagination
const clickStartPage = () => {
  currentPage.value = dataTags.value.startPage
}
const clickPaginate = (paginate: number) => {
  currentPage.value = paginate
}
const clickEndPage = () => {
  currentPage.value = dataTags.value.endPage
}
</script>
<template>
  <div id="content-wrap">
    <Side />
    <div id="main-content">
      <div id="page-title">Page Tags</div>
      <div id="page-content">
        <TagDescription />
        <div style="float:right; width: 50%;">
          <div class="pages-tag-cloud-box">
            <TagCloud />
          </div>
        </div>
        <h2>
          List of pages tagged with {{ paramsTag }} ({{ tags.length }}):
        </h2>
        <a name="pages"></a>
        <ListPages
          v-for="(data, i) in dataTags.listArticles"
          :key="i"
          :title="data.meta.frontmatter.title"
          :to="data.path"
        />
      </div>
    </div>
  </div>
</template>