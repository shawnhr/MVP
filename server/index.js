const express = require('express')
const helpers = require("../helpers/api.js")
const bodyParser = require("body-parser");
const db = require('../database/index.js')
const app = express()

//app.get('/', (req, res) => res.send('Hello World!'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(express.static(__dirname + '/../client/dist'))
app.use(bodyParser.json());

app.get('/items', (req, res) => {
  
  db.find(())
})












  helpers.findDoctor()









app.listen(3000, () => console.log('Example app listening on port 3000!'))
