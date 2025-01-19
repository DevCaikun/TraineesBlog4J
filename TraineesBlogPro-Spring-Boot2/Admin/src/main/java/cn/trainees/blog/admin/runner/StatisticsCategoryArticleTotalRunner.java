package cn.trainees.blog.admin.runner;

import cn.trainees.blog.admin.service.AdminStatisticsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

/**
 * @author: 程序员菜鲲
 * @url: www.trainees.cn
 * @date: 2024-12
 * @description:
 **/
@Component
@Slf4j
public class StatisticsCategoryArticleTotalRunner implements CommandLineRunner {

    @Autowired
    private AdminStatisticsService statisticsService;

    @Override
    @Async("threadPoolTaskExecutor")
    public void run(String... args) throws Exception {
        log.info("==> 开始统计各分类下文章数量...");
        statisticsService.statisticsCategoryArticleTotal();
        log.info("==> 结束统计各分类下文章数量...");
    }
}
