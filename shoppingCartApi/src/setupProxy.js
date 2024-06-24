const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.jsonserve.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // remove /api from the request path
      },
    })
  );
};
