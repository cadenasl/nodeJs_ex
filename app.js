const http = require("http");
const routes = require("./routes");

//we need this to handle http requests
const server = http.createServer(routes); //this creates our server and keeps listening in infinite loop listens for req and sends res when needed process exist shuts down server

server.listen(4000);
