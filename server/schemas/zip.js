var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var zip = new Schema({
  "address": {type: Number}
})

module.exports = mongoose.model("ZipData", zip);
