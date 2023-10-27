<template>
    <div class="container">
        <div class="titleEdit">
            <h2>标题</h2>
            <el-radio class="radioClass" key="1" v-model="editType" label="new" border>新文章</el-radio>
            <el-radio class="radioClass" key="2" v-model="editType" label="old" border>修改旧文</el-radio>
            <!-- 查询方式 -->
            <transition>
                <el-select v-if="editType === 'old'" class="SelectInput" v-model="queryBy" placeholder="请选择">
                    <el-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </transition>
            <!-- 搜索按钮 -->
            <transition>
                <el-button @keydown.enter="searchArticle" @click="searchArticle" v-if="editType === 'old'" class="searchBtn"
                    :icon="Search" circle></el-button>
            </transition>
            <transition>
                <el-input v-if="editType === 'old'" class="IDInput" type="text" :placeholder="inputTips"
                    v-model="articleData.idOrTitle" maxlength="10" show-word-limit>
                </el-input>
            </transition>

        </div>
        <!-- 按标题查询 -->
        <el-input class="articleInput" type="text" placeholder="请输入标题" v-model="articleData.title" maxlength="50"
            show-word-limit>
        </el-input>
        <div class="contentInput">
            <h2>文章梗概</h2>
        </div>
        <el-row>
            <el-input type="text" placeholder="请输入文章梗概" v-model="articleData.about" maxlength="50" show-word-limit
                :span="24">
            </el-input>
        </el-row>
        <div class="contentInput">
            <h2>文章主体</h2>
        </div>
        <div class="textAreaContainer">
            <el-input class="textArea" type="textarea" :autosize="{ minRows: 20, maxRows: 100 }" placeholder="请输入内容"
                v-model="articleData.textarea">
            </el-input>
            <div ref="miniArticle" class="miniArticle"></div>
        </div>

        <div class="contentInput">
            <h2 class="lay10">文章类型</h2>
            <h2 class="lay14">作者</h2>
        </div>
        <el-row class="authorEdit">
            <el-col :span="10">
                <el-autocomplete class="inline-input" v-model="articleData.typeData" :fetch-suggestions="querySearch"
                    placeholder="请输入文章类型"></el-autocomplete>
            </el-col>
            <el-col :span="14">
                <el-input class="articleInput" type="text" placeholder="请输入作者" v-model="articleData.author" maxlength="20"
                    show-word-limit></el-input>
            </el-col>
        </el-row>
        <el-row class="btns">
            <el-col :span="10">
                <el-popconfirm v-if="editType == 'new'" @confirm="uploadArticle" class="commitBtn" confirm-button-text='好的'
                    cancel-button-text='稍后' icon="el-icon-question" icon-color="#66ccff" title="确定上传当前内容吗？">
                    <template #reference>
                        <el-button>确定</el-button>
                    </template>
                </el-popconfirm>
                <el-popconfirm v-if="editType == 'old'" @confirm="updateArticle" class="commitBtn" confirm-button-text='好的'
                    cancel-button-text='稍后' icon="el-icon-question" icon-color="#66ccff" title="确定上传当前内容吗？">
                    <template #reference>
                        <el-button>确定</el-button>
                    </template>
                </el-popconfirm>
                <el-button type="primary" @click="saveArticleDraft(`btn`)" class="saveDraft">保存草稿</el-button>
                <el-button type="primary" @click="clearArticleDraft">清除草稿</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { ElMessage } from "element-plus";
import { Search } from '@element-plus/icons-vue'
// 编辑文章的模式 new - 新建 old - 修改旧文
const editType = ref("new");
// 查询待修改旧文的方式 通过id或者通过标题
const queryBy = ref("id");
// 下拉选框的选项
const selectOptions = reactive(
    [{
        value: 'id',
        label: 'id查询'
    },
    {
        value: 'title',
        label: '标题查询'
    }])
