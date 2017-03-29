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
