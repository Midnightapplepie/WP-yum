var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var exphbs = require('express-handlebars');
var sassMiddleware = require('node-sass-middleware');


//dass setting
app.use(sassMiddleware({
	src: __dirname + "/assets/css/sass",
	dest: __dirname + "/assets/css/sass_compiled",
	debug: true,
	force: true,
	sourceMap: true,
	outputStyle: 'compressed',
	prefix:"/css/sass_compiled"
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//add assets folder
app.use(express.static(path.join(__dirname + "/assets")));
//adding menu
app.locals.menu = require("./assets/js/menu.js");
app.locals.menu.loadFile();

app.locals.mailHelper = require("./assets/js/mailHelper.js");


//view setting
app.engine('hbs',exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'hbs');
app.set('views',__dirname + '/views');

app.get("/",function(req,res){
	res.render("home");
})

app.get("/menu",function(req,res){
	// console.log(app.locals.menu.structure.beef)
	res.render("menu",{data: app.locals.menu.structure});
})

app.get("/info",function(req,res){
	var storeInfo = require("./assets/js/storeInfo.js");
	console.log(storeInfo)
	res.render("info",{info: storeInfo})
})

app.post("/make-reservation",function(req,res){
	var reservation = req.body;
	console.log(reservation);
	app.locals.mailHelper.transporter().sendMail(
		app.locals.mailHelper.reservationEmail(reservation),
		function(err,info){
			if(err){
				console.log(err);
				res.send("Message Failed");
			}else{
				console.log("sent");
				res.send("We'll text you to confirm your reservation")
			}
		}
		)
})

app.listen(3000,function(){
	console.log("local host running at port 3000")
});