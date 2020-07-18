const express = require("express")
const server = express()

server.use(express.static("public"))
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
  express: server,
})


server.get("/", function(req, res) {
//return console.log("ola mundo")
return res.render("index.html")
})

server.get("/ideias", function(req, res) {
return res.render("ideias.html")
}) 

server.listen(3000)