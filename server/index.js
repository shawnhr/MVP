const express = require('express')
var bodyParser = require("body-parser");
var db = require('../database/index.js')
const app = express()

//app.get('/', (req, res) => res.send('Hello World!'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(express.static(__dirname + '/../client/dist'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
