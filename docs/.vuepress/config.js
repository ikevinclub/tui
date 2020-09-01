module.exports = {
    base: '/tui/',
    title: 'TUI',
    description: '公司UI组件库',
    themeConfig: {
        // logo: '/assets/img/logo.png', //导航栏logo
        nav: [
            { text: '首页', link: '/' },
            { text: '组件库', link: '/components/' },
            { text: '主题', link: '/theme/' },
        ],
        sidebar: {
            '/components/': [{
                title: '组件库',
                collapsable: false,
                children: [
                    '',
                    // 'layout',
                    'header'
                ]
            }],
            '/theme/': [{
                title: '主题',
                collapsable: false,
                children: [
                    '',
                ]
            }]
        },
        lastUpdated: '最近更新',
        repo: 'https://github.com/ikevinclub/tui'
    },
    head: [
        ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }]
    ],
    plugins: [
        'demo-container'
    ]
}