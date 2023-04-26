const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://861e-182-212-89-161.ngrok-free.app/',
      changeOrigin: true,
    }),
  );
};
