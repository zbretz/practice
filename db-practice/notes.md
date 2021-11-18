following this tutorial:

https://geshan.com.np/blog/2021/01/nodejs-postgresql-tutorial/

To create matches:
snome must exist
user must exist
like must occur/exist
check for reciprocal like (user -> snome)
if reciprocal like -> create match record
select all matches to display/alert user

# to get table names:
SELECT * FROM snome WHERE 1=0;
 id | owner_id | location_id | header | time_to_mountain | mountain_access | availability_start | availability_end | street_address | bedrooms | bathrooms | number_of_beds | perks | snome_description

# to check num of records
select count(*) from snome;

# insert a snome:
INSERT INTO snome (owner_id, location_id, header, time_to_mounain, mountain_access, availability_start, availability_end, street_address, bedrooms, bathrooms, number_of_beds, perks, snome_description)
VALUES (99,d, d, d, d, d, d, 2, 2, 3, d, d);