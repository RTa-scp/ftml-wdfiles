<script setup lang="ts">
import { isDark } from "~/utils";

const props = defineProps<{
  startPage: number;
  endPage: number;
  mid: Array<number>;
  currentPage: number;
  clickStartPage: () => void;
  clickPaginate: (paginate: number) => void;
  clickEndPage: () => void;
}>();
</script>

<template>
  <div class="pager"  v-if="$props.endPage > $props.startPage">
    <span class="target" @click="clickStartPage"><a >« {{ $props.startPage }}</a></span>
    <span class="target"  v-for="(paginate, i) in $props.mid" :key="i" @click="clickPaginate(paginate)"><a>{{ paginate }}</a></span>
    <span class="target" @click="clickEndPage"><a>{{ $props.endPage }} »</a></span>
  </div>
</template>