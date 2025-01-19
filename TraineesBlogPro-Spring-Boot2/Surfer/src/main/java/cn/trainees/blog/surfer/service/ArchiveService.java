package cn.trainees.blog.surfer.service;

import cn.trainees.blog.common.utils.Response;
import cn.trainees.blog.surfer.model.vo.archive.FindArchiveArticlePageListReqVO;

/**
 * @author: 程序员菜鲲
 * @url: www.trainees.cn
 * @date: 2024-12
 * @description: 归档文章
 **/
public interface ArchiveService {
    /**
     * 获取文章归档分页数据
     * @param findArchiveArticlePageListReqVO
     * @return
     */
    Response findArchivePageList(FindArchiveArticlePageListReqVO findArchiveArticlePageListReqVO);
}
