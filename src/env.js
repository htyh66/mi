let baseURL

switch (process.env.NODE_ENV) {   //process.env获取当前nodejs中的一些环境变量   这个环境变量会写入我们的nodejs中    所以会取得一些nodejs中的参数
    case 'development':    // 开发环境地址
        baseURL = '';
        break;
    case 'test':    // 测试环境地址
        baseURL = '';
        break;
    case 'production':    // 上线地址
        baseURL = '';
        break;
    default:      //默认地址
        baseURL = '';
        break;
}
export default {
    baseURL
}
