CREATE DATABASE demo;
-- CREATE DATABASE IF NOT EXISTS demo;

-- DROP DATABASE demo; to delete a database
-- DROP DATABASE IF EXISTS demo;

USE demo; -- to use an database

CREATE TABLE student( -- Create
	id INT PRIMARY KEY, -- PRIMARY KEY can not be null and should be always unique and each table can have only 1 Primary Key
    -- PRIMARY KEY(id), -- SAME as above if we havent set it to PRIMARY KEY
    name varchar(50),
    age INT NOT NULL,
    CONSTRAINT age_check CHECK (age >= 0 AND name IS NOT NULL AND name <> '')
    -- age INT CHECK(age >=0)
    -- salary INT DEFAULT 10000 --Default value set
    -- PRIMARY KEY (id, name) -- if you want multiple primary key then we can create a combination primary key
    -- mail VARCHAR(100) UNIQUE  -- This isnt Primary Key but makes sure its unique
    -- temp TINYINT UNSIGNED -- (UNSIGNED meaning rather -127 to +127 it will be 0-255)
);

-- Alter Table
DROP TABLE demo;
DROP TABLE IF EXISTS demo;

ALTER TABLE student
ADD tempCol INT; -- COLUMN_NAME DATA_TYPE
-- ADD CONSTRAINT age_check CHECK (age >= 0 AND name IS NOT NULL AND name <> '');

ALTER TABLE student
MODIFY tempCol FLOAT;

ALTER TABLE student
DROP COLUMN tempCol; -- COLUMN COLUMN_NAME

ALTER TABLE new_student
RENAME TO student;

ALTER TABLE student
CHANGE COLUMN name new_name INT ;

-- ONE by ONE also we need to mention what we are adding if we are not adding something like if we are not adding name then 
-- after INTO student (id, age) if not order, else if its just id and name that we dont need to mention becuae they are in order.
INSERT INTO student VALUES(1, "SQL",10); -- Insert into the table also order matters
INSERT INTO student VALUES(2, "SQL",20);

-- MULTIPLE at ONCE 
INSERT INTO student (id, name, age) VALUES (3, "SQL", 30),(4,"SQL",40);


SELECT * FROM student;
SHOW DATABASES; -- To show all databses that exist
SHOW TABLES; -- To show all tables of currently used  Database

-- FORIEGN KEY
CREATE TABLE foreignKey(
	id INT,
    FOREIGN KEY (id) references student(id)
);
INSERT INTO foreignKey VALUES(1);
-- INSERT INTO foreignKey VALUES(100); -- Not allowed as student does not have 100 as id
SELECT * FROM foreignKey;









-- General Order
/*
SELECT column(s)
FROM table_name
WHERE condition
GROUP BY column(s)
HAVING condition
ORDER BY column(s) ASC;
*/




