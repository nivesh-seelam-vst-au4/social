const http = require('http')
const app = require("./app")

let server = http.createServer(app)

server.listen(3020, function() {
    console.log("Connection is ready!")
})