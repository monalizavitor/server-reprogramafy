const express = require('express')

const route = require('./routes/musicasRoutes')


const app = express()

app.use('/', route)


module.exports = app