var damn = "damn"
var fs = require('fs');
var parse = require('csv-parse');

function Menu(){

	this.structure = {
		"appetizer":[],
		"soup":[],
		"seafood":[],
		"beef":[],
		"lamb":[],
		"pork":[],
		"chicken":[],
		"vegetables":[],
		"mein_fun":[],
		"fried_rice":[],
		"rice":[]
	};

	this.generateMenu = function(data,self){

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

		data.forEach(function(e,idx,arr){
			var ele = new MenuItem(e)
			try{
				self.structure[ele.category_id].push(ele);
			}
			catch(err){
				console.log(idx)
			}

			if(idx+1 == arr.length){
				// console.log(self)
			}
		});
	};

	this.loadFile = function(){
		var self = this;
		fs.readFile('./assets/menu.csv',function(err,data){
			if(err){
				console.log(err);
			}else{
				parse(data,{column: true},function(parseErr,parseData){
					if(parseErr){
						console.log(parseErr);
					}else{
						self.generateMenu(parseData,self)
					}
				})
			}
		});
	};

}

var menu = new Menu();

module.exports = menu;
