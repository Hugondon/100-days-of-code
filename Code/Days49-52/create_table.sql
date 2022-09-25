-- CREATE TABLE `restaurant_finder`.`addresses` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `street` VARCHAR(255) NOT NULL,
--   `street_number` VARCHAR(255) NOT NULL,
--   `city` VARCHAR(255) NOT NULL,
--   `postal_code` INT NOT NULL,
--   `country` VARCHAR(255) NOT NULL,
--   PRIMARY KEY (`id`));

-- CREATE TABLE `restaurant_finder`.`types` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `name` VARCHAR(100) NOT NULL,
--   PRIMARY KEY (`id`));

  CREATE TABLE `restaurant_finder`.`restaurants` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `address_id` INT NOT NULL,
  `type_id` INT NOT NULL,
  PRIMARY KEY (`id`));


-- CREATE TABLE `restaurant_finder`.`reviews` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `reviewer_name` VARCHAR(255) NOT NULL,
--   `rating` INT NOT NULL,
--   `text` TEXT NULL,
--   `date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
--   `restaurant_id` INT NOT NULL,
--   PRIMARY KEY (`id`));
