-- Home Page
SELECT * FROM users WHERE location = $1
LIST VIEW: SELECT name, cover_image FROM location WHERE featured = true
MAP VIEW: SELECT longitude, latitude FROM location LIMIT 6

-- Media
INSERT INTO location_media(location, type, filename, caption)
VALUES($1, $2, $3, $4)
SELECT * FROM location_media WHERE type='video' ORDER BY RANDOM() LIMIT 1;
UPDATE location_media SET $1 = $2 WHERE id=$3
DELETE FROM location_media WHERE id = $1

-- Snome
INSERT INTO location_media(location, type, filename, caption)
VALUES($1, $2, $3, $4)
SELECT * FROM location_media WHERE type='video' ORDER BY RANDOM() LIMIT 1;
UPDATE location_media SET $1 = $2 WHERE id=$3
DELETE FROM location_media WHERE id = $1

-- Profile Queries
INSERT INTO user (location_id, name, travel_start, travel_end, about, video_tour)
VALUES ($1, $2, $3, $4, $5, $6, $7)
SELECT * FROM user
UPDATE user SET $1 = $2 WHERE id =$3
DELETE FROM user WHERE id = $1