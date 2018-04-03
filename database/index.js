const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/doctor");

let db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection error");
});
db.once("open", function() {
  console.log("mongoose connected successfully");
});

let doctorSchema = mongoose.Schema({
  id: { type: String, unique: true },
  name: String,
  address: String,
  phone: String,
  image: String,
  bio: String
});

// let drop = function() {
//   db.items.drop();
// };

let model = mongoose.model("model", doctorSchema);

let save = (newModel, cb) => {
  newModel.save((err, result) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, result);
    }
  });
};

let find = (cb) => {
  model
    .find()
    .exec((err, result) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, result);
      }
    });
};

module.exports.model = model;
module.exports.save = save;
module.exports.find = find;
