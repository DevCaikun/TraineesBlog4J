import Index from '@/views/surfer/index.vue'
import ArchiveList from '@/views/surfer/archive-list.vue'
import CategoryList from '@/views/surfer/category-list.vue'
import CategoryArticleList from '@/views/surfer/category-article-list.vue'
import TagList from '@/views/surfer/tag-list.vue'
import TagArticleList from '@/views/surfer/tag-article-list.vue'
import ArticleDetail from '@/views/surfer/article-detail.vue'
import WikiList from '@/views/surfer/wiki-list.vue'
import WikiDetail from '@/views/surfer/wiki-detail.vue'
import NotFound from '@/views/surfer/404.vue'
import Login from '@/views/admin/login.vue'
import AdminIndex from '@/views/admin/index.vue'
import AdminArticleList from '@/views/admin/article-list.vue'
import AdminCategoryList from '@/views/admin/category-list.vue'
import AdminTagList from '@/views/admin/tag-list.vue'
import AdminBlogSettings from '@/views/admin/blog-settings.vue'
import AdminWikiList from '@/views/admin/wiki-list.vue'
import AdminCommentList from '@/views/admin/comment-list.vue'
import Admin from '@/layouts/admin/admin.vue'

let routeOptions = [
    {
        path: '/', // 路由地址，首页
        component: Index, // 对应组件
        meta: { // meta 信息
            title: 'TraineesBlog 首页' // 页面标题
        }
    },
    {
        path: '/archive/list', // 归档页
        component: ArchiveList,
        meta: { // meta 信息
            title: 'TraineesBlog 归档页'
        }
    },
    {
        path: '/category/list', // 分类列表页
        component: CategoryList,
        meta: { // meta 信息
            title: 'TraineesBlog 分类列表页'
        }
    },
    {
        path: '/category/article/list', // 分类文章页
        component: CategoryArticleList,
        meta: { // meta 信息
            title: 'TraineesBlog 分类文章页'
        }
    },
    {
        path: '/tag/list', // 标签列表页
        component: TagList,
        meta: { // meta 信息
            title: 'TraineesBlog 标签列表页'
        }
    },
    {
        path: '/tag/article/list', // 标签列表页
        component: TagArticleList,
        meta: { // meta 信息
            title: 'TraineesBlog 标签文章页'
        }
    },
    {
        path: '/article/:articleId', // 文章详情页
        component: ArticleDetail,
        meta: { // meta 信息
            title: 'TraineesBlog 详情页'
        }
    },
    {
        path: '/wiki/list', // 知识库
        component: WikiList,
        meta: {
            title: 'TraineesBlog 知识库'
        }
    },
    {
        path: '/wiki/:wikiId', // 知识库详情页
        component: WikiDetail,
        meta: {
            title: 'TraineesBlog 知识库详情'
        }
    },
    {
        path: '/login', // 登录页
        component: Login,
        meta: {
            title: 'TraineesBlog 登录页'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: '404 页'
        }
    },
    {
        path: "/admin", // 后台首页
        component: Admin,
        // 使用到 admin.vue 布局的，都需要放置在其子路由下面
        children: [
            {
                path: "/admin/index",
                component: AdminIndex,
                meta: {
                    title: '仪表盘'
                }
            },
            {
                path: "/admin/article/list",
                component: AdminArticleList,
                meta: {
                    title: '文章管理'
                }
            },
            {
                path: "/admin/category/list",
                component: AdminCategoryList,
                meta: {
                    title: '分类管理'
                }
            },
            {
                path: "/admin/tag/list",
                component: AdminTagList,
                meta: {
                    title: '标签管理'
                }
            },
            {
                path: "/admin/blog/settings",
                component: AdminBlogSettings,
                meta: {
                    title: '博客设置'
                }
            },
            {
                path: "/admin/wiki/list",
                component: AdminWikiList,
                meta: {
                    title: '知识库管理'
                }
            },
            {
                path: "/admin/comment/list",
                component: AdminCommentList,
                meta: {
                    title: '评论管理'
                }
            },
        ]

    }
];

export default routeOptions;
