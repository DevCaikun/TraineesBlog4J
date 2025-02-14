import axios from "@/api/axios";

// 获取分类列表
export function getCategoryList(data) {
    return axios.post("/surfer/category/list", data)
}

// 获取分类-文章列表
export function getCategoryArticlePageList(data) {
    return axios.post("/surfer/category/article/list", data)
}


