var express = require('express');
var path = require('path');
var app = express();
var exphbs = require('express-handlebars');
var d = require("./assets/js/db.js");


app.use(express.static(path.join(__dirname + "/assets")));

app.engine('hbs',exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'hbs');
app.set('views',__dirname + '/views');

app.get("/",function(req,res){
	res.render("home");
})




app.listen(3000,function(){
	console.log("local host running at port 3000")
});