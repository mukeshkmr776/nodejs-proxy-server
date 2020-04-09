module.exports = {
    "proxies": [

        // Proxy config for App1
        // NOTE:  http://proxy-server:3000/app1  ~~>  http://localhost:8080/
        {
            "name": "Node.js Application 1",
            "appPath": '/app1',
            "target": "http://localhost:8080",
            "changeOrigin": true,
            "pathRewrite": {
                '^/app1': '/'
            }
        },


        // Proxy config for App2
        // NOTE:  http://proxy-server:3000/app2  ~~>  http://localhost:8081/
        {
            "name": "Node.js Application 2",
            "appPath": '/app2',
            "target": "http://localhost:8081",
            "changeOrigin": true,
            "pathRewrite": {
                '^/app2': '/'
            }
        },


        // Default Proxy config when path like http://localhost:3000/ is given.
        // NOTE: This needs to be the last in configuration, else it wont' work.
        //       http://proxy-server:3000/  ~~>  http://localhost:8080/
        {
            "name": "Node.js Application 1",
            "appPath": '/',
            "target": "http://localhost:8080",
            "changeOrigin": true
        }


    ]
};
