module.exports = [
    {
        text: "首页",
        link: "/"
    },
    {
        text: "服务端(SpringBoot)",
        link: "/frontend"
    },
    {
        text: "前端(Vue3)",
        link: "/frontend"
    },
    {
        text: "APP(Flutter)",
        link: "/frontend"
    },
    {
        text: "微信小程序(原生)",
        link: "/frontend"
    },
    {
        text: "源码地址",
        link: "/",
        children: [
            {
                text: 'GitHub',
                link: '/',
                // 该元素将一直处于激活状态
                activeMatch: '/',
            },
            {
                text: 'GitEE',
                link: '/not-foo/',
                // 该元素在当前路由路径是 /foo/ 开头时激活
                // 支持正则表达式
                activeMatch: '^/foo/',
            },
        ],

    },
]