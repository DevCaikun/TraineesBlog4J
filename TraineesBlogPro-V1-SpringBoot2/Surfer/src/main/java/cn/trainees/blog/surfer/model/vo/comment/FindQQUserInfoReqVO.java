package cn.trainees.blog.surfer.model.vo.comment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

/**
 * @author: 程序员菜鲲
 * @url: www.trainees.cn
 * @date: 2024-12
 * @description: 获取 QQ 号用户信息
 **/
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FindQQUserInfoReqVO {

    @NotBlank(message = "QQ 号不能为空")
    private String qq;

}
