const request = require("request");
const config = require("../config.js");

let findDoctor = (keyWord, callback) => {
  var key = "";
  keyWord.address = keyWord.address.toLowerCase();
  if (keyWord.sort === "") {
    keyWord.sort = "distance-asc";
  }
  if (keyWord.address === "") {
    keyWord.address = "ca-richmond";
  }
  if (keyWord.name === "") {
    key = `https://api.betterdoctor.com/2016-03-01/doctors?limit=10&specialty_uid=${
      keyWord.specialty
    }&location=${keyWord.address}&sort=${keyWord.sort}&user_key=${
      config.TOKEN
    }`;
  }
  if (keyWord.specialty === "") {
    key = `https://api.betterdoctor.com/2016-03-01/doctors?limit=10&name=${
      keyWord.name
    }&location=${keyWord.address}&sort=${keyWord.sort}&user_key=${
      config.TOKEN
    }`;
  }

  if (keyWord.name === "" && keyWord.specialty === "") {
    key = `https://api.betterdoctor.com/2016-03-01/doctors?limit=10&location=${
      keyWord.address
    }&sort=${keyWord.sort}&user_key=${config.TOKEN}`;
  }

  if (keyWord.name && keyWord.specialty) {
    key = `https://api.betterdoctor.com/2016-03-01/doctors?limit=10&name=${
      keyWord.name
    }&specialty_uid=${keyWord.specialty}&location=${keyWord.address}&sort=${
      keyWord.sort
    }&user_key=${config.TOKEN}`;
  }

  let options = {
    url: key
  };

  request(options, function(err, res, json) {
    if (err) {
      callback(error, null);
    }
    callback(null, JSON.parse(json));
  });
};
module.exports.findDoctor = findDoctor;
