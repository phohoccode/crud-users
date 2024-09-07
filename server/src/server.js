const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const { initApiRoutes } = require('./routers/api')
const configCors = require('./config/cors')

const port = 8888

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

configCors(app)

initApiRoutes(app)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})