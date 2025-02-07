package cn.trainees.blog.surfer.service.impl;

import cn.trainees.blog.common.domain.dos.BlogSettingsDO;
import cn.trainees.blog.common.domain.mapper.BlogSettingsMapper;
import cn.trainees.blog.common.utils.Response;
import cn.trainees.blog.surfer.convert.BlogSettingsConvert;
import cn.trainees.blog.surfer.model.vo.blogsettings.FindBlogSettingsDetailRspVO;
import cn.trainees.blog.surfer.service.BlogSettingsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author: 程序员菜鲲
 * @url: www.trainees.cn
 * @date: 2024-12
 * @description: 博客设置
 **/
@Service
@Slf4j
public class BlogSettingsServiceImpl implements BlogSettingsService {

    @Autowired
    private BlogSettingsMapper blogSettingsMapper;

    /**
     * 获取博客设置信息
     *
     * @return
     */
    @Override
    public Response findDetail() {
        // 查询博客设置信息（约定的 ID 为 1）
        BlogSettingsDO blogSettingsDO = blogSettingsMapper.selectById(1L);
        // DO 转 VO
        FindBlogSettingsDetailRspVO vo = BlogSettingsConvert.INSTANCE.convertDO2VO(blogSettingsDO);

        return Response.success(vo);
    }
}
