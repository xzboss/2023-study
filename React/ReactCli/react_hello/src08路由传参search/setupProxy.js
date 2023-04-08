const {createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
	app.use(
		createProxyMiddleware('/github', { // 触发代理的路径前缀
			target: 'https://api.github.com',//目标地址
			changeOrigin: true,//是否隐藏自己真实地址(隐藏后后端的Host请求头里就不会是真实请求者的地址了)
			pathRewrite: { '^/github': '' } //重写请求地址
		})
	)
}