const articleData = reactive({
    title: '',
    // 文章的类型
    typeData: '',
    // 文章本体
    textarea: '',
    author: '',
    // 暂时不知道这是什么
    about: '',
    // 文章的id或者标题，取决于查询方式
    idOrTitle: ''
})
const articleType = reactive([
    { value: '代码类' },
    { value: '教程类' },
    { value: '笔记类' },
    { value: '其他' }
])
const inputTips = computed(() => {
    if (queryBy.value == 'id') {
        return '请输入文章id'
    } else if (queryBy.value == 'title') {
        return '请输入文章标题'
    } else {
        {
            return '未知'
        }
    }
})
const searchArticle = () => {
    console.log();
}
const uploadArticle = () => {
    console.log();
}
const updateArticle = () => {
    console.log();
}
/**
 * 清空文章草稿
 */
const clearArticleDraft = () => {
    localStorage.removeItem('articleDraft')
    clearArticleData()
    ElMessage({
        message: '清除成功',
        type: 'success'
    })
}
/**
 * 清除vue中articleData中的数据
 */
const clearArticleData = () => {
    articleData.title = ''
    articleData.typeData = ''
    articleData.textarea = ''
    articleData.author = ''
    articleData.about = ''
    articleData.idOrTitle = ''
}
/**
 * 保存文章草稿
 * @param msg 调用函数者 
 */
const saveArticleDraft = (msg: string) => {
    if (msg === "btn") {
        ElMessage({
            message: '保存草稿成功',
            type: 'success'
        });
    }
}

// 以下两个方法为建议框需要的方法
const querySearch = function (queryString: string, cb: (arg0: { value: string; }[]) => void) {
    let type = articleType;
    let results = queryString ? type.filter(createFilter(queryString)) : type;
    // 调用 callback 返回建议列表的数据
    cb(results);
}
const createFilter = function (queryString: string) {
    return (type: { value: string; }) => {
        return (type.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
    };
}
</script>
<style lang='css' scoped>
.radioClass {
    margin-right: 0.8rem;
}

.searchBtn {
    margin-right: 0.5rem;
}

.saveDraft {
    margin-left: 3rem;
}

.btns {
    margin-top: 2rem;
}

/* 布局用 */
.lay10 {
    flex: 10 !important;
}

.lay14 {
    flex: 14 !important;
}

.textAreaContainer {
    display: flex;
}

.textAreaContainer>.textArea {
    flex: 1;
    margin-right: 1rem;
}

.textAreaContainer>.miniArticle {
    flex: 2;
    background-color: white;
}

.textAreaContainer>.miniArticle h1 {
    font-size: 16px !important;
}

.textAreaContainer>.miniArticle p {
    font-size: 10px !important;
}

.textAreaContainer>.miniArticle h2 {
    font-size: 14px !important;
}

.commitBtn {
    margin-top: 2rem;
}

.v-enter-active {
    animation: Move 0.3s reverse;
    animation-timing-function: ease-in;
}

.v-leave-active {
    animation: Move 0.2s;
    animation-timing-function: ease-out;
}

@keyframes Move {
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(100%);
    }
}

.radioMove {
    animation: rightLeft 0.25s;
    animation-timing-function: ease-out;
}

.radioOut {
    animation: rightLeft 0.25s reverse;
    animation-timing-function: ease-in;
}

@keyframes rightLeft {
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0);
    }

}

.contentInput {
    display: flex;
}

.contentInput>h2 {
    flex: 1;

}

.IDInput {
    width: 25%;
}

.SelectInput {
    width: 15%;
    margin-right: 1rem;
}

.container {
    display: flex;
    flex-flow: column;
    width: 70%;
    margin: auto;
    margin-top: 3rem;
}

h2 {
    color: white;
    display: inline;
    margin-right: 2rem;
    width: 2rem;
}

.titleEdit>h2 {
    flex: 1
}

.titleEdit {
    height: 4rem;
    display: flex;
    vertical-align: middle;
    align-items: center;
}

.articleInput {
    margin-bottom: 1rem;
}
</style>