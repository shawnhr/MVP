const express = require("express");
const helpers = require("../helpers/api.js");
const bodyParser = require("body-parser");
const db = require("../database/index.js");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());

app.post("/delete", (req, res) => {
  db.remove((err, result) => {
    if (err) {
      console.log(err);
    } else {
      return res.send(result);
    }
  });
});

app.get("/items", (req, res) => {
  db.find((err, result) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.send(result);
    }
  });
});

app.post("/items", (req, res) => {
  helpers.findDoctor(req.body.term, (err, result) => {
    console.log("inside helper===================");
    if (err) {
      res.status(400);
      res.end();
    } else {
      for (i = 0; i < result.data.length; i++) {
        db.save(result.data[i], (err, result) => {
          if (err) {
            console.log("err:", err);
            res.status(400);
            res.end();
          } else {
            res.status(201);
            res.end();
          }
        });
      }
    }
  });
});

app.listen(8080, () => console.log("listening on port 8080!"));
