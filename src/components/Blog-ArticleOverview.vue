<template>
    <div id="container" @click="routeToArticle">
        <div id="title">
            <h2>{{ title }}</h2>
        </div>
        <div id="preview">
            <p>{{ body }}</p>
        </div>

        <p id="time">发布时间&nbsp; {{ updateTime }} &nbsp;最后更新时间&nbsp; {{ lastUpdateTime }}</p>
    </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const props = defineProps(["title",
    "body",
    "updateTime",
    "lastUpdateTime",
    "artID"])

const routeToArticle = () => {
    router.push({
        name: "文章详情",
        params: { id: props.artID }
    })
}

</script>