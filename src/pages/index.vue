<script setup lang="ts">
import { getArticles, paginateData } from "~/data";
import { slug, limitString } from "~/utils";
// Get articles data
const currentPage = ref<number>(1);
const articles = computed(() => {
  const articles = getArticles();
  const paginate = paginateData({
    articles: articles,
    currentPage: currentPage.value,
    pageSize: 20,
  });
  return paginate;
});
// Pagination
const clickStartPage = () => {
  currentPage.value = articles.value.startPage;
};
const clickPaginate = (paginate: number) => {
  console.log(paginate);
  currentPage.value = paginate;
};
const clickEndPage = () => {
  currentPage.value = articles.value.endPage;
};
</script>

<template>
  <div id="content-wrap">
    <Side />
    <div id="main-content">
      <div id="page-content">
        <div>
            <h1>
            All Articles
            </h1>
            <h3>
            Total articles: {{ getArticles().length }}
            </h3>
        </div>

        <div class="list-pages-box">
            <table class="wiki-content-table">
            <tbody>
                <tr>
                <th>Title</th>
                <th>CreatedBy</th>
                <th>Site</th>
                <th>Tag</th>
                </tr>
                <Article
                v-for="(data, i) in articles.listArticles"
                :key="i"
                :siteUnixName="data.meta.frontmatter.siteUnixName"
                :tags="data.meta.frontmatter.tags"
                :title="data.meta.frontmatter.title"
                :to="data.path"
                :to-tags="`/system:page-tags/tag/${data.meta.frontmatter.tags}`"
                :createdBy="data.meta.frontmatter.createdBy"
                />
            </tbody>
            </table>
            <Paginate
                :start-page="articles.startPage"
                :end-page="articles.endPage"
                :mid="articles.mid"
                :current-page="currentPage"
                :click-start-page="clickStartPage"
                :click-paginate="clickPaginate"
                :click-end-page="clickEndPage"
            />
        </div>
      </div>
    </div>
  </div>
</template>