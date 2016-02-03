DROP DATABASE paypal_takehome;

CREATE DATABASE paypal_takehome;

USE paypal_takehome;

CREATE TABLE payees (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE transactions (
  id int NOT NULL AUTO_INCREMENT,
  amount numeric(15,2) NOT NULL,
  payee_id int NOT NULL,
  trans_date date,
  currency varchar(3),
  FOREIGN KEY (payee_id) REFERENCES payees(id),
  PRIMARY KEY (id)
);
