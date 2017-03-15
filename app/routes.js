var mongojs = require('mongojs');
var mongoose = require('mongoose');
var UserDB = mongojs('User', ['Userdb']);
mongoose.connect('mongodb://localhost/UserDB');

module.exports=function(app){
	app.post('/user',function(req,res){
console.log("post request receive");

        var data = req.body;
        console.log(data);
        // res.json(data);
       UserDB.Userdb.insert(req.body,function(err,docs){
 console.log("in server"+docs);
  res.json(data);
      });
	});
}