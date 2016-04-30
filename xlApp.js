var express = require('express');
var path = require('path');
var app = express();
var exphbs = require('express-handlebars');
var sassMiddleware = require('node-sass-middleware');


//dass setting
app.use(sassMiddleware({
	src: __dirname + "/assets/css/sass",
	dest: __dirname + "/assets/css/sass_compiled",
	debug: true,
	outputStyle: 'compressed',
	prefix:"/sass_compiled"
}))

//adding menu
app.locals.menu = require("./assets/js/menu.js");
app.locals.menu.loadFile();

//add assets folder
app.use(express.static(path.join(__dirname + "/assets")));

//view setting
app.engine('hbs',exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'hbs');
app.set('views',__dirname + '/views');

app.get("/",function(req,res){
	res.render("home");
})

app.get("/menu",function(res,res){
	console.log(app.locals.menu.structure.beef)
	res.render("menu",{data: app.locals.menu.structure});
})



app.listen(3000,function(){
	console.log("local host running at port 3000")
});