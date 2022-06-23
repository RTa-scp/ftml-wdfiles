<script setup lang="ts">
import { capitalizeStr } from "~/utils"

const props = defineProps<{
  tags: Array<string>
}>()
</script>

<template>
    <div class="page-tags">
        <p>
            <router-link
                v-for="(data, i) in $props.tags"
                :key="i"
                :to="`/system:page-tags/tag/${data.toLowerCase()}#${data.toLowerCase()}`"
            >{{ data }}
            </router-link>
        </p>
    </div>
</template>
