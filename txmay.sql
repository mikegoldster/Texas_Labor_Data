USE heroku_6e5a2e6badc386d;
CREATE TABLE `heroku_6e5a2e6badc386d`.`area` (
  `id` INT NOT NULL,
  `code` INT NULL,
  `name` VARCHAR(45) NULL,
  `long` INT NULL,
  `lat` INT NULL,
  PRIMARY KEY (`id`));
CREATE TABLE `heroku_6e5a2e6badc386d`.`group` (
  `id` INT NOT NULL,
  `group` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
CREATE TABLE `heroku_6e5a2e6badc386d`.`occ` (
  `id` INT NOT NULL,
  `code` INT NULL,
  `name` VARCHAR(45) NULL,
  `group` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `group_idx` (`group` ASC),
  CONSTRAINT `group`
    FOREIGN KEY (`group`)
    REFERENCES `heroku_6e5a2e6badc386d`.`group` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
ALTER TABLE `heroku_6e5a2e6badc386d`.`work` 
DROP COLUMN `major`,
CHANGE COLUMN `detail` `occ` INT(11) NULL DEFAULT NULL ,
ADD INDEX `area_idx` (`area` ASC),
ADD INDEX `occ_idx` (`occ` ASC);
;
ALTER TABLE `heroku_6e5a2e6badc386d`.`work` 
ADD CONSTRAINT `area`
  FOREIGN KEY (`area`)
  REFERENCES `heroku_6e5a2e6badc386d`.`area` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `occ`
  FOREIGN KEY (`occ`)
  REFERENCES `heroku_6e5a2e6badc386d`.`occ` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
