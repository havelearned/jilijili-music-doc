module.exports = [
    // SidebarItem
    {
        text: '项目介绍',
        link: '/foo/',
        children: [
            // SidebarItem
            {
                text: 'github',
                link: 'https://github.com',
                children: [],
            },
            // 字符串 - 页面文件路径
            '/foo/bar.md',
        ],
    },
    // // 字符串 - 页面文件路径
    // '/bar/README.md',
]