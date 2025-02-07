package cn.trainees.blog.surfer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@ComponentScan({"cn.trainees.blog.*"}) // 多模块项目中，必需手动指定扫描 cn.trainees.blog 包下面的所有类
@EnableScheduling // 启用定时任务
public class SurferApplication {

    public static void main(String[] args) {
        SpringApplication.run(SurferApplication.class, args);
    }

}
