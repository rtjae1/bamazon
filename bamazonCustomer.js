var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
});

var itemIds = [];
var itemQuantity = [];
var uniqueId = 0;
var uniqueQuantity = 0;

function start() {
    console.log("Welcome to Bamazon! Where we are so crazy, we might just be nuts!");
    console.log("Below is a list of all the items for sale.");
    var query = "SELECT * FROM products";
    connection.query(query, function (err, res) {
        if (err) throw err;
        itemIds = [];
        console.log('ID | Product Name | Dept Name | Price | Quantity');
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + ' | ' + res[i].product_name + ' | ' + res[i].department_name + ' | ' + '$' + res[i].price + ' | ' + res[i].stock_quantity);
            itemIds.push(res[i].item_id);
            itemQuantity.push(res[i].stock_quantity);
        }
        selectProduct();
    });
}

function selectProduct() {
    inquirer.prompt([
        {
            name: 'id',
            message: 'Enter the ID of the product you would like to purchase:',
            type: 'input'
        }
    ]).then(function (answer) {
        uniqueId = parseInt(answer.id);
        for (var j = 0; j < itemIds.length; j++) {
            if (uniqueId === itemIds[j]) {
                numProducts();
            }
        }
    })
}

function numProducts() {
    inquirer.prompt([
        {
            name: 'quantity',
            message: 'Enter the number of units you would like to purchase:',
            type: 'input'
        },
    ]).then(function (answer) {
        uniqueQuantity = parseInt(answer.quantity);
        connection.query('SELECT * FROM products WHERE item_id = ?', [uniqueId], function (err, res) {
            if (err) throw err;
            var stock = res[0].stock_quantity;
            var price = res[0].price;
            if (uniqueQuantity < stock) {
                console.log('Thank you! Your purchase is complete!');
                console.log('Total sale: ' + '$' + (uniqueQuantity * price));
                connection.query(
                    'UPDATE products SET ? WHERE ?',
                    [
                        {
                            stock_quantity: (stock - uniqueQuantity),
                        },
                        {
                            item_id: uniqueId
                        }
                    ],
                    function (err, res) {
                        if (err) throw err;
                        endConnection();
                    }
                )
            }
            else {
                console.log('Insufficient quantity!');
                endConnection();
            }
        })
    })
}

function endConnection() {
    inquirer.prompt([
        {
            name: 'confirm',
            type: 'confirm',
            message: 'Would you like to purchase another product?'
        }
    ]).then(function (answer) {
        if (answer.confirm) {
            start();
        }
        else {
            connection.end();
        }
    })
}