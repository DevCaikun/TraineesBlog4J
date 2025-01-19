import axios from "@/api/axios";

// 获取知识库列表
export function getWikiList() {
    return axios.post("/surfer/wiki/list")
}

// 获取知识库文章上一页
export function getWikiArticlePreNext(data) {
    return axios.post("/surfer/wiki/article/preNext", data)
}

// 获取知识库目录
export function getWikiCatalogs(id) {
    return axios.post("/surfer/wiki/catalog/list", {id})
}


