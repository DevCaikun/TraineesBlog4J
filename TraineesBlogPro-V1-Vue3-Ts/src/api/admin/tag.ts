import axios from "@/api/axios.ts";

// 获取标签分页数据
export function getTagPageList(data: any) {
    return axios.post("/admin/tag/list", data)
}

// 添加标签
export function addTag(data: any) {
    return axios.post("/admin/tag/add", data)
}

// 删除标签
export function deleteTag(id: any) {
    return axios.post("/admin/tag/delete", {id})
}

// 根据标签名模糊查询
export function searchTags(key: any) {
    return axios.post("/admin/tag/search", {key})
}

// 获取标签 select 列表数据
export function getTagSelectList() {
    return axios.post("/admin/tag/select/list")
}