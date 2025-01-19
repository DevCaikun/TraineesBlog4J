package cn.trainees.blog.surfer.service;

import cn.trainees.blog.common.utils.Response;
import cn.trainees.blog.surfer.model.vo.tag.FindTagArticlePageListReqVO;
import cn.trainees.blog.surfer.model.vo.tag.FindTagListReqVO;

/**
 * @author: 程序员菜鲲
 * @url: www.trainees.cn
 * @date: 2024-12
 * @description: 分类
 **/
public interface TagService {
    /**
     * 获取标签列表
     * @return
     */
    Response findTagList(FindTagListReqVO findTagListReqVO);

    /**
     * 获取标签下文章分页列表
     * @param findTagArticlePageListReqVO
     * @return
     */
    Response findTagPageList(FindTagArticlePageListReqVO findTagArticlePageListReqVO);
}
