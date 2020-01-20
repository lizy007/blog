module.exports = {
    base: '/',
    title: 'blog',
    description: 'Vuepress blog demo',
    themeConfig: {
        nav: [
            { text: 'Home' , link: '/' },
            { text: 'FirstBlog' , link: '/blog/FirstBlog.md' }
        ],
        sidebar: [
            ['/', '首页'],
            ['/blog/FirstBlog.md', '我的第一篇博客']
        ]
    }
}