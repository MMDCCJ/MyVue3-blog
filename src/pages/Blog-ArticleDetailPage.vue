<template>
    <el-container class="container">
        <el-aside width="16%">
            <ul class="aside" :class="defaultData.asideClass">
                <li v-for="item in defaultData.aside" :key="item" @click="moveToTitle(item.id)" class="asideNav">
                    {{ "\xa0\xa0\xa0\xa0".repeat(item.level) + item.tag.slice(0, 10) }}
                    <span v-if="item.tag.length > 10">...</span>
                </li>
            </ul>
        </el-aside>
        <el-main>
            <article ref="articleContainer" class="article-main">
                <div ref="articleContent" id="content">
                </div>
                {{ defaultData.loading }}
            </article>
        </el-main>
    </el-container>
</template>
<script setup lang="ts">
import { reactive, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { nanoid } from 'nanoid';
import axios from 'axios';
const route = useRoute();
const store = useStore();
const defaultData = reactive({
    artId: '0',
    loading: '现在正在加载中',
    aside: [{}],
    asideClass: {
        asideFix: false
    }
});
onMounted(() => {
    defaultData.artId = route.params.id as string;
    if (defaultData.artId !== '0') {
        axios({
            url: store.state.baseIP + '/api/article/content',
            method: 'GET',
            params: {
                type: "id",
                id: defaultData.artId
            }
        }).then((res) => {
            console.log(res.data);
        })
    }
})
</script>
<style>
.contentBox p {
    line-height: 26px;
    font-size: 18px;
}

.contentBox h1 {
    font-size: 35px;
    margin-bottom: 2rem;
}

.contentBox h2::before {
    content: '-';
}

.container h3::before {
    content: '--';
}

.container h4::before {
    content: '---';
}

.container h5::before {
    content: '----';
}

.contentBox h2 {
    font-size: 28px;
    margin-bottom: 2.5rem;
    font-weight: 800;
    background-image: linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.contentBox h3 {
    margin-bottom: 2rem;
    font-size: 21px;
    background-image: linear-gradient(to right, #83a4d4, #b6fbff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.contentBox p,
.contentBox section {
    /* font-size: 200; */
    /* 缩进 */
    text-indent: 2em;
    /* line-height: 1em; */

}
</style>
<style lang='css' scoped>
.asideFix {}

article {
    color: white;
    /* border: 1px solid #66ccff; */
    margin: 1rem;
}

.asideNav {
    cursor: pointer;
}

.content {
    text-align: left;
    padding-left: 1rem;
}

.content p,
section {
    /* display: block; */
    margin-left: 1rem;
}

.container {
    margin-top: 3rem;
}

li {
    list-style: none;
    color: #213547;
    margin-bottom: 0.5rem;
}

li:last-child {
    height: 4em;
}

ul {
    background-color: #42b883;
    padding: 0;
    padding-top: 2rem;
    border-radius: 0.5rem;
    margin-right: 2%;
}
</style>