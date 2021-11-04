-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/dlhqbZ
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

-- https://launchbylunch.com/posts/2014/Feb/16/sql-naming-conventions/#key-fields
-- https://www.postgresqltutorial.com/postgresql-serial/
-- https://docs.djangoproject.com/en/3.2/topics/db/models/
-- https://stackoverflow.com/questions/27796024/chat-database-model
-- https://stackoverflow.com/questions/563090/what-exactly-do-quotation-marks-around-the-table-name-do
-- https://www.postgresqltutorial.com/postgresql-char-varchar-text/

CREATE TABLE "Snome" (
    "id" SERIAL NOT NULL,
    "owner_id" int   NOT NULL,
    "location" int   NOT NULL,
    "time_to_mountain" text  NOT NULL,
    "mountain_access" text  NOT NULL,
    "availability_start" varchar   NOT NULL,
    "availability_end" varchar   NOT NULL,
    "address" text  NOT NULL,
    "bedrooms" int   NOT NULL,
    "bathrooms" int   NOT NULL,
    "number_of_beds" int   NOT NULL,
    "perks" text  NOT NULL,
    "description" text  NOT NULL,
    CONSTRAINT "pk_Snome" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" text  NOT NULL,
    "travel_start" varchar   NOT NULL,
    "travel_end" varchar   NOT NULL,
    "about_me" text  NOT NULL,
    "age" int   NOT NULL,
    "phone" int   NOT NULL,
    "email" text  NOT NULL,
    "mail_address" text  NOT NULL,
    "residential_address" text  NOT NULL,
    CONSTRAINT "pk_User" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "name" text NOT NULL,
    "longitude" float   NOT NULL,
    "latitude" float   NOT NULL,
    "city" text  NOT NULL,
    "state" text  NOT NULL,
    "images(foreign" key)   NOT NULL,
    "description" text  NOT NULL,
    "notable_features" text  NOT NULL,
    "links" text  NOT NULL,
    CONSTRAINT "pk_Location" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Like" (
    "id" SERIAL   NOT NULL,
    "user_id" int   NOT NULL,
    "snome_id" int   NOT NULL,
    CONSTRAINT "pk_Like" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Match" (
    "id" SERIAL NOT NULL,
    "user_id" int   NOT NULL,
    "snome_id" int   NOT NULL,
    CONSTRAINT "pk_Match" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "recipient" id   NOT NULL,
    "sender" id   NOT NULL,
    "time" timestamp   NOT NULL,
    "message_text" text  NOT NULL,
    CONSTRAINT "pk_Message" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Trip" (
    "id" SERIAL NOT NULL,
    "trip_start" date   NOT NULL,
    "trip_end" date   NOT NULL,
    "user_id" int   NOT NULL,
    "snome_id" int   NOT NULL,
    CONSTRAINT "pk_Trip" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "Photo" (
    "id" SERIAL  NOT NULL,
    "snome" int   NOT NULL,
    "filename" text  NOT NULL,
    "caption" varchar   NOT NULL,
    CONSTRAINT "pk_Photo" PRIMARY KEY (
        "id"
     )
);

ALTER TABLE "Snome" ADD CONSTRAINT "fk_Snome_owner_id" FOREIGN KEY("owner_id")
REFERENCES "User" ("id");

ALTER TABLE "Snome" ADD CONSTRAINT "fk_Snome_location" FOREIGN KEY("location")
REFERENCES "Location" ("id");

ALTER TABLE "Like" ADD CONSTRAINT "fk_Like_user_id" FOREIGN KEY("user_id")
REFERENCES "User" ("id");

ALTER TABLE "Like" ADD CONSTRAINT "fk_Like_snome_id" FOREIGN KEY("snome_id")
REFERENCES "Snome" ("id");

ALTER TABLE "Match" ADD CONSTRAINT "fk_Match_user_id" FOREIGN KEY("user_id")
REFERENCES "User" ("id");

ALTER TABLE "Match" ADD CONSTRAINT "fk_Match_snome_id" FOREIGN KEY("snome_id")
REFERENCES "Snome" ("id");

ALTER TABLE "Message" ADD CONSTRAINT "fk_Message_recipient" FOREIGN KEY("recipient")
REFERENCES "User" ("id");

ALTER TABLE "Message" ADD CONSTRAINT "fk_Message_sender" FOREIGN KEY("sender")
REFERENCES "User" ("id");

ALTER TABLE "Trip" ADD CONSTRAINT "fk_Trip_user_id" FOREIGN KEY("user_id")
REFERENCES "User" ("id");

ALTER TABLE "Trip" ADD CONSTRAINT "fk_Trip_snome_id" FOREIGN KEY("snome_id")
REFERENCES "Snome" ("id");

ALTER TABLE "Photo" ADD CONSTRAINT "fk_Photo_snome" FOREIGN KEY("snome")
REFERENCES "Snome" ("id");

