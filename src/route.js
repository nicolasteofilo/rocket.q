const express = require('express')

const routes = express.Router() 

routes.get('/', (req, res) => res.render("index"))
routes.get('/room', (req, res) => res.render("room"))
routes.get('/create-pass', (req, res) => res.render("create-pass"))


// Format that the form within the modal has to pass the information
// routes.post('/room/:room/:question/:action')

module.exports = routes