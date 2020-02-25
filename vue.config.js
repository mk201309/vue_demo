// vue.config.js
module.exports = {
    devServer: {
        proxy: 'http://10.0.2.15:8080',
        public: '127.0.0.1:8080'  // 本地ip
    }
}