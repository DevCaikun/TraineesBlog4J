package cn.trainees.blog.surfer.model.vo.comment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * @author: 程序员菜鲲
 * @url: www.trainees.cn
 * @date: 2024-12
 * @description: 查询评论
 **/
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FindCommentListRspVO {

    /**
     * 总评论数
     */
    private Integer total;

    /**
     * 评论集合
     */
    private List<FindCommentItemRspVO> comments;

}
