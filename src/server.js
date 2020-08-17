// Servidor
const express = require('express')
const server = express()

const { pageLanding,
    pageStudy,
    pageGiveClasses
} = require('./page')

// Configure nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Inicio e configuração do servidor
server 
// confige static file (css, script, imag)
.use(express.static("public"))
// Application route
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

// Start do servidor
.listen(5500)