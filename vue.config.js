module.exports = {
    devServer: {
        proxy: {
            //虚拟接口拦截
            '/api': {
                target: 'https://www.fastmock.site/mock/346fac9cf3726907264040f5fa11ec71/mi',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }

        }

    }
}