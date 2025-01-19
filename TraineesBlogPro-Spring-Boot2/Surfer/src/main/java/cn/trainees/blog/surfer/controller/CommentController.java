package cn.trainees.blog.surfer.controller;

import cn.trainees.blog.common.aspect.ApiOperationLog;
import cn.trainees.blog.common.utils.Response;
import cn.trainees.blog.surfer.model.vo.comment.FindCommentListReqVO;
import cn.trainees.blog.surfer.model.vo.comment.FindQQUserInfoReqVO;
import cn.trainees.blog.surfer.model.vo.comment.PublishCommentReqVO;
import cn.trainees.blog.surfer.service.CommentService;
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
 * @description: 评论
 **/
@RestController
@RequestMapping("/surfer/comment")
@Tag(name = "评论")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping("/qq/userInfo")
    @Operation(summary = "获取 QQ 用户信息")
    @ApiOperationLog(description = "获取 QQ 用户信息")
    public Response findQQUserInfo(@RequestBody @Validated FindQQUserInfoReqVO findQQUserInfoReqVO) {
        return commentService.findQQUserInfo(findQQUserInfoReqVO);
    }

    @PostMapping("/publish")
    @Operation(summary = "发布评论")
    @ApiOperationLog(description = "发布评论")
    public Response publishComment(@RequestBody @Validated PublishCommentReqVO publishCommentReqVO) {
        return commentService.publishComment(publishCommentReqVO);
    }

    @PostMapping("/list")
    @Operation(summary = "获取页面所有评论")
    @ApiOperationLog(description = "获取页面所有评论")
    public Response findPageComments(@RequestBody FindCommentListReqVO findCommentListReqVO) {
        return commentService.findCommentList(findCommentListReqVO);
    }

}
