package cn.trainees.blog.surfer.model.vo.search;

import cn.trainees.blog.common.model.BasePageQuery;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

/**
 * @author: 程序员菜鲲
 * @url: www.trainees.cn
 * @date: 2024-12
 * @description: 搜索
 **/
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Schema(description = "文章搜索 VO")
public class SearchArticlePageListReqVO extends BasePageQuery {
    /**
     * 查询关键词
     */
    @NotBlank(message = "搜索关键词不能为空")
    private String word;
}
