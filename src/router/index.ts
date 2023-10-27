import { createRouter, createMemoryHistory } from 'vue-router'
import B_aboutMe from '../pages/Blog-AboutMe.vue'
import B_articleDetailPage from '../pages/Blog-ArticleDetailPage.vue'
import B_articleList from '../pages/Blog-ArticleList.vue'
import B_articleEditor from '../components/Blog-ArticleEditor.vue'
const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            name: '主页',
            path: '',
            components: {
                me: B_aboutMe,
                articleList: B_articleList,
                // pageNation: blog_pageNation
            }
        },
        {
            name: '文章详情',
            path: '/article/:id',
            components: {
                article: B_articleDetailPage
            },
        },
        {
            name: '文章编辑',
            path: '/articleEditor',
            components: {
                articleEditor: B_articleEditor
            },
        }
    ]
})
export default router;