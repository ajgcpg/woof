var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type: String, required:true},
    name: {type: String, required:true},
    age: {type: String, required:true},
    description: {type: String, required:true},
    sex: {type: String, required:true},
});

module.exports = mongoose.model('Dog', schema);