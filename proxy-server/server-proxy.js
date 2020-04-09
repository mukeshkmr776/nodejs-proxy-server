// External Imports
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = require('express')();
const argv = require('yargs').argv;

const PORT = argv.port || 3000;

// Adding proxies from config into prixy-middleware
const { proxies } = require('./proxy-config');
proxies.forEach(proxy => {
    app.use(proxy.appPath, createProxyMiddleware(proxy));
});

// Starting Proxy server here
app.listen(PORT, function() {
    console.log("\nProxy Server started at http://localhost:%s\n", PORT);
});
