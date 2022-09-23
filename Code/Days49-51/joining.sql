-- SELECT * FROM restaurants;
-- SELECT * FROM restaurants INNER JOIN addresses;
-- SELECT * FROM restaurants INNER JOIN addresses ON (restaurants.address_id = addresses.id);
-- SELECT restaurants.id, restaurants.name, addresses.* FROM restaurants INNER JOIN addresses ON (restaurants.address_id = addresses.id);
-- SELECT restaurants.id, restaurants.name, addresses.*, types.name AS type_name FROM restaurants 
-- INNER JOIN addresses ON (restaurants.address_id = addresses.id)
-- INNER JOIN types ON (restaurants.type_id = types.id)
-- WHERE addresses.city = 'Guadalajara';

SELECT reviews.*, restaurants.name AS restaurant_name, addresses.*, types.name AS restaurant_type FROM reviews
INNER JOIN restaurants ON reviews.restaurant_id = restaurants.id
INNER JOIN addresses ON restaurants.address_id = addresses.id
INNER JOIN types ON restaurants.type_id = types.id
WHERE rating > 3;