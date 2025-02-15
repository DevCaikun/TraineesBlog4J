import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // 需要引入 path 模块

// https://vite.dev/config/
export default defineConfig({
    plugins: [
      vue(),
      tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'), // 配置 @ 别名指向 src 目录
        }
    },
    server: {
        // 将本地开发服务器监听的端口设置为 9724。你可以根据需要自定义端口号。
        port: 9725,
        // 设置本地开发服务器启动后显示的 IP 访问地址为 0.0.0.0。这样可以使得你可以通过本地网络中的其他设备访问该开发服务器。
        host:"0.0.0.0",
        // 开启跨域资源共享（Cross-Origin Resource Sharing）。允许从其他域名下的网页访问当前域名的资源。
        cors: true,
        // 配置代理跨域，使用代理服务器转发 API 请求。
        proxy: {
            // 设置需要代理的请求路径为以 /api 开头的请求。
            '/api': {
                target: 'http://192.168.1.47:8181',//有以 /api 开头的请求将被转发到该地址。
                // 设置请求头中的 Origin 字段为目标地址。这样可以绕过一些安全限制。
                changeOrigin: true,
                // 如果后端没有处理api路径的前提下
                // 将请求路径中以 /api 开头的部分替换为空字符串。这样可以去除请求路径中的 /api 部分，以符合目标服务器的路由规则。
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
})
