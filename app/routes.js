var mongojs = require('mongojs');
var UserDB = mongojs('USer', ['Userdb']);
mongoose.connect('mongodb://localhost/UserDB');

module.exports=function(app){
	app.post('/user',function(req,res){
console.log("inserted");

        var data = req.body;
        console.log(data);
//         UserDB.Userdb.insert(req.body,function(err,docs){
// console.log("in server"+docs);
// res.json(docs);
        // });
	});
}