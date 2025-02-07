package cn.trainees.blog.admin.service;

import cn.trainees.blog.admin.model.vo.comment.DeleteCommentReqVO;
import cn.trainees.blog.admin.model.vo.comment.ExamineCommentReqVO;
import cn.trainees.blog.admin.model.vo.comment.FindCommentPageListReqVO;
import cn.trainees.blog.common.utils.Response;

/**
 * @author: 程序员菜鲲
 * @url: www.trainees.cn
 * @date: 2024-12
 * @description: 评论
 **/
public interface AdminCommentService {

    /**
     * 查询评论分页数据
     * @param findCommentPageListReqVO
     * @return
     */
    Response findCommentPageList(FindCommentPageListReqVO findCommentPageListReqVO);

    /**
     * 删除评论
     * @param deleteCommentReqVO
     * @return
     */
    Response deleteComment(DeleteCommentReqVO deleteCommentReqVO);

    /**
     * 评论审核
     * @param examineCommentReqVO
     * @return
     */
    Response examine(ExamineCommentReqVO examineCommentReqVO);

}
