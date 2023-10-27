<template>
    <div id="maincontainer">
        <B_articleOverview v-for="(art) in articleList" :key="art.ID" :title="art.title" :body="art.articleBody"
            :updateTime="art.firstUpdateDate" :lastUpdateTime="art.lastUpdateDate" :artID="art.ID" />
    </div>
</template>
<script setup lang="ts">
import { reactive, onBeforeMount } from "vue";
import B_articleOverview from "../components/Blog-ArticleOverview.vue"
// eslint-disable-next-line
const defaultArticleList: ArticleList = {
    ID: 0,
    firstUpdateDate: '1145-1-4',
    lastUpdateDate: '1145-1-4',
    title: '没有这么多文章喵',
    articleBody: '没有这么多文章喵',
    isDelete: 'N',
    author: 'MMDCCJ'
}
const articleList = reactive([defaultArticleList]);
// 获取文章列表
onBeforeMount(() => {
    console.log('获取文章列表？');
}) 
</script>