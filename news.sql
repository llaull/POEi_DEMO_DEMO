-- MySQL Script generated by MySQL Workbench
-- 03/03/15 16:13:46
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema news
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `news` ;

-- -----------------------------------------------------
-- Schema news
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `news` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `news` ;

-- -----------------------------------------------------
-- Table `news`.`categories`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `news`.`categories` ;

CREATE TABLE IF NOT EXISTS `news`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `value` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `news`.`news`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `news`.`news` ;

CREATE TABLE IF NOT EXISTS `news`.`news` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `contenu` LONGTEXT NULL,
  `categories_id` INT NOT NULL,
  `titre` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_news_categories_idx` (`categories_id` ASC),
  CONSTRAINT `fk_news_categories`
    FOREIGN KEY (`categories_id`)
    REFERENCES `news`.`categories` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `news`.`tags`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `news`.`tags` ;

CREATE TABLE IF NOT EXISTS `news`.`tags` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `value` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `news`.`news_tags`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `news`.`news_tags` ;

CREATE TABLE IF NOT EXISTS `news`.`news_tags` (
  `tags_id` INT NOT NULL,
  `news_id` INT NOT NULL,
  INDEX `fk_news_tags_tags1_idx` (`tags_id` ASC),
  INDEX `fk_news_tags_news1_idx` (`news_id` ASC),
  CONSTRAINT `fk_news_tags_tags1`
    FOREIGN KEY (`tags_id`)
    REFERENCES `news`.`tags` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_news_tags_news1`
    FOREIGN KEY (`news_id`)
    REFERENCES `news`.`news` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
