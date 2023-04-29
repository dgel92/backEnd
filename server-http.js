//const http = require("http");

import http from "http";

const server = http.createServer((req, res) =>{
    res.end ("mi primer hola mundo desde el backend")
})

server.listen(8090,()=>{
    console.log("escuchando en puerto 8090")
})
cv