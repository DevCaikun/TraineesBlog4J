import axios from "@/api/axios";

// 获取标签列表
export function getTagList(data) {
    return axios.post("/surfer/tag/list", data)
}

// 获取标签下文章列表
export function getTagArticlePageList(data) {
    return axios.post("/surfer/tag/article/list", data)
}


