const app1 = require('./app1/server');  // Nodejs App 1 
const app2 = require('./app2/server');  // Nodejs App 2

// Defined ports for each App server
app1.start(8080);
app2.start(8081);
