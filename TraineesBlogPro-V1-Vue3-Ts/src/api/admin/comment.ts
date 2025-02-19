import axios from "@/api/axios.ts";

// 获取评论分页数据
export function getCommentPageList(data: any) {
    return axios.post("/admin/comment/list", data)
}

// 删除评论
export function deleteComment(id: any) {
    return axios.post("/admin/comment/delete", {id})
}

// 审核评论
export function examineComment(data: any) {
    return axios.post("/admin/comment/examine", data)
}

