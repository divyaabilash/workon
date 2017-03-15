var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username:  String,
  password: String,
});


// assign a function to the "methods" object of our animalSchema
patientSchema.methods.findSimilarTypes = function (cb) {
  return this.model('User').find({ type
: this.type }, cb);
}

var User = mongoose.model('User', patientSchema);

module.exports = User;