import axios from "@/api/axios.ts";

// 获取分类分页数据
export function getCategoryPageList(data:any) {
    return axios.post("/admin/category/list", data)
}

// 添加分类
export function addCategory(data:any) {
    return axios.post("/admin/category/add", data)
}

// 删除分类
export function deleteCategory(id:any) {
    return axios.post("/admin/category/delete", {id})
}

// 获取分类 select 数据
export function getCategorySelectList() {
    return axios.post("/admin/category/select/list")
}