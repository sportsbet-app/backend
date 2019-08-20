const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

server.use(express.json())
server.use(cors())
server.use(morgan('dev'))
server.use(helmet())

server.get('/', (req, res) => {
    res.send('Running')
})

module.exports = server
