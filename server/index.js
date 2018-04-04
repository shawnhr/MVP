const express = require('express')
const helpers = require("../helpers/api.js")
const bodyParser = require("body-parser");
const db = require('../database/index.js')
const app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static(__dirname + '/../client/dist'))
app.use(bodyParser.json());

app.get('/items', (req, res) => {
  
  db.find((err, result) => {
    if (err) {
      res.status(404)
      res.end()
    } else {
      res.send(result)
    }
  })
})

app.post('/items', (req, res) => {
  
  helpers.findDoctor(req.body.term, (err, result) => {
    if (err) {
      res.status(400)
      //console.log("S_Post_err:", err)
      res.end()
    } else {
      //console.log(result, 'this is result')
      // result.forEach(item => {
        //var model = new db.model(item)
        //if(result.data){
        for(i = 0; i < result.data.length; i++){
        db.save(result.data[i], (err, result) => {
          if(err) {
            console.log(err)
            res.status(400)
            res.end()
          } else {
            res.status(201)
            res.end()
          }
        })
      }
    //}
      // })
    }
  })
})

app.listen(3000, () => console.log('listening on port 3000!'))
