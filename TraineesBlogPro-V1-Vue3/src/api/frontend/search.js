import axios from "@/api/axios";

// 文章搜索
export function getArticleSearchPageList(data) {
    return axios.post("/surfer/article/search", data)
}


