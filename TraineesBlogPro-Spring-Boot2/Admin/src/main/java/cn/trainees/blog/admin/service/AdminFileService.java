package cn.trainees.blog.admin.service;

import cn.trainees.blog.common.utils.Response;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author: 程序员菜鲲
 * @url: www.trainees.cn
 * @date: 2024-12
 * @description: TODO
 **/
public interface AdminFileService {
    /**
     * 上传文件
     * @param file
     * @return
     */
    Response uploadFile(MultipartFile file);
}
