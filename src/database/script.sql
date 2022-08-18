use car_rental;

CREATE TABLE brand(
	brand_id INTEGER NOT NULL AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL,
	created_at TIMESTAMP NOT NULL,
	updated_at TIMESTAMP NOT NULL,
	CONSTRAINT pk_brand PRIMARY KEY (brand_id)
);

CREATE TABLE model (
	model_id INTEGER NOT NULL AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL,
	brand_id INTEGER NOT NULL,
	created_at DATETIME NOT NULL,
	updated_at DATETIME NOT NULL,
	CONSTRAINT pk_model PRIMARY KEY (model_id),
	CONSTRAINT fk_model_brand FOREIGN KEY (brand_id)
		REFERENCES brand(brand_id)
);

CREATE TABLE car (
	chassis VARCHAR(17) NOT NULL,
	plate_number VARCHAR(8) NOT NULL,
	color VARCHAR(15) NOT NULL,
	car_year INTEGER(4) NOT NULL,
	fuel_type INTEGER(2) NOT NULL,
	door_number INTEGER(2) NOT NULL,
	mileage DECIMAL(12,5) NOT NULL,
	renavam VARCHAR(11) NOT NULL,
	rental_price DECIMAL(7,2) NOT NULL,
	model_id INTEGER NOT NULL,
	created_at DATETIME NOT NULL,
	updated_at DATETIME NOT NULL,
	CONSTRAINT pk_car PRIMARY KEY (chassis),
	CONSTRAINT fk_car_model FOREIGN KEY (model_id)
		REFERENCES model(model_id)
);

CREATE TABLE customer (
	customer_id INTEGER AUTO_INCREMENT NOT NULL,
	name VARCHAR(30) NOT NULL,
	cpf_cnpj VARCHAR(11) NOT NULL,
	phone VARCHAR(18) NOT NULL,
	address VARCHAR(50) NOT NULL,
	email VARCHAR(50) NULL,
	created_at DATETIME NOT NULL,
	updated_at DATETIME NOT NULL,
	CONSTRAINT pk_customer PRIMARY KEY (customer_id)
);

CREATE TABLE rent (
	chassis VARCHAR(17) NOT NULL,
	customer_id INTEGER NOT NULL,
	rent_date DATETIME NOT NULL,
	CONSTRAINT pk_rent PRIMARY KEY (rent_date),
	CONSTRAINT fk_rent_car FOREIGN KEY (chassis)
		REFERENCES car(chassis),
	CONSTRAINT fk_rent_customer FOREIGN KEY (customer_id)
		REFERENCES customer(customer_id)
);

ALTER TABLE car DROP COLUMN fuel_type;
ALTER TABLE car ADD COLUMN fuel_type VARCHAR(15) NOT NULL;

INSERT INTO brand(brand_id, name, created_at, updated_at) VALUES(1, 'Wolksvagen', '2022-08-18 15:54:00', '2022-08-18 15:54:00');
INSERT INTO brand(brand_id, name, created_at, updated_at) VALUES(2, 'Chevrolet', '2022-08-18 15:54:00', '2022-08-18 15:54:00');
INSERT INTO brand(brand_id, name, created_at, updated_at) VALUES(3, 'Toyota', '2022-08-18 15:54:00', '2022-08-18 15:54:00');
INSERT INTO brand(brand_id, name, created_at, updated_at) VALUES(4, 'Renault', '2022-08-18 15:54:00', '2022-08-18 15:54:00');

INSERT INTO model(brand_id, model_id, name, created_at, updated_at) VALUES(1, 1, 'Gol', '2022-08-18 15:54:00', '2022-08-18 15:54:00');
INSERT INTO model(brand_id, model_id, name, created_at, updated_at) VALUES(1, 2, 'Polo', '2022-08-18 15:54:00', '2022-08-18 15:54:00');
INSERT INTO model(brand_id, model_id, name, created_at, updated_at) VALUES(2, 3, 'Onix', '2022-08-18 15:54:00', '2022-08-18 15:54:00');
INSERT INTO model(brand_id, model_id, name, created_at, updated_at) VALUES(2, 4, 'Prisma', '2022-08-18 15:54:00', '2022-08-18 15:54:00');
INSERT INTO model(brand_id, model_id, name, created_at, updated_at) VALUES(3, 5, 'Corolla', '2022-08-18 15:54:00', '2022-08-18 15:54:00');
INSERT INTO model(brand_id, model_id, name, created_at, updated_at) VALUES(3, 6, 'Etios', '2022-08-18 15:54:00', '2022-08-18 15:54:00');
INSERT INTO model(brand_id, model_id, name, created_at, updated_at) VALUES(4, 7, 'Kwid', '2022-08-18 15:54:00', '2022-08-18 15:54:00');
INSERT INTO model(brand_id, model_id, name, created_at, updated_at) VALUES(4, 8, 'Sandero', '2022-08-18 15:54:00', '2022-08-18 15:54:00');

