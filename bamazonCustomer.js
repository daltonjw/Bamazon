var mysql = require("mysql");
var inquirer = require("inquirer");

//Create the connection to mysql
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "james",
	password: "",
	database: "bamazon"
});

connection.connect(function(err) {
	if (err) {
		console.log("There was an error connecting");
	}
	console.log("Connected as id: "+connection.threadId);
	start();
});

var start = function(){
	connection.query("SELECT * FROM bamazon.products", function(err,res){
		if (err) throw err;
	displayItems(res);
	userInput(res);
	});
};

var displayItems = function(res){
    // Prints the table to the console with minimal styling
    var tab = "\t";
    console.log("Item #\tProduct\tDepartment\tPrice\tQTY In Stock");
    console.log("--------------------------------------------------------");

    // For loop goes through the table and prints each individual row on a new line
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + tab + res[i].product_name + tab +
        res[i].department_name + tab + res[i].price + tab + res[i].stock_quantity);
    }
    console.log("--------------------------------------------------------");
  };

  var userInput = function(res){
  	inquirer.prompt([{
  		type: "input",
  		name: "selection",
  		message: "Which item # would you like to purchase? -- Enter Q to quit:"
  	}]).then(function(val) {
  		// console.log(res);
  		// console.log(val);
  		//Setting a flag...
  		var correcct = false;
  		//Check if the product exists
  		for (var i = 0; i < res.length; i++) {
  			if (res[i].item_id === Number(val.selection)) {
  				correct=true;
  				var sqlProdName = res[i].product_name;
  				var id = i;
  				// console.log(val.selection);
  				// console.log(productName);
  				// console.log(id);

  				//Asks how many we want to buy
  				inquirer.prompt([{
  					type: "input",
  					name: "quantity",
  					message: "How many of the product would you like to buy?"
  				}]).then(function(val){
  					//If quantity in DB is greater than requested, make the purchase
  					console.log("hello");
  					console.log(res[id].stock_quantity);
  					console.log(Number(val.quantity));
  					if((res[id].stock_quantity - Number(val.quantity)) > 0) {
  						//Remove the amount from the DB
  						console.log("Inside the if function");
  						connection.query("UPDATE bamazon.products SET stock_quantity='" + (res[id].stock_quantity - Number(val.quantity)) + "' WHERE product_name='" + sqlProdName + "'",
  						// connection.query("UPDATE bamazon.products SET stock_quantity=0",  						
  							function(err, res2){
  								if (err){
  									throw err;
  								}

  								console.log("Purchase Made");

  								start();
  							});
  					}
			        // If the amount requested was greater than the amount available, restarts prompts
			        else {
			        	console.log("NOT A VALID SELECTION!");
			            start();
			          }  					
					});
  			}
  			if (val.selection === "Q" || val.selection==="q"){
  				process.exit();
  			}	
  		}

  		if (i == res.length && correct === false) {
  			console.log("Please enter a valid selection");
  			start();
  		}
  	});
  };
