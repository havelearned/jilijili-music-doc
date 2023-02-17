import {defaultTheme, defineUserConfig} from 'vuepress'
const navbar = require('./config/navbar')
const sidebar = require('./config/sidebar')

export default defineUserConfig({
    //site config
    base: '/jilijili-music-doc/',
    lang: 'zh-CN',
    title: '肌理肌理项目',
    description: '视频,音乐,直播,内容',
    theme: defaultTheme({
        navbar: navbar,
        // 边侧栏
        sidebar:sidebar
    })
    // theme: '@vuepress/theme-default',
    // themeConfig:{
    //     logo: '/images/dir.png',
    // }

})

