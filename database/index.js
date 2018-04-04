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

let model = mongoose.model("model", doctorSchema);

let save = (datas, cb) => {
  var profile = datas.profile;
  newData = new model({
    id: datas.practices[0].uid,
    name: profile.first_name + " " + profile.last_name,
    address:
      datas.practices[0].visit_address.street +
      ", " +
      datas.practices[0].visit_address.city +
      ", " +
      datas.practices[0].visit_address.state,
    phone: datas.practices[0].phones[0].number,
    image: profile.image_url,
    bio: profile.bio
  });

  newData.save((err, result) => {
    if (err) {
      cb(err, null);
    } else {
      console.log("data saved");
      cb(null, result);
    }
  });
};
let remove = cb => {
  db.dropDatabase(function(err) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, "removed");
    }
  });
};
let find = cb => {
  model.find().exec((err, result) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, result);
    }
  });
};

module.exports.model = model;
module.exports.remove = remove;
module.exports.save = save;
module.exports.find = find;
