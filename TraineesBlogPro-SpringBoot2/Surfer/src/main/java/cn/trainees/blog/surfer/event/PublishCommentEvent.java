package cn.trainees.blog.surfer.event;

import lombok.Getter;
import org.springframework.context.ApplicationEvent;

/**
 * @author: 程序员菜鲲
 * @url: www.trainees.cn
 * @date: 2024-12
 * @description: 评论发布事件
 **/

@Getter
public class PublishCommentEvent extends ApplicationEvent {

    /**
     * 评论 ID
     */
    private Long commentId;

    public PublishCommentEvent(Object source, Long commentId) {
        super(source);
        this.commentId = commentId;
    }
}
