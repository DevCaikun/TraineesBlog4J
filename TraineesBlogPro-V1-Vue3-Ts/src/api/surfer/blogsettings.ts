import axios from "@/api/axios.ts";

// 获取博客设置详情
export function getBlogSettingsDetail() {
    return axios.post("/surfer/blog/settings/detail")
}


