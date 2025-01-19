import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'TraineesBlog Mini',
  tagline: "练习生博客纯净版",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog-mini.trainees.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'trainees', // Usually your GitHub org/user name.
  projectName: 'TraineesBlog Mini', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/devcaikun/TraineesBlog/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/devcaikun/TraineesBlog/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // colorMode: {
    //   defaultMode: 'light', // 默认模式：light 或 dark
    //   disableSwitch: false, // 是否禁用模式切换按钮
    //   respectPrefersColorScheme: true, // 是否尊重用户系统的颜色模式偏好
    // },
    // Replace with your project's social card
    image: 'img/TraineesBlog-social-card.webp',
    navbar: {
      title: 'TraineesBlog Mini',
      logo: {
        alt: '',
        src: 'img/TraineesBlogLogo.png',
      },
      items: [
        {
          /* 用法说明
            docSidebar:用于直接链接到文档的特定部分或章节，可以指定 sidebarId 和 docId 或 path 来精确地导航到目标页面。
            link:用于添加一个简单的外部链接，例如链接到其他网站或资源。示例：
                { type: 'link', label: 'External Site', href: 'https://example.com' }
            dropdown:用于创建一个下拉菜单，包含多个链接选项。示例：
              {
                type: 'dropdown',
                label: 'Dropdown',
                items: [
                  { label: 'Item 1', href: '/item-1' },
                  { label: 'Item 2', href: '/item-2' }
                ]
              }
            localeDropdown:用于创建一个语言切换的下拉菜单，适用于多语言网站。示例：
              {
                type: 'localeDropdown',
                position: 'right'
              }
            search:用于添加一个搜索框到导航栏，方便用户搜索文档或网站内容。示例：
              { type: 'search', position: 'right' }
           */
          type: 'docSidebar', //指定导航栏中的链接类型,和指向文档侧边栏的导航项,
          sidebarId: 'CCppSidebar', //指定了链接将导航到 ID 为 CCppSidebar 的侧边栏,该内容定义在了根目录下的sidebars.ts文件中
          activeBasePath: '/docs/CCpp', //指定当前活动链接的基本路径,高亮显示当前页面在导航栏中的链接
          position: 'left', //显示在导航栏左边
          label: 'C/C++', //显示的名字文本
          // to:"/docs/CCpp", //指向文档侧边栏的导航项,r如果配置了type: 'docSidebar'此项就是多余的
        },
        {
          type: 'docSidebar',
          sidebarId: 'CSharpSidebar',
          activeBasePath: '/docs/CSharp',
          position: 'left',
          label: 'C#',
          // to:"/docs/CSharp",
        },
        {
          type: 'docSidebar',
          sidebarId: 'JavaSidebar',
          activeBasePath: '/docs/Java',
          position: 'left',
          label: 'Java',
          // to:"/docs/Java",
        },
        {
          type: 'docSidebar',
          sidebarId: 'AlgorithmsSidebar',
          activeBasePath: '/docs/Algorithms',
          position: 'left',
          label: 'Algorithms',
          // to:"/docs/Algorithms",
        },
        {
          type: 'docSidebar',
          sidebarId: 'DatabasesSidebar',
          activeBasePath: '/docs/Databases',
          position: 'left',
          label: 'Databases',
          // to:"/docs/Databases",
        },
        {
          type: 'docSidebar',
          sidebarId: 'MiddlewareSidebar',
          activeBasePath: '/docs/Middleware',
          position: 'left',
          label: 'Middleware',
          // to:"/docs/Middleware",
        },
        {
          type: 'docSidebar',
          sidebarId: 'FrontFndSidebar',
          activeBasePath: '/docs/FrontFnd',
          position: 'left',
          label: 'FrontEnd',
          // to:"/docs/FrontFnd/",
        },
        {
          type: 'docSidebar',
          sidebarId: 'NetBeansSidebar',
          activeBasePath: 'docs/NetBeans',
          position: 'left',
          label: 'NetBeans',
          // to:"/docs/NetBeans/",
        },
        {
          type: 'docSidebar',
          sidebarId: 'DevOpsSidebar',
          activeBasePath: '/docs/DevOps',
          position: 'left',
          label: 'DevOps',
          // to:"/docs/DevOps",
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          label: '关于',
          position: 'right',
          items: [
            {
              label: '更新日志',
              to: '/docs/Intro/update-log',
            },{
              label: '本站简介',
              to: '/docs/Intro/net-beans',
            },{
              label: '本站开源(GitHub)',
              href: 'https://github.com/DevCaikun/TraineesBlog',
            },{
              label: '本站教程(Docusaurus)',
              href: 'https://docusaurus.io/zh-CN/docs',
            },{
              label: "本站作者：程序员菜鲲",
              href: 'https://homepage.trainees.cn',
            },
          ],
        },
        {
          label: '系列作品',
          position: 'right',
          items: [
            {
              label: "TraineesAdmin.Net",
              // to: '/',
              href: 'https://admin-net.trainees.cn',
            },
            {
              label: "TraineesHomepage",
              href: 'https://homepage.trainees.cn',
            },
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '开源（MIT）',
          items: [
            {
              label: '开源协议',
              href: 'https://opensource.fb.com/legal/terms',
            },
            {
              label: '隐私政策',
              href: 'https://opensource.fb.com/legal/terms',
            },
          ],
        },
        {
          title: '文档（简介）',
          items: [
            {
              label: '更新日志',
              to: '/docs/Intro/update-log',
            },
            {
              label: '本站简介',
              to: '/docs/Intro/net-beans',
            },
          ],
        },
        {
          title: '社区（学习）',
          items: [
            {
              label: '本站教程',
              href: 'https://docusaurus.io/zh-CN/docs',
            },
            {
              label: '练习生博客',
              href: 'https://blog.trainees.cn/doc',
            },
          ],
        },
        {
          title: '作者（程序员菜鲲）',
          items: [
            {
              label: '抖音',
              href: 'https://v.douyin.com/ikY6pK7d',
            },
            {
              label: '微博',
              href: 'https://weibo.com/DevCaikun',
            },
            {
              label: 'CSDN',
              href: 'https://blog.csdn.net/DevCaiKun',
            },
            {
              label: '个人主页',
              href: 'https://homepage.trainees.cn',
            },
          ],
        },
      ],
      copyright: `
        <div style="padding:0 0;display: flex;justify-content: space-between;align-items: center">
          Copyright&nbsp;©&nbsp;2019-${new Date().getFullYear()}&nbsp;程序员菜鲲&nbsp;.&nbsp;|&nbsp;Driven&nbsp;by&nbsp;React.
          <div style="display: flex;justify-content: center;align-items: center">
            <img style="width: 20px;height: 20px" src="https://g.csdnimg.cn/common/csdn-footer/images/badge.png" alt="">
            <a style="margin-left: 5px" rel="nofollow" href="https://beian.miit.gov.cn" target="_blank">备案号：黔ICP备19007557号</a>
          </div>
        </div>
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // 不配置此项-文章分享到微信只有一个链接不会显示卡片内容(默认没有此配置)
    metadata: [
      // 各个元数据标签的作用
      // description 和 keywords: 提供网站描述和关键词，有助于SEO。
      // og:title, og:description, og:type, og:url, og:image: Open Graph标签，定义了分享时展示的内容，包括标题、描述、类型、URL和图片。
      // twitter:card, twitter:title, twitter:description, twitter:image: Twitter卡片标签，定义了在Twitter上分享时展示的内容。
      { name: 'description', content: '我的博客,你的指南' }, // 网站描述-Your Site Description
      { name: 'keywords', content: 'TraineesBlog, blog.trainees.cn, 程序员菜鲲,练习生基地' }, // 关键词-your, keywords
      { property: 'og:title', content: 'it博客' }, // Open Graph 标题-Your Site Title
      { property: 'og:description', content: '我的博客,你的指南' }, // Open Graph 描述-Your Site Description
      { property: 'og:type', content: 'website' }, // Open Graph 类型-website
      { property: 'og:url', content: 'https://blog.trainees.cn' }, // Open Graph URL-https://your-site.com
      { property: 'og:image', content: 'https://img.trainees.cn/trainees-blog/traineesblog-logo.png' }, // Open Graph 图片-https://your-site.com/img/your-image.png
      { name: 'twitter:card', content: 'summary' }, // Twitter 卡片类型-summary_large_image
      { name: 'twitter:title', content: 'e' }, // Twitter 标题-Your Site Titl
      { name: 'twitter:description', content: '我的博客,你的指南' }, // Twitter 描述-Your Site Description
      { name: 'twitter:image', content: 'https://img.trainees.cn/trainees-blog/traineesblog-logo.png' }, // Twitter 图片-https://your-site.com/img/your-image.png
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
