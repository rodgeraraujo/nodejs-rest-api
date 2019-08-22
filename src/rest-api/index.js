const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 9876;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./app/controllers/index')(app)

app.listen(port, console.log(`Servidor executando na porta ${port}`))
