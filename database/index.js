const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/doctor")

let db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection error");
})
db.once("open", function() {
  console.log("mongoose connected successfully");
})


let doctorSchema = mongoose.Schema({
  id: {type: String, unique: true},
  name: String,
  address: String,
  phone: String,
  image: String,
  bio: String
})
