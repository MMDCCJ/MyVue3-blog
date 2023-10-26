<template>
    <el-row>
        <el-col :span="24" justify="end">
            <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false" id="TopNavicate">
                <!-- 该div将菜单撑到右边 -->
                <div style="flex-grow: 1;" />
                <el-menu-item index="3">
                    <a> 文 章 编 辑 </a>
                </el-menu-item>
                <el-menu-item index="2">
                    <a> 管 理 </a>
                </el-menu-item>
                <el-menu-item index="1" @click="toMainPage">
                    <a>主 页</a>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
// 定义数据
const activeIndex = ref('1');
const route = useRoute();
onMounted(() => {
    const routeName = route.name;
    console.log(routeName);

})
const toMainPage = () => {
    console.log(route.name);

}
</script>
<style scoped>
#TopNavicate {
    opacity: 0.5;
    /* background-color: #3380ff !important; */
    background-color: #130f0c;
    border-bottom: 0;
}

#TopNavicate>li {
    float: right;
    font-size: 18px;
    color: white !important;

}

#TopNavicate:first-child {
    padding-right: 90px;
}

* {
    text-decoration: none;
}
</style>