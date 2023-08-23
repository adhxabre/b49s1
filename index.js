const express = require('express')
const app = express()

app.get('/hello-world', (req, res) => {
  res.send('Hello World')
})

app.get('/example', (req, res) => {
  res.send({
    id: 1,
    name: "jhon doe"
  })
})

app.get('/test', (req, res) => {
  res.send('testing')
})

app.listen(5000, () => {
  console.log('Example app listening on port 5000')
})