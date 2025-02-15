import axios from "@/api/axios.ts";

// 获取博客设置详情
export function getBlogSettingsDetail() {
    return axios.post("/admin/blog/settings/detail")
}

// 更新博客设置
export function updateBlogSettings(data:any) {
    return axios.post("/admin/blog/settings/update", data)
}

