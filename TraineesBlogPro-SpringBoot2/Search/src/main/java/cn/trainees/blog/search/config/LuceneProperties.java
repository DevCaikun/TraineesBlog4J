package cn.trainees.blog.search.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * @author: 程序员菜鲲
 * @url: www.trainees.cn
 * @date: 2024-12
 * @description: lucene 配置
 **/
@ConfigurationProperties(prefix = "lucene")
@Component
@Data
public class LuceneProperties {
    private String indexDir;
}
