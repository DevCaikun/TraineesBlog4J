package cn.trainees.blog.admin.service;

import cn.trainees.blog.admin.model.vo.category.AddCategoryReqVO;
import cn.trainees.blog.admin.model.vo.category.DeleteCategoryReqVO;
import cn.trainees.blog.admin.model.vo.category.FindCategoryPageListReqVO;
import cn.trainees.blog.common.utils.PageResponse;
import cn.trainees.blog.common.utils.Response;

/**
 * @author: 程序员菜鲲
 * @url: www.trainees.cn
 * @date: 2024-12
 * @description: TODO
 **/
public interface AdminCategoryService {
    /**
     * 添加分类
     * @param addCategoryReqVO
     * @return
     */
    Response addCategory(AddCategoryReqVO addCategoryReqVO);

    /**
     * 分类分页数据查询
     * @param findCategoryPageListReqVO
     * @return
     */
    PageResponse findCategoryPageList(FindCategoryPageListReqVO findCategoryPageListReqVO);

    /**
     * 删除分类
     * @param deleteCategoryReqVO
     * @return
     */
    Response deleteCategory(DeleteCategoryReqVO deleteCategoryReqVO);

    /**
     * 获取文章分类的 Select 列表数据
     * @return
     */
    Response findCategorySelectList();

}
