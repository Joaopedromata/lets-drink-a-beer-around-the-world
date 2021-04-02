const db = require('./db.json')
const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000


app.use(cors())

function index(req, res) {
  res.send(JSON.stringify(db))
}


function random(req, res) {
  let list = []
    let r = Math.floor(Math.random()*db.length)
    list.push(db[r])
  res.send(list)
}


app.get('/', index)
app.get('/random/', random)
app.listen(port, () => console.log(`Beer server running on port ${port}!`))
