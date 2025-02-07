package cn.trainees.blog.admin.model.vo.wiki;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

/**
 * @author: 程序员菜鲲
 * @url: www.trainees.cn
 * @date: 2024-12
 * @description: 删除知识库
 **/
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Schema(description = "删除知识库 VO")
public class DeleteWikiReqVO {

    @NotNull(message = "知识库 ID 不能为空")
    private Long id;
}
