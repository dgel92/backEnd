const http = require("http");
const server  =http.createServer((request, response)=>{
    response.end("mi primer homa mundo desde el backend")
})

server.listen(8080,()=>{
    console.log("escuchando desde el puerto 8080")
})