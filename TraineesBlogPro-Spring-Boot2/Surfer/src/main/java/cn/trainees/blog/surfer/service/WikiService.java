package cn.trainees.blog.surfer.service;

import cn.trainees.blog.common.utils.Response;
import cn.trainees.blog.surfer.model.vo.wiki.FindWikiArticlePreNextReqVO;
import cn.trainees.blog.surfer.model.vo.wiki.FindWikiCatalogListReqVO;

/**
 * @author: 程序员菜鲲
 * @url: www.trainees.cn
 * @date: 2024-12
 * @description: 知识库
 **/
public interface WikiService {

    /**
     * 获取知识库
     * @return
     */
    Response findWikiList();

    /**
     * 获取知识库目录
     * @param findWikiCatalogListReqVO
     * @return
     */
    Response findWikiCatalogList(FindWikiCatalogListReqVO findWikiCatalogListReqVO);

    /**
     * 获取上下页
     * @param findWikiArticlePreNextReqVO
     * @return
     */
    Response findArticlePreNext(FindWikiArticlePreNextReqVO findWikiArticlePreNextReqVO);

}
