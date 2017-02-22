-- Creates the "animals_db" database --
CREATE DATABASE IF NOT EXISTS Bamazon;

-- Makes it so all of the following code will affect Bamazon --
USE Bamazon;

-- Creates the table "products" within Bamazon --
CREATE TABLE products(
  -- Makes an integer column called "item_id" which cannot contain null and will be used --
  -- as the primary key --
  item_id INTEGER(2) NOT NULL AUTO_INCREMENT,
  -- Makes a string column called "product_name" which cannot contain null --
  product_name VARCHAR(50) NOT NULL,
  -- Makes a sting column called "department_name" --
  department_name VARCHAR(30),
  -- Makes an numeric column called "price" --
  price DECIMAL(6,2),
  -- Makes an numeric column called "stock_quantity" --
  stock_quantity INTEGER(10),

  primary key (item_id)

);




