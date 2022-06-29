const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const routes = require ('./routes/routers.js')
routes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})