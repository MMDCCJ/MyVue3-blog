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
<style lang='css' scoped>
img {
    height: 50px;
}
#container:hover{
    filter: brightness(1.3);
    cursor: pointer;
}
#container {
    background-color: #130f0c;
    color: white;
    width: 32%;
    height: 20%;
    /* border: 1px solid white; */
    margin: 4% auto 4%;
    display: flex;
    flex-direction: column;
    border-radius: 40px;
    box-shadow:6px 6px 10px black;

}
p{
    font-size: 18px;
    margin-top: 2%;
    /* margin-top: 35px; */
}
h2,
p {
    margin-left: 10%;
    cursor: pointer;
}
h2{
    margin: 0,0;
    margin-top:10%;
    font-size: 25px;
}
#title {
    height: 30%;
    line-height: 50%;
    font-size: 21px;
}

#preview {
    height: 35%;
    /* line-height: 2.4rem; */
}

#time {
    text-align: right;
    margin-right: 10%;
    font-size: 10px;
    margin-bottom: 6%;
}
</style>