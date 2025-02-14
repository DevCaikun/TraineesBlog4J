package cn.trainees.blog.surfer.controller;

import cn.trainees.blog.common.aspect.ApiOperationLog;
import cn.trainees.blog.common.utils.Response;
import cn.trainees.blog.surfer.model.vo.tag.FindTagArticlePageListReqVO;
import cn.trainees.blog.surfer.model.vo.tag.FindTagListReqVO;
import cn.trainees.blog.surfer.service.TagService;
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
 * @description: 标签
 **/
@RestController
@RequestMapping("/surfer/tag")
@Tag(name = "标签")
public class TagController {

    @Autowired
    private TagService tagService;

    @PostMapping("/list")
    @Operation(summary = "前台获取标签列表")
    @ApiOperationLog(description = "前台获取标签列表")
    public Response findTagList(@RequestBody @Validated FindTagListReqVO findTagListReqVO) {
        return tagService.findTagList(findTagListReqVO);
    }

    @PostMapping("/article/list")
    @Operation(summary = "前台获取标签下文章列表")
    @ApiOperationLog(description = "前台获取标签下文章列表")
    public Response findTagPageList(@RequestBody @Validated FindTagArticlePageListReqVO findTagArticlePageListReqVO) {
        return tagService.findTagPageList(findTagArticlePageListReqVO);
    }

}
