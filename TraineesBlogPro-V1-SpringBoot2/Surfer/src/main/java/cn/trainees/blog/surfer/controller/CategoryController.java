package cn.trainees.blog.surfer.controller;

import cn.trainees.blog.common.aspect.ApiOperationLog;
import cn.trainees.blog.common.utils.Response;
import cn.trainees.blog.surfer.model.vo.category.FindCategoryArticlePageListReqVO;
import cn.trainees.blog.surfer.model.vo.category.FindCategoryListReqVO;
import cn.trainees.blog.surfer.service.CategoryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author: 程序员菜鲲
 * @url: www.trainees.cn
 * @date: 2024-12
 * @description: 分类
 **/
@RestController
@RequestMapping("/surfer/category")
@Tag(name = "分类")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping("/list")
    @Operation(summary = "前台获取分类列表")
    @ApiOperationLog(description = "前台获取分类列表")
    public Response findCategoryList(@RequestBody @Validated FindCategoryListReqVO findCategoryListReqVO) {
        return categoryService.findCategoryList(findCategoryListReqVO);
    }

    @PostMapping("/article/list")
    @Operation(summary = "前台获取分类下文章分页数据")
    @ApiOperationLog(description = "前台获取分类下文章分页数据")
    public Response findCategoryArticlePageList(@RequestBody @Validated FindCategoryArticlePageListReqVO findCategoryArticlePageListReqVO) {
        return categoryService.findCategoryArticlePageList(findCategoryArticlePageListReqVO);
    }

}
