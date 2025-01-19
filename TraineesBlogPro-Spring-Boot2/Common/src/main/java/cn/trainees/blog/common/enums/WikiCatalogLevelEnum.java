package cn.trainees.blog.common.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * @author: 程序员菜鲲
 * @url: www.trainees.cn
 * @date: 2024-12
 * @description: 知识库目录层级
 **/
@Getter
@AllArgsConstructor
public enum WikiCatalogLevelEnum {

    // 一级目录
    ONE(1),
    // 二级目录
    TWO(2);

    private Integer value;

}
