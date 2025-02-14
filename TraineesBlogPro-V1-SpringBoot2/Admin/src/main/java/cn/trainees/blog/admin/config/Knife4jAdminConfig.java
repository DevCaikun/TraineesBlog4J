package cn.trainees.blog.admin.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springdoc.core.GroupedOpenApi;
import org.springdoc.core.customizers.GlobalOpenApiCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

/**
 * @author: 程序员菜鲲
 * @url: www.trainees.cn
 * @date: 2024-12
 * @description: Knife4j 配置
 **/

// 只在 dev/prod 环境中开启
@Profile("dev")
@Configuration
public class Knife4jAdminConfig {

    /**
     * 根据@Tag 上的排序，写入x-order
     * @return the global open api customizer
     */
    @Bean
    public GlobalOpenApiCustomizer adminOrderGlobalOpenApiCustomizer() {
        Random random = new Random();
        return openApi -> {
            if (openApi.getTags()!=null){
                openApi.getTags().forEach(tag -> {
                    Map<String,Object> map=new HashMap<>();
                    map.put("x-order", random.nextInt(100));
                    tag.setExtensions(map);
                });
            }
            if(openApi.getPaths()!=null){
                openApi.addExtension("x-test123","333");
                openApi.getPaths().addExtension("x-abb",random.nextInt(100) + 1);
            }
        };
    }

    @Bean
    public GroupedOpenApi adminDefaultApi() {
        return GroupedOpenApi.builder()
                // 分组名称
                .group("Admin 后台接口")
                // 这里指定 Controller 扫描包路径
                .packagesToScan("cn.trainees.blog.admin.controller")
                .build();
    }

    /**
     * 构建 API 信息
     * @return
     */
    @Bean
    public OpenAPI adminCustomOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("TraineesBlog Admin 后台接口文档") // 标题
                        .version("0.0.1-SNAPSHOT") // 版本号
                        .contact(new Contact()
                                .name("程序员菜鲲") // 设置作者名称
                                .url("https://www.trainees.cn") // 设置作者网址
                                .email("devcaikun@163.com")) // 设置作者邮箱
                        .description("智慧博客专业版是一款<br/>" +
                                "后端由：JDK21 + SpringBoot3 + MybatisPlus3 + PostgreSQL17，<br/>" +
                                "前端后台由：TypeScript5 + Vite6 + Vue3 + ElementPlus3 + Tailwindcss4，<br/>" +
                                "后端前台由：TypeScript5 + Vite6 + React19 + AntDesign5 + UnoCSS1 <br/>" +
                                "开发的前后端分离项目。")
                        .termsOfService("https://api.ibp.trainees.com/terms")
                        .license(new License().name("Apache 2.0")
                                .url("http://license.ibp.trainees.cn")));
    }
}
