-- Creates the "animals_db" database --
CREATE DATABASE IF NOT EXISTS bamazon_db;

-- Makes it so all of the following code will affect bamazon_db --
USE bamazon_db;

-- Creates the table "products" within bamazon_db --
CREATE TABLE IF NOT EXISTS products (
  -- Makes an integer column called "item_id" which cannot contain null and will be used --
  -- as the primary key --
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  product_name VARCHAR(50) NOT NULL,
  -- Makes a sting column called "pet_name" --
  department_name VARCHAR(30),
  -- Makes an numeric column called "pet_age" --
  price DECIMAL(5,2),
  -- Makes an numeric column called "pet_age" --
  stock_quantity INTEGER(10)
  
  -- Makes a boolean column called "is_available" which cannot contain null --
  -- is_available BOOLEAN NOT NULL,

);

-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("razors", "home", 4.99, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shirts", "clothing", 11.99, 62);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pants", "clothing", 12.99, 13);


