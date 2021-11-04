-- Home Page
SELECT * FROM users WHERE location = $1
LIST VIEW: SELECT name, cover_image FROM location WHERE featured = true
MAP VIEW: SELECT longitude, latitude FROM location LIMIT 6
