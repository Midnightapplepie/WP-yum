var damn = "damn"
var fs = require('fs');
var parse = require('csv-parse');

var data = {
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

	menu : {
		"appetizer":[],
		"soup":[],
		"seafood":[],
		"beef_lamb_pork":[],
		"chicken":[],
		"vegetables":[],
		"mein_fun":[],
		"fried_rice":[],
		"rice":[],
		"lunch_groups":{
			"seafood":[],
			"beef_lamb_pork":[],
			"chicken":[],
			"vegetables":[],
			"mein_fun":[],
			"fried_rice":[]
		}
	},

	generateMenu : function(){
		var parser = parse({column: true},function(err,data){
			var items = data;
			items.forEach(function(e,idx,arr){
				var ele = new MenuItem(e)
				try{
					this.menu[ele.category_id].push(ele);
				}
				catch(err){
					console.log(idx)
				}
				if(ele.lunch){
					try{
						this.menu["lunch_groups"][ele.category_id].push(ele)
					}
					catch(err){
						console.log(idx);
					}
				}
			});
		});

		fs.createReadStream('./assets/menu.csv').pipe(parser);
	}
}


module.exports = data;
