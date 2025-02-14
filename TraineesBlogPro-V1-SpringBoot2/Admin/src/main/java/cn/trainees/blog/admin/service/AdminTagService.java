package cn.trainees.blog.admin.service;

import cn.trainees.blog.admin.model.vo.tag.AddTagReqVO;
import cn.trainees.blog.admin.model.vo.tag.DeleteTagReqVO;
import cn.trainees.blog.admin.model.vo.tag.FindTagPageListReqVO;
import cn.trainees.blog.admin.model.vo.tag.SearchTagsReqVO;
import cn.trainees.blog.common.utils.PageResponse;
import cn.trainees.blog.common.utils.Response;

/**
 * @author: 程序员菜鲲
 * @url: www.trainees.cn
 * @date: 2024-12
 * @description: TODO
 **/
public interface AdminTagService {

    /**
     * 添加标签集合
     * @param addTagReqVO
     * @return
     */
    Response addTags(AddTagReqVO addTagReqVO);

    /**
     * 查询标签分页
     * @param findTagPageListReqVO
     * @return
     */
    PageResponse findTagPageList(FindTagPageListReqVO findTagPageListReqVO);

    /**
     * 删除标签
     * @param deleteTagReqVO
     * @return
     */
    Response deleteTag(DeleteTagReqVO deleteTagReqVO);

    /**
     * 根据标签关键词模糊查询
     * @param searchTagsReqVO
     * @return
     */
    Response searchTags(SearchTagsReqVO searchTagsReqVO);

    /**
     * 查询标签 Select 列表数据
     * @return
     */
    Response findTagSelectList();
}
