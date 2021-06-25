const express = require('express');
const route = require('./route');
const path = require('path')

const server = express();

server.set('view engine', 'ejs') // definindo o ejs como nossa view engine

server.use(express.static("public")) //o express vai usar os css e javascript


server.use(express.urlencoded({extended: true})) // 

server.use(route) //agora o node começou a usar o arquivo route 
server.set('views', path.join(__dirname, 'views')) // o path pega o caminho da pasta do nosso projeo o join é juntar

server.listen(3000, function() {
    console.log(`Server is runing in http://localhost:3000`)
})