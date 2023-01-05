CREATE DATABASE ces_portal;


CREATE TABLE admin(
    admin_id SERIAL PRIMARY KEY,
    firstname VARCHAR(50),
    lasttname VARCHAR(50),
    description VARCHAR(150),
    email VARCHAR(50),
    password VARCHAR(100)
);


INSERT INTO admin (firstname, lasttname, description, email, password) VALUES ('john', 'l', 'boss', 'j@j', 'abcd1234');
INSERT INTO admin (firstname, lasttname, description, email, password) VALUES ('henry', 'r', 'boss', 'h@h', 'abcd12345');
INSERT INTO admin (firstname, lasttname, description, email, password) VALUES ('kyle', 'p', 'boss', 'k@k', 'abcd123456');




CREATE TABLE client(
    client_id SERIAL PRIMARY KEY,
    firstname VARCHAR(50),
    lasttname VARCHAR(50),
    description VARCHAR(150),
    creator_admin INT,
    email VARCHAR(50),
    password VARCHAR(100)
);