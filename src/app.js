require('dotenv').config()
const express = require('express')
const cors = require('cors')

const weatherRoutes = require('./routes/weatherRoute')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/weather',weatherRoutes)

module.exports = app