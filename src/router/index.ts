import {createRouter,createMemoryHistory} from 'vue-router'
import B_footer from '../components/Blog-footer.vue'
import B_header from '../components/Blog-Header.vue'
const router = createRouter({
    history:createMemoryHistory(),
    routes: [
        // {
        //     name: 'main',
        //     path: '/',
        //     components: {
        //         me: blog_me,
        //         main: blog_main,
        //         pageNation: blog_pageNation
        //     }
        // },
        // {
        //     name: 'article',
        //     path: '/article/:id',
        //     components: {
        //         article: blog_articlepage
        //     },
        //     props: true
        // },
        {
            name: "editing",
            path: '/editing',
            components: B_footer
        },
        {
            name:'test',
            path:'',
            component:B_header
        }
    ]
})
export default router;