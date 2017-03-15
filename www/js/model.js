'use strict'

var mongoose =require('mongoose'),
Schema= mongoose.Schema;

var userSchema = new Schema({
	userName: String,
	password: String
});

module.exports = mongoose.model('user',userSchema);