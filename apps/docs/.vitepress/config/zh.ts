import { defineConfig } from 'vitepress';

export const zh = defineConfig({
  lang: 'zh-Hans',
  title: '组件库模板文档',
  description: '一个基于 Vue3 的组件库和工具集',
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      // { text: '其他', link: '/markdown-examples' },
      { text: '博客', link: 'https://github.com/luabuCN/lib-vue3-turbo-componente' },
      {
        text: '更多',
        items: [
          {
            text: '更新日志',
            link: 'https://github.com/luabuCN/lib-vue3-turbo-componente/blob/master/README.md',
          },
          // {
          //   text: '参与贡献',
          //   link: '',
          // },
        ],
      },
    ],
    sidebar: [
      {
        text: '快速开始',
        items: [{ text: '介绍', link: '/guide/index' }],
      },
      {
        text: '组件（@lub/ui）',
        items: [
          { text: 'Button 按钮', link: '/packages/ui/button' },
          { text: 'Dialog 对话框', link: '/packages/ui/dialog' },
          { text: 'Icon 图标', link: '/packages/ui/icon' },
        ],
      },
      {
        text: 'Hooks（@lub/hooks）',
        items: [{ text: 'useCounter 计数器', link: '/packages/hooks/useCounter' }],
      },
      {
        text: '指令（@lub/directives）',
        items: [{ text: 'vFocus 聚焦', link: '/packages/directives/vFocus' }],
      },
      {
        text: '工具函数（@lub/utils）',
        items: [{ text: '字符串工具', link: '/packages/utils/string' }],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/luabuCN/lib-vue3-turbo-componente' }],
  },
});
