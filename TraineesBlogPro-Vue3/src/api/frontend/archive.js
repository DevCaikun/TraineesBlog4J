import axios from "@/api/axios";

// 获取文章归档分页数据
export function getArchivePageList(data) {
    return axios.post("/surfer/archive/list", data)
}


