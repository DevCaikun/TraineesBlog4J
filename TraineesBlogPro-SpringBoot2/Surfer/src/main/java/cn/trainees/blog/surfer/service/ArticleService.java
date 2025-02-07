package cn.trainees.blog.surfer.service;

import cn.trainees.blog.common.utils.Response;
import cn.trainees.blog.surfer.model.vo.article.FindArticleDetailReqVO;
import cn.trainees.blog.surfer.model.vo.article.FindIndexArticlePageListReqVO;

/**
 * @author: 程序员菜鲲
 * @url: www.trainees.cn
 * @date: 2024-12
 * @description: 文章
 **/
public interface ArticleService {
    /**
     * 获取首页文章分页数据
     * @param findIndexArticlePageListReqVO
     * @return
     */
    Response findArticlePageList(FindIndexArticlePageListReqVO findIndexArticlePageListReqVO);

    /**
     * 获取文章详情
     * @param findArticleDetailReqVO
     * @return
     */
    Response findArticleDetail(FindArticleDetailReqVO findArticleDetailReqVO);

}
