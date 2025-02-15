// import nprogress from "nprogress"
import NProgress from 'nprogress';

import {ElMessage, ElMessageBox} from "element-plus";

// 消息提示
export function showMessage(message = '提示内容', type: 'success' | 'warning' | 'info' | 'error' = 'success', customClass = '') {
    return ElMessage({
        type: type, // 消息类型
        message: message, // 消息内容
        customClass: customClass, // 自定义类名
    });
}

// 确认对话框
export function showModel(content = '提示内容', type: 'success' | 'warning' | 'info' | 'error' = 'warning', title = '') {
    return ElMessageBox.confirm(
        content, // 消息内容
        title, // 标题
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type, // 消息类型
        }
    );
}

// 显示页面加载 Loading
export function showPageLoading() {
    NProgress.start()
}

// 隐藏页面加载 Loading
export function hidePageLoading() {
    NProgress.done()
}