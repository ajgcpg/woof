var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: String,
    name: String,
    age: String,
    description: String,
    sex: String,
});

module.exports = mongoose.model('Dog', schema);