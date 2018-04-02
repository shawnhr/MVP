const request = require("request");
const config = require("../config.js");

let findDoctor = (keyWord, cb) => {
  console.log("key:", keyWord);
  let options = {
    url:
      "https://api.betterdoctor.com/2016-03-01/doctors?user_key=2198ace39167f3af36e2d387ffca5c87&location=" +
      keyWord
    // url: 'https://api.betterdoctor.com/2016-03-01/doctors?' + keyWord,
    //  headers: {
    //    'User-Agent': 'request',
    //         'user_key': `${config.TOKEN}`
    // }
  };

  request(options, function(err, res, json) {
    if (err) {
      cb(err, null);
    }
    cb(null, JSON.parse(json));
  });
};
module.exports.findDoctor = findDoctor;
