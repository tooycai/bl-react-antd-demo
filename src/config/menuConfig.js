const menuList = [
    {
        title: '首页',
        key: '/home'
    },
    {
        title: 'UI',
        key: '/ui',
        children: [
            {
                title: '按钮',
                key: '/ui/buttons',
            },
            {
                title: 'Loading',
                key: '/ui/loadings',
            },
            {
                title: '通知提醒',
                key: '/ui/notification',
            },
            {
                title: '全局Message',
                key: '/ui/messages',
            },
            {
                title: 'Tab页签',
                key: '/ui/tabs',
            },
            {
                title: '画廊',
                key: '/ui/gallery',
            },
            {
                title: '轮播图',
                key: '/ui/carousels',
            }
        ]
    },
    {
        title: '表单',
        key: '/form',
        children: [
            {
                title: '登录',
                key: '/form/login',
            },
            {
                title: '注册',
                key: '/form/reg',
            }
        ]
    },
    {
        title: '表格',
        key: '/table',
        children: [
            {
                title: 'Demo-用户CRUD',
                key: '/table/basic',
            },
            {
                title: 'Mock-动态表格',
                key: '/table/mock',
            },
            {
                title: '高级表格',
                key: '/table/high',
            }
        ]
    },
];


export default menuList;