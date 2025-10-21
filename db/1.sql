CREATE TABLE "places" (
  "id" serial PRIMARY KEY,
  "name" varchar,
  "city" varchar,
  "department" varchar,
  "general_vector" varchar,
  "created_at" varchar,
  "updated_at" varchar
);

CREATE TABLE "owners_place" (
  "place_id" int,
  "owner_id" int
);

CREATE TABLE "owners" (
  "id" serial PRIMARY KEY,
  "identification_type" varchar,
  "identification_number" varchar UNIQUE,
  "name" varchar,
  "last_name" varchar,
  "second_last_name" varchar
);

CREATE TABLE "lands" (
  "id" serial PRIMARY KEY,
  "place_id" int,
  "land_number" int UNIQUE,
  "value" int,
  "measure" float,
  "measure_unit" varchar,
  "currency" varchar,
  "is_sold" boolean,
  "vector" varchar
);

CREATE TABLE "buyers" (
  "id" serial PRIMARY KEY,
  "name" varchar,
  "last_name" varchar,
  "second_name" varchar,
  "identification_type" varchar,
  "identification_number" varchar,
  "phone_number" varchar,
  "addres" varchar
);

CREATE TABLE "sells" (
  "id" serial PRIMARY KEY,
  "buyer_id" int,
  "land_id" int,
  "land_final_value" float,
  "number_of_installments" int,
  "real_state_registrion" varchar
);

CREATE TABLE "installments" (
  "id" serial PRIMARY KEY,
  "sell_id" int,
  "value" float
);

ALTER TABLE "owners_place" ADD FOREIGN KEY ("place_id") REFERENCES "places" ("id");

ALTER TABLE "owners_place" ADD FOREIGN KEY ("owner_id") REFERENCES "owners" ("id");

ALTER TABLE "lands" ADD FOREIGN KEY ("place_id") REFERENCES "places" ("id");

ALTER TABLE "sells" ADD FOREIGN KEY ("buyer_id") REFERENCES "buyers" ("id");

ALTER TABLE "sells" ADD FOREIGN KEY ("land_id") REFERENCES "lands" ("id");

ALTER TABLE "installments" ADD FOREIGN KEY ("id") REFERENCES "sells" ("id");
