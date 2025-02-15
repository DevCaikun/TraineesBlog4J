import axios from "@/api/axios.ts";

// 上传文件
export function uploadFile(form: any) {
    return axios.post("/admin/file/upload", form)
}

