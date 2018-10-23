DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity DECIMAL(10,2) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Almonds", "Nuts", 2.19, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Brazil Nuts", "Nuts", 4.39, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cashews", "Nuts", 8.09, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hazelnuts", "Nuts", 5.76, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Peanuts", "Nuts", 1.68, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pecans", "Nuts", 4.21, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pistachios", "Nuts", 11.46, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Walnuts", "Nuts", 4.47, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Trail Mix", "Nuts", 4.30, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Energy Mix", "Nuts", 3.21, 50);

SELECT * FROM products