package cn.trainees.blog.toolkit;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE, classes = ToolKitApplicationTests.Application.class)
@Slf4j
class ToolKitApplicationTests {

    public static class Application {
    }

    @Test
    public void test() {
    }

}
