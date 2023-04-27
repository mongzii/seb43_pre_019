const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'ec2-3-39-189-122.ap-northeast-2.compute.amazonaws.com',
      changeOrigin: true,
    }),
  );
};
