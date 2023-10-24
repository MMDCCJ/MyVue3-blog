import {createRouter,createMemoryHistory} from 'vue-router'
import B_footer from '../components/Blog-footer.vue'
import B_AboutMe from '../pages/Blog-AboutMe.vue'
const router = createRouter({
    history:createMemoryHistory(),
    routes: [
        {
            name:'主页',
            path: '',
            components: {
                me: B_AboutMe
                // main: blog_main,
                // pageNation: blog_pageNation
            }
        },
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
        }
    ]
})
export default router;