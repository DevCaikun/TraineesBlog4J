import axios from "@/api/axios";

// 获取 QQ 用户信息
export function getUserInfoByQQ(qq) {
    return axios.post("/surfer/comment/qq/userInfo", {qq})
}

// 发布评论
export function publishComment(data) {
    return axios.post("/surfer/comment/publish", data)
}

// 获取所有评论
export function getComments(routerUrl) {
    return axios.post("/surfer/comment/list", {routerUrl})
}



