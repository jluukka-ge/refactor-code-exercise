const express = require('express')
const bodyParser = require('body-parser')
const registerApi = require('./app')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use((req, res, next) => {
  req.user = { id: 1 }  // Mock user data for now
  next()
})
registerApi(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
