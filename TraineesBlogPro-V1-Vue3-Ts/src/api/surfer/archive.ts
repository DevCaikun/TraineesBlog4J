import axios from "@/api/axios.ts";

// 获取文章归档分页数据
export function getArchivePageList(data: any) {
    return axios.post("/surfer/archive/list", data)
}


