import axios from "@/api/axios.ts";

// 登录接口
export function login(username: any, password: any) {
    return axios.post("/login", {username, password})
}

// 获取登录用户信息
export function getUserInfo() {
    return axios.post("/admin/user/info")
}

// 修改用户密码
export function updateAdminPassword(data: any) {
    return axios.post("/admin/password/update", data)
}