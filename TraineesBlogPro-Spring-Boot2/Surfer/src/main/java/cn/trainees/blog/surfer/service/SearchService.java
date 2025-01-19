package cn.trainees.blog.surfer.service;

import cn.trainees.blog.common.utils.Response;
import cn.trainees.blog.surfer.model.vo.search.SearchArticlePageListReqVO;

/**
 * @author: 程序员菜鲲
 * @url: www.trainees.cn
 * @date: 2024-12
 * @description:
 **/
public interface SearchService {

    /**
     * 关键词分页搜索
     * @param searchArticlePageListReqVO
     * @return
     */
    Response searchArticlePageList(SearchArticlePageListReqVO searchArticlePageListReqVO);
}
