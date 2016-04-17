var damn = "damn"
var fs = require('fs');
var parse = require('csv-parse');
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var MenuItem = function(array){
	var price = array[5].replace(/\$/g,"").split("/");
	var lunch_price = array[9];
	if(price.length > 1){

		this.sizes = true;
		this.price = {s: price[0]*1,m: price[1]*1, l:price[2]*1 }
	}else if(price[0]*1){
		this.price = price[0]*1;
	}else{
		this.price = price[0];
	}

	this.spicy = array[0] == ""? false : true;
	this.category_id = array[1];
	this.category_name = array[2];
	this.vegetarian = array[3] ==""?false : true;
	this.name = array[4];
	this.lunch = array[8] == ""? false : true;
	this.lunch_price = array[9] != ""? array[9].replace(/\$/g,"") * 1: false;
	this.count = array[10] == ""? false : array[10]*1;
	this.description = array[11]; 
};

var generateMenu = function(collection,db){
	var parser = parse({column: true},function(err,data){
		var items = data;
		items.forEach(function(e,idx,arr){
			var ele = new MenuItem(e);
			collection.insert(ele,function(err,result){
				if(err){
					console.log(err);
				}else{
					console.log("inserted")
				}

				if(idx + 1 == items.length){
					collection.find({spicy:true}).toArray(function(err,result){
						if(err){
							console.log(err);
						}else if(result.length){
							console.log(result)
						}else{
							console.log("no result");
						}
					});
				}
			});
		});
	});

	fs.createReadStream('./assets/menu.csv').pipe(parser);
}

var url = 'mongodb://localhost:27017/xl_menu';

MongoClient.connect(url, function(err,db){
	if(err){
		console.log("can't connect");
	}else{
		console.log("connected!!! to " +  url);

		var collection = db.collection('items');

		generateMenu(collection,db);

	}
})