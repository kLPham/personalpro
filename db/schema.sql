CREATE TABLE consumers (
    id serial primary key,
    authId varchar(40),
    name varchar(40)
);

-- CREATE TABLE consumers (
--     id serial primary key,
--     authId varchar(40),
--   name varchar(40)
-- );
-- INSERT INTO consumers (authId, name) VALUES ('13678','Jessie Chan');
-- INSERT INTO consumers (authId, name) VALUES ('13679','Nadia Gonzales');
-- INSERT INTO consumers (authId, name) VALUES ('13680','Gibb Thimonmatri');
-- INSERT INTO consumers (authId, name) VALUES ('13681','Katie Smith');
-- INSERT INTO consumers (authId, name) VALUES ('13682','Leah Dombrovsky');
-- INSERT INTO consumers (authId, name) VALUES ('13683','Kara Cavanaugh');
-- INSERT INTO consumers (authId, name) VALUES ('13684','Valentina Abramova');
-- INSERT INTO consumers (authId, name) VALUES ('13685','Aja Cederberg');
-- INSERT INTO consumers (authId, name) VALUES ('13685','Vannessa Pham');
-- INSERT INTO consumers (authId, name) VALUES ('13686', 'Salena Gomez');

-- ALTER TABLE consumers
--   ADD login varchar(40),
--   Add email varchar(40),
--   Add phone_number varchar(40),
--   ADD shipping_address varchar(40),
--   ADD billing_address varchar(40);



  

-- CREATE TABLE Products (
--     id serial primary key,
--     authId varchar(40),
--     name varchar(40)
-- );
-- ALTER TABLE products
--   ADD brand varchar(40),
--   ADD description varchar(40),
--   ADD size varchar(40),
--   ADD color varchar(40),
--   ADD unit_price varchar(40),
--   ADD quantity varchar(40);

-- INSERT INTO products (name) VALUES ('Jessie Chan');

-- CREATE TABLE Orders (
--     id serial primary key,
--     authId varchar(40),
--     name varchar(40)
-- );



-- ALTER TABLE consumer
--   ADD product varchar(40);

-- ALTER TABLE consumer
--   ADD quantity varchar(40);

-- ALTER TABLE consumer
--   ADD Login varchar(40);



-- INSERT INTO consumers (login, email, phone_number, shipping_address, billing_address)
-- VALUES("JChan", "JChan@gmail.com","817-875-5008", "5924 royal lane suit 104 
-- dallas, TX 75300","5924 royal lane suit 104 
-- dallas, TX 75300 ")
-- WHERE name = "Jessie Chan";

-- UPDATE consumers SET login ="JChan" WHERE name= "Jessie Chan";
-- UPDATE consumers set email= "JChan@gmail.com" where name= "Jessie Chan";
-- UPDATE consumers set phone_number= "817-875-5008" where name= "Jessie Chan";
-- UPDATE consumers set shipping_address= "222 mattock meadow dr, Arlington, TX 76015" where name= "Jessie Chan";
-- UPDATE consumers set Billing_address= "222 mattock meadow dr, Arlington, TX 76015" where name= "Jessie Chan";

-- UPDATE users set lastname='Pham' where name='Kelly';



-- UPDATE users set lastname='Pham' where name='Kelly';


-- ALTER TABLE consumers DROP "password";
-- ALTER TABLE consumers DROP "shipping_street_address";
-- ALTER TABLE consumers DROP "shipping_city_address";
-- ALTER TABLE consumers DROP "shipping_state_address";
-- ALTER TABLE consumers DROP "shipping_postalcode_address";
-- DELETE FROM consumers
-- WHERE name='Jessie Chan';

ALTER TABLE products DROP "name";
